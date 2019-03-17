calculateButton = document.getElementById("calculateButton");

calculateButton.disabled = true;
calculateButton.addEventListener("click", calculateBarChart);

playerTable = document.getElementById("player");
playerTable2 = document.getElementById("player2");

function setUpPlayerTables() {
	var selectString = "";
	for (var guild_name in guilds) {
		guild = guilds[guild_name];
		selectString += "<option value=\"spacer\">" + guild.name.toUpperCase() + "</option>\n";
		for (var player_name in guild.players) {
			player = guild.players[player_name];
			selectString += "<option value=\"" + player +"\">" + players[player].name + "</option>\n";
		}
	}
	playerTable.innerHTML = selectString;
	playerTable2.innerHTML = selectString;
}

setUpPlayerTables();

playerTable.addEventListener("change", didChangePlayerSelection);
playerTable2.addEventListener("change", didChangePlayerSelection);

compareBox = document.getElementById("compareCharts");

compareBox.addEventListener("change", didChangeCompareCharts);

attacksInput = document.getElementById("attacks");
attacksInput2 = document.getElementById("attacks2");

attacksInput.addEventListener("change", didChangeAttacks);
attacksInput2.addEventListener("change", didChangeAttacks);

doChargeAttack = document.getElementById("doChargeAttack");
doChargeAttack2 = document.getElementById("doChargeAttack2");

didChangeCompareCharts();
document.getElementById("chartkey").style.display = 'none';

damageColumns = [1, 1, 1, 2, 2, 3, 3];

damageProbCache = [];

function factorial(f) {
    if (f <= 0)
        return 1;
    return f * factorial(f-1);
}

function choose(n,k) {
    if (n < k)
        return 0;
    return factorial(n)/(factorial(k)*factorial(n-k));
}

function probGettingExactSuccesses(rolls, successes, TN, reRoll) {
	probSuccessRoll = (7.0-TN)/6.0;
	if (reRoll)
		probSuccessRoll = 1 - (TN-1.0)*(TN-1.0)/36.0;
	return Math.pow(probSuccessRoll, successes) * Math.pow(1 - probSuccessRoll, rolls-successes) * choose(rolls, successes);
}

function probGettingSuccesses(rolls, successes, TN, reRoll) {
	result = 0.0;
	var dice = rolls;
	for (dice = rolls; dice >= successes; dice--) {
        result += probGettingExactSuccesses(rolls, dice, TN, reRoll);
	}
	return result;
}

function expectedDamage(TAC, TN, ARM, dmgBoost, reRoll) {
    var result = 0.0;
    var dice = 1;
    for (dice = 1; dice + ARM <= TAC; dice++) {
        chance = probGettingExactSuccesses(TAC, dice + ARM, TN, reRoll);
        tmpdice = dice;
        while (tmpdice > damageColumns.length) {
            result += chance * damageColumns[damageColumns.length - 1];
            tmpdice -= damageColumns.length;
            if (dmgBoost != 0) {
                result += dmgBoost * chance;
            }
        }
        result += chance * damageColumns[tmpdice - 1];
        if (dmgBoost != 0) {
            result += dmgBoost * chance;
        }
    }
    return result;
}


function damageCacheWrapper(step, damage) {
    if (damageProbCache[step] == undefined)
    {
        return 0.0;
    }
    if (damageProbCache[step][damage] == undefined)
    {
        return 0.0;
    }
    return damageProbCache[step][damage];
}

function probExactlyThisMuchDamage(TAC, TN, ARM, dmgBoost, DMG, reRoll) {
    var result = 0.0;
    var column = 0;
    var tmpcolumn = 0;
    var tmpDMG = 0;
    var chance = 0.0;
    for (column = 1; column <= TAC; column++) {
        tmpcolumn = column;
        tmpDMG = 0;
        while (tmpcolumn > damageColumns.length) {
            tmpDMG += damageColumns[damageColumns.length - 1];
            tmpcolumn -= damageColumns.length;
            if (dmgBoost != 0) {
                tmpDMG += dmgBoost;
            }
        }
        tmpDMG += damageColumns[tmpcolumn - 1];
        if (dmgBoost != 0) {
            tmpDMG += dmgBoost;
        }
        if (DMG == tmpDMG) {
            chance = probGettingExactSuccesses(TAC, column + ARM, TN, reRoll);
            result += chance;
        }
    }
    if (DMG == 0) {
        result += 1.0 - probGettingSuccesses(TAC, 1 + ARM, TN, reRoll);
    }
    return result;
}

function buildExactDamageCache(TAC, TN, ARM, dmgBoost, maxDMG, whichStep, reRoll) {
    var result = 0.0;
    var damage = 0;
    damageProbCache[whichStep] = []
    if (whichStep == 0) {
        for (damage = 0; damage <= maxDMG; damage++) {
            damageProbCache[whichStep][damage] = probExactlyThisMuchDamage(TAC, TN, ARM, dmgBoost, damage, reRoll);
        }
        return;
    }
    for (damage = 0; damage < (maxDMG + damageProbCache[whichStep - 1].length); damage++) {
        damageProbCache[whichStep][damage] = 0.0;
        for (damage2 = 0; damage2 <= damage; damage2++) {
            damageProbCache[whichStep][damage] += probExactlyThisMuchDamage(TAC, TN, ARM, dmgBoost, damage2, reRoll) * damageCacheWrapper(whichStep - 1, damage - damage2);
        }
    }
}

function printDamageInMultipleHits(TAC, TN, ARM, dmgBoost, maxDMG, HITS, doCharge, reRolls, maxChargeDMG) {
    var outstring = "";
    var damage = 0;
    var probability = [];
    var atLeastProbability = [];
    var isTooWide = false;
    var hitCount = 0;
    if (maxDMG > 25)
    {
        isTooWide = true;
    }
    for (hitCount = 0; hitCount < HITS; hitCount++) {
		var reRoll = (!doCharge && hitCount == 0 && reRolls == "first") || (reRolls == "all");
        buildExactDamageCache(TAC, TN, ARM, dmgBoost, 1 + (maxDMG/HITS), hitCount, reRoll);
    }
	if (doCharge) {
		var reRoll = reRolls == "first" || reRolls == "all";
		buildExactDamageCache(TAC + 4, TN, ARM, dmgBoost, maxChargeDMG, HITS, reRoll);
	}
    for (damage = 0; damage <= maxDMG ; damage++) {
		if (doCharge) {
	        probability[damage] = damageCacheWrapper(HITS, damage);
		}
		else {
	        probability[damage] = damageCacheWrapper(HITS - 1, damage);
		}
    }
    for (damage = 0; damage <= maxDMG; damage++) {
        atLeastProbability[damage] = 0.0;
        for (greaterDamage = damage; greaterDamage <= maxDMG; greaterDamage++) {
        atLeastProbability[damage] += probability[greaterDamage];
        }
    }
    for (damage = 0; damage <= maxDMG; damage++) {
    outstring = outstring + "<li style=\"width: " + (90.0/(maxDMG+1)).toFixed(1) + "%\">\n\t<span class=\"barlabel\">" + 
		damage + "</span>\n\t<span class=\"count\" style=\"height: " + (probability[damage] * 100).toFixed(1) + "%\">" + probability[damage].toFixed(3) + "</span>\n\t<span class=\"barprob\"" + 
		(isTooWide ? " style=\"transform: rotate(90deg);\"" : "") + ">" + probability[damage].toFixed(3) + "</span>\n\t<span class=\"barcumprob\"" + 
		(isTooWide ? " style=\"transform: rotate(90deg);\"" : "") + ">" + atLeastProbability[damage].toFixed(3) + "</span>\n</li>\n"
    }
    return outstring;
}

function printCompareDamageInMultipleHits(TAC, TN, ARM, dmgBoost, HITS, doCharge, reRolls, TAC2, TN2, ARM2, dmgBoost2, HITS2, doCharge2, reRolls2, maxDMG, maxChargeDMG) {
	var outstring = "";
	var damage = 0;
	var probability = [];
	var atLeastProbability = [];
	var probability2 = [];
	var atLeastProbability2 = [];
	var isTooWide = false;
	var chartHeight = 46;/*chartHeight = 100 for old style*/
	var hitCount = 0;
	if (maxDMG > 25)/*maxDMG > 14 for old style*/
	{
		isTooWide = true;
	}
	
	damageColumns = players[document.getElementById("player").value].playbook;

    for (hitCount = 0; hitCount < HITS; hitCount++) {
		var reRoll = (!doCharge && hitCount == 0 && reRolls == "first") || (reRolls == "all");
        buildExactDamageCache(TAC, TN, ARM, dmgBoost, 1 + (maxDMG/HITS), hitCount, reRoll);
    }
	if (doCharge) {
		var reRoll = reRolls == "first" || reRolls == "all";
		buildExactDamageCache(TAC + 4, TN, ARM, dmgBoost, maxChargeDMG, HITS, reRoll);
	}
    for (damage = 0; damage <= maxDMG ; damage++) {
		if (doCharge) {
	        probability[damage] = damageCacheWrapper(HITS, damage);
		}
		else {
	        probability[damage] = damageCacheWrapper(HITS - 1, damage);
		}
    }
	for (damage = 0; damage <= maxDMG; damage++) {
        atLeastProbability[damage] = 0.0;
        for (greaterDamage = damage; greaterDamage <= maxDMG; greaterDamage++) {
        atLeastProbability[damage] += probability[greaterDamage];
        }
	}
	
	damageColumns = players[document.getElementById("player2").value].playbook;
	
    for (hitCount = 0; hitCount < HITS2; hitCount++) {
		var reRoll = (!doCharge2 && hitCount == 0 && reRolls2 == "first") || (reRolls2 == "all");
        buildExactDamageCache(TAC2, TN2, ARM2, dmgBoost2, 1 + (maxDMG/HITS2), hitCount, reRoll);
    }
	if (doCharge2) {
		var reRoll = reRolls2 == "first" || reRolls2 == "all";
		buildExactDamageCache(TAC2 + 4, TN2, ARM2, dmgBoost2, maxChargeDMG, HITS2, reRoll);
	}
    for (damage = 0; damage <= maxDMG ; damage++) {
		if (doCharge2) {
	        probability2[damage] = damageCacheWrapper(HITS2, damage);
		}
		else {
	        probability2[damage] = damageCacheWrapper(HITS2 - 1, damage);
		}
    }
	for (damage = 0; damage <= maxDMG; damage++) {
        atLeastProbability2[damage] = 0.0;
        for (greaterDamage = damage; greaterDamage <= maxDMG; greaterDamage++) {
        atLeastProbability2[damage] += probability2[greaterDamage];
        }
	}
	
	for (damage = 0; damage <= maxDMG; damage++) {
    outstring = outstring + "<li style=\"width: " + (90.0/(maxDMG+1)).toFixed(1) + "%\">\n\t<span class=\"barlabel\">" + damage + "</span>\n\t<span class=\"count1\" style=\"height: " + (probability[damage] * chartHeight).toFixed(1) + "%\">" + probability[damage].toFixed(3) + "</span>\n\t<span class=\"barprob1\"" + (isTooWide ? " style=\"transform: rotate(90deg);\"" : "") + ">" + probability[damage].toFixed(3) + "</span>\n\t<span class=\"barcumprob1\"" + (isTooWide ? " style=\"transform: rotate(90deg);\"" : "") + ">" + atLeastProbability[damage].toFixed(3) + "</span>\n\t<span class=\"count2\" style=\"height: " + (probability2[damage] * chartHeight).toFixed(1) + "%\">" + probability2[damage].toFixed(3) + "</span>\n\t<span class=\"barprob2\"" + (isTooWide ? " style=\"transform: rotate(90deg);\"" : "") + ">" + probability2[damage].toFixed(3) + "</span>\n\t<span class=\"barcumprob2\"" + (isTooWide ? " style=\"transform: rotate(90deg);\"" : "") + ">" + atLeastProbability2[damage].toFixed(3) + "</span>\n</li>\n"
	}
	return outstring;
}

function calculateBarChart() {
	var TAC = parseInt(document.getElementById("TAC").value);
	var TN = parseInt(document.getElementById("TN").value);
	var ARM = parseInt(document.getElementById("ARM").value);
	var dmgBoost = parseInt(document.getElementById("dmgBoost").value);
	var HITS = parseInt(document.getElementById("attacks").value);
	var reRolls = document.getElementById("rerolls").value;
	
	var TAC2 = parseInt(document.getElementById("TAC2").value);
	var TN2 = parseInt(document.getElementById("TN2").value);
	var ARM2 = parseInt(document.getElementById("ARM2").value);
	var dmgBoost2 = parseInt(document.getElementById("dmgBoost2").value);
	var HITS2 = parseInt(document.getElementById("attacks2").value);
	var reRolls2 = document.getElementById("rerolls2").value;
	
	damageColumns = players[document.getElementById("player").value].playbook;

	var maxDMGPerHit = 0;
	var maxChargeDMG = 0;
	var effectiveDice = TAC - ARM;
	while (effectiveDice > damageColumns.length)
	{
		maxDMGPerHit += damageColumns[damageColumns.length - 1];
		effectiveDice -= damageColumns.length;
        if (dmgBoost != 0) {
            maxDMGPerHit += dmgBoost;
        }
	}
	maxDMGPerHit += damageColumns[effectiveDice - 1];
    if (dmgBoost != 0) {
        maxDMGPerHit += dmgBoost;
    }
	
	var maxDMG = maxDMGPerHit * HITS;
	
	if (doChargeAttack.checked) {
		maxDMGPerHit = 0;
		effectiveDice = TAC + 4 - ARM;
		while (effectiveDice > damageColumns.length)
		{
			maxDMGPerHit += damageColumns[damageColumns.length - 1];
			effectiveDice -= damageColumns.length;
	        if (dmgBoost != 0) {
	            maxDMGPerHit += dmgBoost;
	        }
		}
		maxDMGPerHit += damageColumns[effectiveDice - 1];
	    if (dmgBoost != 0) {
	        maxDMGPerHit += dmgBoost;
	    }
		maxChargeDMG = maxDMGPerHit;
		maxDMG += maxDMGPerHit;
	}
	
	if (compareBox.checked)
	{
		damageColumns = players[document.getElementById("player2").value].playbook;

		maxDMGPerHit = 0;
		effectiveDice = TAC2 - ARM2;
		while (effectiveDice > damageColumns.length)
		{
			maxDMGPerHit += damageColumns[damageColumns.length - 1];
			effectiveDice -= damageColumns.length;
	        if (dmgBoost2 != 0) {
	            maxDMGPerHit += dmgBoost2;
	        }
		}
		maxDMGPerHit += damageColumns[effectiveDice - 1];
	    if (dmgBoost2 != 0) {
	        maxDMGPerHit += dmgBoost2;
	    }
		
		var maxDMG2 = maxDMGPerHit * HITS2;
		var maxChargeDMG2 = 0;
		
		if (doChargeAttack2.checked) {
			maxDMGPerHit = 0;
			effectiveDice = TAC2 + 4 - ARM2;
			while (effectiveDice > damageColumns.length)
			{
				maxDMGPerHit += damageColumns[damageColumns.length - 1];
				effectiveDice -= damageColumns.length;
		        if (dmgBoost2 != 0) {
		            maxDMGPerHit += dmgBoost2;
		        }
			}
			maxDMGPerHit += damageColumns[effectiveDice - 1];
		    if (dmgBoost2 != 0) {
		        maxDMGPerHit += dmgBoost2;
		    }
			maxDMG2 += maxDMGPerHit;
			
			maxChargeDMG2 = maxDMGPerHit;
		}
	
		if (maxDMG2 > maxDMG)
		{
			maxDMG = maxDMG2;
		}
		
		if (maxChargeDMG2 > maxChargeDMG)
		{
			maxChargeDMG = maxChargeDMG2;
		}
	}

	var time = performance.now();
	if (compareBox.checked == false)
	{
		document.getElementById("thechart").innerHTML = printDamageInMultipleHits(TAC, TN, ARM, dmgBoost, maxDMG, HITS, doChargeAttack.checked, reRolls, maxChargeDMG);
		document.getElementById("thechart").className = "barchart";
	}
	else if (compareBox.checked == true)
	{
		document.getElementById("thechart").innerHTML = printCompareDamageInMultipleHits(TAC, TN, ARM, dmgBoost, HITS, doChargeAttack.checked, reRolls, TAC2, TN2, ARM2, dmgBoost2, HITS2, doChargeAttack2.checked, reRolls2, maxDMG, maxChargeDMG);
		document.getElementById("thechart").className = "barchart2";
	}
	var taken = performance.now() - time;
	document.getElementById("debugMessages").innerHTML = "Took " + (taken).toFixed(0) + "ms to calculate."
	
	if (compareBox.checked == true)
	{
		document.getElementById("captainName").innerHTML = players[document.getElementById("player").value].name;
		document.getElementById("captainName2").innerHTML = players[document.getElementById("player2").value].name;
		document.getElementById("chartkey").style.display = 'block';
	}
	else
	{
		document.getElementById("chartkey").style.display = 'none';
	}
}

function didChangePlayerSelection() {
	if (playerTable.value == "spacer")
	{
		calculateButton.disabled = true;
	}
	else
	{
		calculateButton.disabled = false;
		if (compareBox.checked == true)
		{
			if (playerTable2.value == "spacer")
			{
				calculateButton.disabled = true;
			}
		}
	}
}

function didChangeCompareCharts() {
	didChangePlayerSelection();
	if (compareBox.checked)
	{
		document.getElementById("extraplayer").style.display = 'block';
	}
	else
	{
		document.getElementById("extraplayer").style.display = 'none';
	}
}

function didChangeAttacks() {
	if (parseInt(attacksInput.value) > 8 || (compareBox.checked && parseInt(attacksInput2.value) > 8))
	{
		document.getElementById("debugMessages").innerHTML = "Warning: doing this many attacks can be slow (not anymore, thanks sensible caching).";
	}
	else
	{
		document.getElementById("debugMessages").innerHTML = "";
	}
}
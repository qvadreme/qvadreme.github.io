calculateButton = document.getElementById("calculateButton");

calculateButton.disabled = true;
calculateButton.addEventListener("click", calculateBarChart);

playerTable = document.getElementById("player");
playerTable2 = document.getElementById("player2");

playBookTable = document.getElementById("playBook1");
playBookTable2 = document.getElementById("playBook2");

playBookSVG = document.getElementById("playBookSVG1")

var draw = SVG('playBookSVG1').size(250, 75);
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

function translatePlayBookEntry(playBookEntry) {
	var playBookEntryString = playBookEntry[0];
	if (playBookEntryString == null) {
		return "";
	}
	var playBookDrawResult = "";
	var lastSymbol = null;
	for (var i = 0; i < playBookEntryString.length; i++) {
		switch(playBookEntryString[i]) {
			case "b": //GB symbol
				if (i != 0) {
					playBookDrawResult += "\n";
				}
				playBookDrawResult += "GB";
				break;
			case "c": //Championship symbol
				if (i != 0) {
					playBookDrawResult += "\n";
				}
				playBookDrawResult += "GC";
				break;
			case "T":
				if (i != 0) {
					playBookDrawResult += "\n";
				}
				playBookDrawResult += "T";
				break;
			case "k":
				if (i != 0) {
					playBookDrawResult += "\n";
				}
				playBookDrawResult += "KD";
				break;
			case "d":
				if (i != 0) {
					if (playBookEntryString[i-1] == "d") {
					}
					else if (playBookEntryString[i-1] == "p" && i+1 == playBookEntryString.length) {
					}
					else {
						playBookDrawResult += "\n";
					}
				} 
				playBookDrawResult += "<";
				break;
			case "p":
				if (i != 0) {
					if (playBookEntryString[i-1] == "p") {
					}
					else {
						playBookDrawResult += "\n";
					}
				} 
				playBookDrawResult += ">";
				break;
			default:
				if (i != 0) {
					playBookDrawResult += "\n";
				}
				playBookDrawResult += playBookEntryString[i];
				break;
		}
	}
	return playBookDrawResult;
}

function drawPlaybook(playerName) {
	var player = players[playerName];
	var playBookString = "";
	playBookTable.innerHTML = "";
	draw.clear();
	if (player == undefined) {
		return;
	}
	if (player.pb_full == null) {
		return;
	}
	if (player.pb_full.length != 2) {
		return;
	}
	var pb_length = player.pb_full[0].length;
	if (player.pb_full[1].length != pb_length) {
		return;
	}
	for (var row = 0; row < 2; row++) {
		playBookString += "<tr id=\"pb1r" + (row + 1) + "\">";
		for (var index = 0; index < pb_length; index++) {
			var translatedString = translatePlayBookEntry(player.pb_full[row][index]);
//			playBookString += "<td class =" + (player.pb_full[row][index][1] ? player.guilds[0] : "") +
//				">" + translatedString + "</td>";
			if (translatedString !== "") {
				var circle = draw.circle(30);
				var text = draw.text(translatedString);
				text.font('size', 10);
				text.font('font-family', 'Calluna-Regular');
				text.addClass('pnums');
				text.rebuild(true);
				var maxSize = Math.max(text.bbox().w, text.bbox().h);
				var ratio = 24.0 / maxSize;
				text.font('size', 10*ratio);
				var x_offset = (30.0 - text.bbox().w)/2.0;
				var y_offset = (30.0 - text.bbox().h)/2.0;
				var guild_colour = guilds[player.guilds[0]].colour;
				if (guild_colour == undefined)
					guild_colour = '#222222'

				if (player.pb_full[row][index][1]) {
					circle.fill(guild_colour);
					circle.stroke('#000000');
					text.stroke('#ffffff');
					text.fill('#ffffff');
				}
				else {
					circle.fill('#ffffff');
					circle.stroke('#000000');
					text.stroke('#000000');
				}

				circle.move(5 + 35*index, 5 + 35*row);
				text.move(5 + x_offset + 35*index, 5 + y_offset + 35*row);
			}
			
		}
		playBookString += "</tr>";
	}
	playBookTable.innerHTML = playBookString;
}

compareBox = document.getElementById("compareCharts");

attacksInput = document.getElementById("attacks");
attacksInput2 = document.getElementById("attacks2");

attacksInput.addEventListener("change", didChangeAttacks);
attacksInput2.addEventListener("change", didChangeAttacks);

doChargeAttack = document.getElementById("doChargeAttack");
doChargeAttack2 = document.getElementById("doChargeAttack2");

didChangeCompareCharts();
document.getElementById("chartkey").style.display = 'none';

function printDamageInMultipleHits(TAC, TN, ARM, dmgBoost, maxDMG, HITS, doCharge, reRolls, maxChargeDMG, damageColumns) {
	var outstring = "";
	var damageProbs = findDamageInMultipleHits(TAC, TN, ARM, dmgBoost, maxDMG, HITS, doCharge, reRolls, maxChargeDMG, damageColumns);
	var isTooWide = false;
	var width = 960, height = 500;
	var chart = d3.select("#thenewchart");
	chart.attr("width", width).attr("height", height + 200);
	var y = d3.scaleLinear().range([height, 0]).domain([0,1]);
	var x = d3.scaleBand().range([0, width]);
	x.domain(damageProbs.map(function(d, i) { return i; }));
	var barWidth = width / damageProbs.length;
//	x.domain([0, d3.max(damageProbs, function(d) { return d.exactProb; })]);
	chart.selectAll(".axis").remove();
	var bar = chart.selectAll("g");
	var barUpdate = bar.data(damageProbs);
	barUpdate.exit().remove();
	var barEnter = barUpdate.enter().append("g");
	barEnter.append("rect");
	barEnter.append("text");
	barUpdate = barEnter.merge(barUpdate)
		.attr("transform", function(d, i) { return "translate(" + i * barWidth + ",0)";});
	barUpdate.on('mouseover', function(d, i) { barUpdate.select("rect").filter(function (b, j) { return j >= i; }).attr("fill", "green");
			barUpdate.select("rect").filter(function (b, j) { return j < i; }).attr("fill", "steelblue"); })
			.on('mouseout', function(d) { barUpdate.select("rect").attr("fill", "steelblue");} );
	barUpdate.select("rect").attr("y", function(d) { return y(d.exactProb); })
						   .attr("height", function(d) { return height - y(d.exactProb); })
						   .attr("width", barWidth - 1).attr("fill", "steelblue")
	barUpdate.select("text").attr("y", function(d) { return y(d.exactProb) + 3; })
						   .attr("x", barWidth / 2)
						   .attr("dy", ".75em")
					   .text(function (d) { return d.exactProb.toFixed(3); });
	var xAxis = d3.axisBottom(x).tickSize(0);
	chart.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis);
	return "";
}

function printDamageInMultipleHitsOld(TAC, TN, ARM, dmgBoost, maxDMG, HITS, doCharge, reRolls, maxChargeDMG, damageColumns) {
	var outstring = "";
	var damageProbs = findDamageInMultipleHits(TAC, TN, ARM, dmgBoost, maxDMG, HITS, doCharge, reRolls, maxChargeDMG, damageColumns);
	var isTooWide = false;
	if (maxDMG > 25)/*maxDMG > 14 for old style*/
	{
		isTooWide = true;
	}
    for (damage = 0; damage <= maxDMG; damage++) {
    outstring = outstring + "<li style=\"width: " + (90.0/(maxDMG+1)).toFixed(1) + "%\">\n\t<span class=\"barlabel\">" + 
		damage + "</span>\n\t<span class=\"count\" style=\"height: " + (damageProbs[damage].exactProb * 100).toFixed(1) + "%\">" + damageProbs[damage].exactProb.toFixed(3) + "</span>\n\t<span class=\"barprob\"" + 
		(isTooWide ? " style=\"transform: rotate(90deg);\"" : "") + ">" + damageProbs[damage].exactProb.toFixed(3) + "</span>\n\t<span class=\"barcumprob\"" + 
		(isTooWide ? " style=\"transform: rotate(90deg);\"" : "") + ">" + damageProbs[damage].cumProb.toFixed(3) + "</span>\n</li>\n"
    }
    return outstring;
}

function printCompareDamageInMultipleHits(TAC, TN, ARM, dmgBoost, HITS, doCharge, reRolls, TAC2, TN2, ARM2, dmgBoost2, HITS2, doCharge2, reRolls2, maxDMG, maxChargeDMG, damageColumns, damageColumns2) {
	var outstring = "";
	var damageProbs = findDamageInMultipleHits(TAC, TN, ARM, dmgBoost, maxDMG, HITS, doCharge, reRolls, maxChargeDMG, damageColumns);
	var damageProbs2 = findDamageInMultipleHits(TAC2, TN2, ARM2, dmgBoost2, maxDMG, HITS2, doCharge2, reRolls2, maxChargeDMG, damageColumns2);
	var isTooWide = false;
	var chartHeight = 46;/*chartHeight = 100 for old style*/
	if (maxDMG > 25)/*maxDMG > 14 for old style*/
	{
		isTooWide = true;
	}
	for (damage = 0; damage <= maxDMG; damage++) {
	outstring = outstring + "<li style=\"width: " + (90.0/(maxDMG+1)).toFixed(1) + "%\">\n\t<span class=\"barlabel\">" + 
		damage + "</span>\n\t<span class=\"count1\" style=\"height: " + (damageProbs[damage].exactProb * chartHeight).toFixed(1) + "%\">" + damageProbs[damage].exactProb.toFixed(3) + "</span>\n\t<span class=\"barprob1\"" + 
		(isTooWide ? " style=\"transform: rotate(90deg);\"" : "") + ">" + damageProbs[damage].exactProb.toFixed(3) + "</span>\n\t<span class=\"barcumprob1\"" + 
		(isTooWide ? " style=\"transform: rotate(90deg);\"" : "") + ">" + damageProbs[damage].cumProb.toFixed(3) + "</span>\n\t<span class=\"count2\" style=\"height: " + 
		(damageProbs2[damage].exactProb * chartHeight).toFixed(1) + "%\">" + damageProbs2[damage].exactProb.toFixed(3) + "</span>\n\t<span class=\"barprob2\"" + 
		(isTooWide ? " style=\"transform: rotate(90deg);\"" : "") + ">" + damageProbs2[damage].exactProb.toFixed(3) + "</span>\n\t<span class=\"barcumprob2\"" + 
		(isTooWide ? " style=\"transform: rotate(90deg);\"" : "") + ">" + damageProbs2[damage].cumProb.toFixed(3) + "</span>\n</li>\n"
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
		damageColumns2 = players[document.getElementById("player2").value].playbook;

		maxDMGPerHit = 0;
		effectiveDice = TAC2 - ARM2;
		while (effectiveDice > damageColumns2.length)
		{
			maxDMGPerHit += damageColumns2[damageColumns2.length - 1];
			effectiveDice -= damageColumns2.length;
	        if (dmgBoost2 != 0) {
	            maxDMGPerHit += dmgBoost2;
	        }
		}
		maxDMGPerHit += damageColumns2[effectiveDice - 1];
	    if (dmgBoost2 != 0) {
	        maxDMGPerHit += dmgBoost2;
	    }
		
		var maxDMG2 = maxDMGPerHit * HITS2;
		var maxChargeDMG2 = 0;
		
		if (doChargeAttack2.checked) {
			maxDMGPerHit = 0;
			effectiveDice = TAC2 + 4 - ARM2;
			while (effectiveDice > damageColumns2.length)
			{
				maxDMGPerHit += damageColumns2[damageColumns2.length - 1];
				effectiveDice -= damageColumns2.length;
		        if (dmgBoost2 != 0) {
		            maxDMGPerHit += dmgBoost2;
		        }
			}
			maxDMGPerHit += damageColumns2[effectiveDice - 1];
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
		printDamageInMultipleHits(TAC, TN, ARM, dmgBoost, maxDMG, HITS, doChargeAttack.checked, reRolls, maxChargeDMG, damageColumns);
	}
	else if (compareBox.checked == true)
	{
		document.getElementById("thechart").innerHTML = printCompareDamageInMultipleHits(TAC, TN, ARM, dmgBoost, HITS, doChargeAttack.checked, reRolls, TAC2, TN2, ARM2, dmgBoost2, HITS2, doChargeAttack2.checked, reRolls2, maxDMG, maxChargeDMG, damageColumns, damageColumns2);
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
	setupSearchParamsFromBoxes();
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
	drawPlaybook(playerTable.value);
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

function setupSearchParamsFromBoxes() {
	const params = new URLSearchParams(location.search);
	params.set('compare', compareBox.checked);
	params.set('player', document.getElementById("player").value);
	params.set('tac', document.getElementById("TAC").value);
	params.set('tn', document.getElementById("TN").value);
	params.set('arm', document.getElementById("ARM").value);
	params.set('dmg', document.getElementById("dmgBoost").value);
	params.set('attacks', document.getElementById("attacks").value);
	params.set('rerolls', document.getElementById("rerolls").value);
	params.set('charge', doChargeAttack.checked);
	if ( compareBox.checked )
	{
		params.set('player2', document.getElementById("player2").value);
		params.set('tac2', document.getElementById("TAC2").value);
		params.set('tn2', document.getElementById("TN2").value);
		params.set('arm2', document.getElementById("ARM2").value);
		params.set('dmg2', document.getElementById("dmgBoost2").value);
		params.set('attacks2', document.getElementById("attacks2").value);
		params.set('rerolls2', document.getElementById("rerolls2").value);
		params.set('charge2', doChargeAttack2.checked);
	}
	window.history.replaceState({}, '', location.pathname + '?' + params);
}

function setupBoxesFromSearchParams() {
	if ('URLSearchParams' in window == false)
		return;
	const params = new URLSearchParams(location.search);

	var compare = params.get('compare');
	var player = params.get('player');
	var TAC = params.get('tac');  
	var TN = params.get('tn');
	var ARM = params.get('arm');
	var dmgBoost = params.get('dmg');
	var HITS = params.get('attacks');
	var reRolls = params.get('rerolls');
	var charge = params.get('charge');

	var player2 = params.get('player2');
	var TAC2 = params.get('tac2');  
	var TN2 = params.get('tn2');
	var ARM2 = params.get('arm2');
	var dmgBoost2 = params.get('dmg2');
	var HITS2 = params.get('attacks2');
	var reRolls2 = params.get('rerolls2');
	var charge2 = params.get('charge2');

	if ( player == null )
		return;

	document.getElementById("player").value = player;
	document.getElementById("TAC").value = TAC;
	document.getElementById("TN").value = TN;
	document.getElementById("ARM").value = ARM;
	document.getElementById("dmgBoost").value = dmgBoost;
	document.getElementById("attacks").value = HITS;
	document.getElementById("rerolls").value = reRolls;
	
	if ( charge == "true" )
		doChargeAttack.checked = true;
	else
		doChargeAttack.chcked = false;

	if ( player2 != null && compare == "true" )
	{
		compareBox.checked = true;
		document.getElementById("player2").value = player2;
		document.getElementById("TAC2").value = TAC2;
		document.getElementById("TN2").value = TN2;
		document.getElementById("ARM2").value = ARM2;
		document.getElementById("dmgBoost2").value = dmgBoost2;
		document.getElementById("attacks2").value = HITS2;
		document.getElementById("rerolls2").value = reRolls2;

		if ( charge2 == true )
			doChargeAttack2.checked = true;
		else
			doChargeAttack2.chcked = false;
	}

	didChangeCompareCharts();

	if ( calculateButton.disabled == false )
		calculateBarChart();
}

setupBoxesFromSearchParams();

compareBox.addEventListener("change", didChangeCompareCharts);

playerTable.addEventListener("change", didChangePlayerSelection);
playerTable2.addEventListener("change", didChangePlayerSelection);
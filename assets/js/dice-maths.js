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

function expectedDamage(TAC, TN, ARM, dmgBoost, reRoll, damageColumns) {
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


function damageCacheWrapper(step, damage, damageProbCache) {
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

function probExactlyThisMuchDamage(TAC, TN, ARM, dmgBoost, DMG, reRoll, damageColumns) {
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

function buildExactDamageCache(TAC, TN, ARM, dmgBoost, maxDMG, whichStep, reRoll, damageColumns, damageProbCache) {
    var result = 0.0;
    var damage = 0;
    damageProbCache[whichStep] = []
    if (whichStep == 0) {
        for (damage = 0; damage <= maxDMG; damage++) {
            damageProbCache[whichStep][damage] = probExactlyThisMuchDamage(TAC, TN, ARM, dmgBoost, damage, reRoll, damageColumns);
        }
        return;
    }
    for (damage = 0; damage < (maxDMG + damageProbCache[whichStep - 1].length); damage++) {
        damageProbCache[whichStep][damage] = 0.0;
        for (damage2 = 0; damage2 <= damage; damage2++) {
            damageProbCache[whichStep][damage] += probExactlyThisMuchDamage(TAC, TN, ARM, dmgBoost, damage2, reRoll, damageColumns) * damageCacheWrapper(whichStep - 1, damage - damage2, damageProbCache);
        }
    }
}

function findDamageInMultipleHits(TAC, TN, ARM, dmgBoost, maxDMG, HITS, doCharge, reRolls, maxChargeDMG, damageColumns) {
    var outstring = "";
    var damage = 0;
    var probability = [];
    var atLeastProbability = [];
    var isTooWide = false;
	var hitCount = 0;
	var damageProbCache = [];
	var damageResult = [];
    if (maxDMG > 25)
    {
        isTooWide = true;
    }
    for (hitCount = 0; hitCount < HITS; hitCount++) {
		var reRoll = (!doCharge && hitCount == 0 && reRolls == "first") || (reRolls == "all");
        buildExactDamageCache(TAC, TN, ARM, dmgBoost, 1 + (maxDMG/HITS), hitCount, reRoll, damageColumns, damageProbCache);
    }
	if (doCharge) {
		var reRoll = reRolls == "first" || reRolls == "all";
		buildExactDamageCache(TAC + 4, TN, ARM, dmgBoost, maxChargeDMG, HITS, reRoll, damageColumns, damageProbCache);
	}
    for (damage = 0; damage <= maxDMG ; damage++) {
		if (doCharge) {
	        probability[damage] = damageCacheWrapper(HITS, damage, damageProbCache);
		}
		else {
	        probability[damage] = damageCacheWrapper(HITS - 1, damage, damageProbCache);
		}
    }
    for (damage = 0; damage <= maxDMG; damage++) {
        atLeastProbability[damage] = 0.0;
        for (greaterDamage = damage; greaterDamage <= maxDMG; greaterDamage++) {
        atLeastProbability[damage] += probability[greaterDamage];
        }
	}
	for (damage = 0; damage <= maxDMG; damage++) {
		damageResult[damage] = { exactProb: probability[damage], cumProb: atLeastProbability[damage] };
	}
    return damageResult;
}
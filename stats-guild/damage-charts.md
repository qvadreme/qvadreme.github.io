---
title: Damage Charts
layout: page
---

What's the distribution of damage when making a certain number of attacks (assuming no bonus timing)? Numbers below the chart show the probability of doing precisely that much damage. Numbers above the chart when hovering over a bar show the chances of doing at least that much damage. Work in progress.

Charge Attack doesn't currently take into account abilities like Forceful Blow or allow for Defensive Stance. It just adds an extra attack at TAC +4. Character Plays and Playbook Damage results are equally affected by the DMG modifier. Abilities such as Intensify are not taken into account for now.

<input type="checkbox" id="compareCharts"> Compare two charts

<div id="playBookSVG1" class="playBookImage"></div>
<div id="mainplayer" class="inputBoxes">
		Player:
		<select id="player">
		</select>
		TAC:
		<input id="TAC" value="6">
		TN:
		<input id="TN" value="4">
		Target ARM:
		<input id="ARM" value="1">
		DMG modifiers:
		<input id="dmgBoost" value="0">
		Attacks:
		<input id="attacks" value="4">
		Add Charge Attack: <input type="checkbox" id="doChargeAttack">
		Rerolls:
		<select id="rerolls">
		<option value="none">None</option>
		<option value="first">First Attack</option>
		<option value="all">All Attacks</option>
		</select>
		<table id="playBook1" width="25%">
		</table>
</div>

<div id="extraplayer" class="inputBoxes">	
		<br />
		Player 2
		<select id="player2">
		</select>
		TAC:
		<input id="TAC2" value="6">
		TN:
		<input id="TN2" value="4">
		Target ARM:
		<input id="ARM2" value="1">
		DMG modifiers:
		<input id="dmgBoost2" value="0">
		Attacks:
		<input id="attacks2" value="4">
		Add Charge Attack: <input type="checkbox" id="doChargeAttack2">
		Rerolls:
		<select id="rerolls2">
		<option value="none">None</option>
		<option value="first">First Attack</option>
		<option value="all">All Attacks</option>
		</select>
</div>

<br />

<button type="button" id="calculateButton">Calculate!</button>

<div id="chartkey">
	<div style="width:20px; height:20px; display: inline-block; background:#490092;"></div><div style="display: inline;" id="captainName"></div>
	<br />
	<div style="width:20px; height:20px; display: inline-block; background:#DBD100;"></div><div style="display: inline;" id="captainName2"></div>
</div>		
<!--- <ul class="barchart" id="thechart">
</ul> --->
<svg class="newchart" id="thenewchart">
</svg>

<p id="debugMessages"><p>

<script src="https://cdnjs.cloudflare.com/ajax/libs/svg.js/2.6.6/svg.min.js" integrity="sha256-M8IkAPnXdVChgPQwts/KeepRP4ogs+hzBtPmVhUj5YA=" crossorigin="anonymous"></script>
<script src="https://d3js.org/d3.v5.min.js"></script>
<script src="../assets/js/players.js"></script>
<script src="../assets/js/dice-maths.js"></script>
<script src="../assets/js/damage-charts.js"></script>
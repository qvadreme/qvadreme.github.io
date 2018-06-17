---
title: Damage Charts
layout: page
---

What's the distribution of damage when making a certain number of attacks (assuming no bonus timing)? Numbers below the chart show the probability of doing precisely that much damage. Numbers above the chart when hovering over a bar show the chances of doing at least that much damage. Work in progress.

Charge Attack doesn't currently take into account abilities like Forceful Blow or allow for Defensive Stance. It just adds an extra attack at TAC +4. Character Plays and Playbook Damage results are equally affected by the DMG modifier. Abilities such as Intensify are not taken into account for now.

<input type="checkbox" id="compareCharts"> Compare two charts

<div id="mainplayer">
		Player:
		<select id="player">
			<option value="spacer">ALCHEMISTS</option>
			<option value="midas">-Midas</option>
			<option value="smoke">-Smoke</option>
			<option value="flask">-Flask</option>
			<option value="naja">-Naja</option>
			<option value="calculus">-Calculus</option>
			<option value="mercury">-Mercury</option>
			<option value="vitriol">-Vitriol</option>
			<option value="katalyst">-Katalyst</option>
			<option value="venin">-Venin</option>
			<option value="vkatalyst">-Veteran Katalyst</option>
			<option value="compound">-Compound</option>
			<option value="crucible">-Crucible</option>
			<option value="spacer">BREWERS</option>
			<option value="tapper">-Tapper</option>
			<option value="esters">-Esters</option>
			<option value="scum">-Scum</option>
			<option value="quaff">-Quaff</option>
			<option value="friday">-Friday</option>
			<option value="hooper">-Hooper</option>
			<option value="spigot">-Spigot</option>
			<option value="stoker">-Stoker</option>
			<option value="stave">-Stave</option>
			<option value="mash">-Mash</option>
			<option value="vspigot">-Veteran Spigot</option>
			<option value="pintpot">-Pint Pot</option>
			<option value="lucky">-Lucky</option>
			<option value="spacer">BUTCHERS</option>
			<option value="ox">-Ox</option>
			<option value="fillet">-Fillet</option>
			<option value="princess">-Princess</option>
			<option value="truffles">-Truffles</option>
			<option value="boiler">-Boiler</option>
			<option value="brisket">-Brisket</option>
			<option value="meathook">-Meathook</option>
			<option value="shank">-Shank</option>
			<option value="boar">-Boar</option>
			<option value="tenderiser">-Tenderiser</option>
			<option value="vbrisket">-Veteran Brisket</option>
			<option value="vox">-Veteran Ox</option>
			<option value="spacer">ENGINEERS</option>
			<option value="ballista">-Ballista</option>
			<option value="pinvice">-Pin Vice</option>
			<option value="mainspring">-Mainspring</option>
			<option value="mother">-Mother</option>
			<option value="velocity">-Velocity</option>
			<option value="salvo">-Salvo</option>
			<option value="ratchet">-Ratchet</option>
			<option value="colossus">-Colossus</option>
			<option value="hoist">-Hoist</option>
			<option value="vvelocity">-Veteran Velocity</option>
			<option value="compound">-Compound</option>
			<option value="locus">-Locus</option>
			<option value="spacer">FISHERMEN</option>
			<option value="shark">-Shark</option>
			<option value="corsair">-Corsair</option>
			<option value="salt">-Salt</option>
			<option value="tentacles">-Tentacles</option>
			<option value="angel">-Angel</option>
			<option value="siren">-Siren</option>
			<option value="greyscales">-Greyscales</option>
			<option value="jac">-Jac</option>
			<option value="kraken">-Kraken</option>
			<option value="sakana">-Sakana</option>
			<option value="vsiren">-Veteran Siren</option>
			<option value="hag">-Hag</option>
			<option value="spacer">HUNTERS</option>
			<option value="theron">-Theron</option>
			<option value="fahad">-Fahad</option>
			<option value="zarola">-Zarola</option>
			<option value="hearne">-Hearne</option>
			<option value="egret">-Egret</option>
			<option value="jaecar">-Jaecar</option>
			<option value="chaska">-Chaska</option>
			<option value="seenah">-Seenah</option>
			<option value="skatha">-Skatha</option>
			<option value="snow">-Snow</option>
			<option value="vhearne">-Veteran Hearne</option>
			<option value="ulfr">-Ulfr</option>
			<option value="spacer">MASONS</option>
			<option value="honour">-Honour</option>
			<option value="hammer">-Hammer</option>
			<option value="marbles">-Marbles</option>
			<option value="wrecker">-Wrecker</option>
			<option value="harmony">-Harmony</option>
			<option value="mallet">-Mallet</option>
			<option value="flint">-Flint</option>
			<option value="tower">-Tower</option>
			<option value="brick">-Brick</option>
			<option value="chisel">-Chisel</option>
			<option value="vharmony">-Veteran Harmony</option>
			<option value="granite">-Granite</option>
			<option value="lucky">-Lucky</option>
			<option value="spacer">MORTICIANS</option>
			<option value="obulus">-Obulus</option>
			<option value="scalpel">-Scalpel</option>
			<option value="dirge">-Dirge</option>
			<option value="vileswarm">-Vileswarm</option>
			<option value="graves">-Graves</option>
			<option value="cosset">-Cosset</option>
			<option value="silence">-Silence</option>
			<option value="ghast">-Ghast</option>
			<option value="casket">-Casket</option>
			<option value="bonesaw">-Bonesaw</option>
			<option value="vgraves">-Veteran Graves</option>
			<option value="brainpan">-Brainpan</option>
			<option value="memory">-Memory</option>
			<option value="spacer">UNION</option>
			<option value="blackheart">-Blackheart</option>
			<option value="vrage">-Veteran Rage</option>
			<option value="coin">-Coin</option>
			<option value="strongbox">-Strongbox</option>
			<option value="gutter">-Gutter</option>
			<option value="decimate">-Decimate</option>
			<option value="hemlocke">-Hemlocke</option>
			<option value="minx">-Minx</option>
			<option value="mist">-Mist</option>
			<option value="rage">-Rage</option>
			<option value="snakeskin">-Snakeskin</option>
			<option value="avarisse">-Avarisse</option>
			<option value="greede">-Greede</option>
			<option value="fangtooth">-Fangtooth</option>
			<option value="harry">-Harry "the Hat"</option>
			<option value="sbrisket">-Seasoned Brisket</option>
			<option value="grace">-Grace</option>
			<option value="benediction">-Benediction</option>
			<option value="spacer">FARMERS</option>
			<option value="thresher">-Thresher</option>
			<option value="grange">-Grange</option>
			<option value="peck">-Peck</option>
			<option value="buckwheat">-Buckwheat</option>
			<option value="bushel">-Bushel</option>
			<option value="harrow">-Harrow</option>
			<option value="jackstraw">-Jackstraw</option>
			<option value="millstone">-Millstone</option>
			<option value="tater">-Tater</option>
			<option value="windle">-Windle</option>
			<option value="ploughman">-Ploughman</option>
			<option value="fallow">-Fallow</option>
			<option value="spacer">BLACKSMITHS</option>
			<option value="anvil">-Anvil</option>
			<option value="ferrite">-Ferrite</option>
			<option value="furnace">-Furnace</option>
			<option value="burnish">-Burnish</option>
			<option value="farris">-Farris</option>
			<option value="hearth">-Hearth</option>
			<option value="cinder">-Cinder</option>
			<option value="iron">-Iron</option>
			<option value="sledge">-Sledge</option>
			<option value="alloy">-Alloy</option>
			<option value="bolt">-Bolt</option>
			<option value="cast">-Cast</option>
			<option value="spacer">RATCATCHERS</option>
			<option value="piper">-Piper</option>
			<option value="squeak">-Squeak</option>
			<option value="skulk">-Skulk</option>
			<option value="pelage">-Pelage</option>
			<option value="scourge">-Scourge</option>
			<option value="miasma">-Miasma</option>
			<option value="spacer">PRE-ERRATA</option>
			<option value="PEox">-PE Ox</option>
			<option value="PEvitriol">-PE Vitriol</option>
			<option value="PEvsiren">-PE Veteran Siren</option>
			<option value="PEtheron">-PE Theron</option>
			<option value="PEavarisse">-PE Avarisse</option>
			<option value="PEgreede">-PE Greede</option>
			<option value="PEharry">-PE Harry</option>
			<option value="PEthresher">-PE Thresher</option>
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
</div>

<div id="extraplayer">	
		<br />
		Player 2
		<select id="player2">
			<option value="spacer">ALCHEMISTS</option>
			<option value="midas">-Midas</option>
			<option value="smoke">-Smoke</option>
			<option value="flask">-Flask</option>
			<option value="naja">-Naja</option>
			<option value="calculus">-Calculus</option>
			<option value="mercury">-Mercury</option>
			<option value="vitriol">-Vitriol</option>
			<option value="katalyst">-Katalyst</option>
			<option value="venin">-Venin</option>
			<option value="vkatalyst">-Veteran Katalyst</option>
			<option value="compound">-Compound</option>
			<option value="crucible">-Crucible</option>
			<option value="spacer">BREWERS</option>
			<option value="tapper">-Tapper</option>
			<option value="esters">-Esters</option>
			<option value="scum">-Scum</option>
			<option value="quaff">-Quaff</option>
			<option value="friday">-Friday</option>
			<option value="hooper">-Hooper</option>
			<option value="spigot">-Spigot</option>
			<option value="stoker">-Stoker</option>
			<option value="stave">-Stave</option>
			<option value="mash">-Mash</option>
			<option value="vspigot">-Veteran Spigot</option>
			<option value="pintpot">-Pint Pot</option>
			<option value="lucky">-Lucky</option>
			<option value="spacer">BUTCHERS</option>
			<option value="ox">-Ox</option>
			<option value="fillet">-Fillet</option>
			<option value="princess">-Princess</option>
			<option value="truffles">-Truffles</option>
			<option value="boiler">-Boiler</option>
			<option value="brisket">-Brisket</option>
			<option value="meathook">-Meathook</option>
			<option value="shank">-Shank</option>
			<option value="boar">-Boar</option>
			<option value="tenderiser">-Tenderiser</option>
			<option value="vbrisket">-Veteran Brisket</option>
			<option value="vox">-Veteran Ox</option>
			<option value="spacer">ENGINEERS</option>
			<option value="ballista">-Ballista</option>
			<option value="pinvice">-Pin Vice</option>
			<option value="mainspring">-Mainspring</option>
			<option value="mother">-Mother</option>
			<option value="velocity">-Velocity</option>
			<option value="salvo">-Salvo</option>
			<option value="ratchet">-Ratchet</option>
			<option value="colossus">-Colossus</option>
			<option value="hoist">-Hoist</option>
			<option value="vvelocity">-Veteran Velocity</option>
			<option value="compound">-Compound</option>
			<option value="locus">-Locus</option>
			<option value="spacer">FISHERMEN</option>
			<option value="shark">-Shark</option>
			<option value="corsair">-Corsair</option>
			<option value="salt">-Salt</option>
			<option value="tentacles">-Tentacles</option>
			<option value="angel">-Angel</option>
			<option value="siren">-Siren</option>
			<option value="greyscales">-Greyscales</option>
			<option value="jac">-Jac</option>
			<option value="kraken">-Kraken</option>
			<option value="sakana">-Sakana</option>
			<option value="vsiren">-Veteran Siren</option>
			<option value="hag">-Hag</option>
			<option value="spacer">HUNTERS</option>
			<option value="theron">-Theron</option>
			<option value="fahad">-Fahad</option>
			<option value="zarola">-Zarola</option>
			<option value="hearne">-Hearne</option>
			<option value="egret">-Egret</option>
			<option value="jaecar">-Jaecar</option>
			<option value="chaska">-Chaska</option>
			<option value="seenah">-Seenah</option>
			<option value="skatha">-Skatha</option>
			<option value="snow">-Snow</option>
			<option value="vhearne">-Veteran Hearne</option>
			<option value="ulfr">-Ulfr</option>
			<option value="spacer">MASONS</option>
			<option value="honour">-Honour</option>
			<option value="hammer">-Hammer</option>
			<option value="marbles">-Marbles</option>
			<option value="wrecker">-Wrecker</option>
			<option value="harmony">-Harmony</option>
			<option value="mallet">-Mallet</option>
			<option value="flint">-Flint</option>
			<option value="tower">-Tower</option>
			<option value="brick">-Brick</option>
			<option value="chisel">-Chisel</option>
			<option value="vharmony">-Veteran Harmony</option>
			<option value="granite">-Granite</option>
			<option value="lucky">-Lucky</option>
			<option value="spacer">MORTICIANS</option>
			<option value="obulus">-Obulus</option>
			<option value="scalpel">-Scalpel</option>
			<option value="dirge">-Dirge</option>
			<option value="vileswarm">-Vileswarm</option>
			<option value="graves">-Graves</option>
			<option value="cosset">-Cosset</option>
			<option value="silence">-Silence</option>
			<option value="ghast">-Ghast</option>
			<option value="casket">-Casket</option>
			<option value="bonesaw">-Bonesaw</option>
			<option value="vgraves">-Veteran Graves</option>
			<option value="brainpan">-Brainpan</option>
			<option value="memory">-Memory</option>
			<option value="spacer">UNION</option>
			<option value="blackheart">-Blackheart</option>
			<option value="vrage">-Veteran Rage</option>
			<option value="coin">-Coin</option>
			<option value="strongbox">-Strongbox</option>
			<option value="gutter">-Gutter</option>
			<option value="decimate">-Decimate</option>
			<option value="hemlocke">-Hemlocke</option>
			<option value="minx">-Minx</option>
			<option value="mist">-Mist</option>
			<option value="rage">-Rage</option>
			<option value="snakeskin">-Snakeskin</option>
			<option value="avarisse">-Avarisse</option>
			<option value="greede">-Greede</option>
			<option value="fangtooth">-Fangtooth</option>
			<option value="harry">-Harry "the Hat"</option>
			<option value="sbrisket">-Seasoned Brisket</option>
			<option value="grace">-Grace</option>
			<option value="benediction">-Benediction</option>
			<option value="spacer">FARMERS</option>
			<option value="thresher">-Thresher</option>
			<option value="grange">-Grange</option>
			<option value="peck">-Peck</option>
			<option value="buckwheat">-Buckwheat</option>
			<option value="bushel">-Bushel</option>
			<option value="harrow">-Harrow</option>
			<option value="jackstraw">-Jackstraw</option>
			<option value="millstone">-Millstone</option>
			<option value="tater">-Tater</option>
			<option value="windle">-Windle</option>
			<option value="ploughman">-Ploughman</option>
			<option value="fallow">-Fallow</option>
			<option value="spacer">BLACKSMITHS</option>
			<option value="anvil">-Anvil</option>
			<option value="ferrite">-Ferrite</option>
			<option value="furnace">-Furnace</option>
			<option value="burnish">-Burnish</option>
			<option value="farris">-Farris</option>
			<option value="hearth">-Hearth</option>
			<option value="cinder">-Cinder</option>
			<option value="iron">-Iron</option>
			<option value="sledge">-Sledge</option>
			<option value="alloy">-Alloy</option>
			<option value="bolt">-Bolt</option>
			<option value="cast">-Cast</option>
			<option value="spacer">RATCATCHERS</option>
			<option value="piper">-Piper</option>
			<option value="squeak">-Squeak</option>
			<option value="skulk">-Skulk</option>
			<option value="pelage">-Pelage</option>
			<option value="scourge">-Scourge</option>
			<option value="miasma">-Miasma</option>
			<option value="spacer">PRE-ERRATA</option>
			<option value="PEox">-PE Ox</option>
			<option value="PEvitriol">-PE Vitriol</option>
			<option value="PEvsiren">-PE Veteran Siren</option>
			<option value="PEtheron">-PE Theron</option>
			<option value="PEavarisse">-PE Avarisse</option>
			<option value="PEgreede">-PE Greede</option>
			<option value="PEharry">-PE Harry</option>
			<option value="PEthresher">-PE Thresher</option>
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
</div>

<br />

<button type="button" id="calculateButton">Calculate!</button>	
<div id="chartkey">
	<div style="width:20px; height:20px; display: inline-block; background:#490092;"></div><div style="display: inline;" id="captainName"></div>
	<br />
	<div style="width:20px; height:20px; display: inline-block; background:#DBD100;"></div><div style="display: inline;" id="captainName2"></div>
</div>		
<ul class="barchart" id="thechart">
</ul>

<p id="debugMessages"><p>

<script>
calculateButton = document.getElementById("calculateButton");

calculateButton.disabled = true;
calculateButton.addEventListener("click", calculateBarChart);

playerTable = document.getElementById("player");
playerTable2 = document.getElementById("player2");

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

damagePlayBooks = {
	"PEox":[1, 1, 1, 2, 2, 3, 3],
	"ox":[1, 1, 2, 2, 3, 3, 4],
	"obulus":[1, 1, 2, 2, 3],
	"midas":[1, 1, 1, 2, 2, 3],
	"smoke":[1, 1, 2, 2],
	"flask":[1,1],
	"naja":[1, 1, 2],
	"calculus":[1, 2, 2, 3],
	"mercury":[1, 2, 2, 3],
	"PEvitriol":[1, 2, 2, 3, 3],
	"vitriol":[1, 1, 2, 2, 3],
	"katalyst":[1, 1, 2, 2, 3, 3],
	"venin":[1, 1, 2, 2, 3],
	"vkatalyst":[1, 1, 2, 2, 3, 3, 3, 3],
	"compound":[1, 1, 2, 2, 2],
	"crucible":[1, 1, 2, 2, 3],
	"tapper":[1, 2, 2, 3, 3],
	"esters":[1, 2, 2, 3],
	"scum":[1, 2, 2],
	"quaff":[1, 1],
	"friday":[1, 2, 2],
	"hooper":[1, 2, 2, 2, 3],
	"spigot":[1, 2, 2, 3],
	"stoker":[1, 1, 2, 3],
	"stave":[1, 1, 2, 2, 3],
	"mash":[1, 1, 2, 3],
	"vspigot":[1, 1, 1, 1],
	"fillet":[1, 1, 2, 2, 3, 3, 4],
	"princess":[1, 2, 2, 3],
	"truffles":[1, 1, 2],
	"boiler":[1, 2, 2, 2, 3],
	"brisket":[1, 2, 2, 2],
	"meathook":[1, 1, 2, 3, 3, 3],
	"shank":[1, 2, 2, 3, 3, 3],
	"boar":[1, 2, 2, 3, 3, 4, 4],
	"tenderiser":[1, 1, 2, 3, 3],
	"vbrisket":[1, 2, 2, 2, 3],
	"vox":[1, 1, 2, 2, 3, 3, 4],
	"ballista":[1, 1, 2, 3, 3, 4],
	"pinvice":[1, 1, 2, 2, 3, 3],
	"mainspring":[1, 1],
	"mother":[1, 1, 2],
	"velocity":[1, 1, 1, 1],
	"salvo":[1, 1, 1, 1, 2],
	"ratchet":[1, 2, 2, 2, 3],
	"colossus":[1, 1, 2, 3, 3],
	"hoist":[1, 1, 2, 2, 3],
	"vvelocity":[1, 1, 2, 2, 3],
	"locus":[1, 1, 2, 2, 3],
	"shark":[1, 1, 2, 2, 3, 3],
	"corsair":[1, 2, 2, 3, 3],
	"salt":[1, 1],
	"tentacles":[1, 1, 2],
	"angel":[1, 1, 2, 2],
	"siren":[1, 2, 2],
	"greyscales":[1, 1, 2, 2, 2],
	"jac":[1, 1, 2, 3, 3],
	"kraken":[1, 2, 2, 3, 3],
	"sakana":[1, 1, 2, 2, 2],
	"PEvsiren":[1, 2, 2],
	"vsiren":[1, 1, 2, 2],
	"hag":[1, 1, 2, 2],
	"theron":[1, 1, 2, 2, 3, 4],
	"PEtheron":[1, 1, 2, 2, 2, 3],
	"fahad":[1, 1, 2],
	"zarola":[1, 1, 2, 2],
	"hearne":[1, 2, 2, 3, 3],
	"egret":[1, 1, 1, 2],
	"jaecar":[1, 2, 2, 2, 3, 4],
	"chaska":[1, 1, 2, 3],
	"seenah":[1, 1, 2, 3, 3, 4],
	"skatha":[1, 1, 2, 2, 3],
	"snow":[1, 1, 2],
	"ulfr":[1, 1, 2, 2, 3],
	"vhearne":[1, 1, 2, 3, 3],
	"honour":[1, 2, 2, 3, 3, 4],
	"hammer":[1, 1, 2, 2, 3, 4],
	"marbles":[1, 1, 2],
	"wrecker":[1, 1, 2],
	"harmony":[1, 1, 2, 2, 3, 4],
	"mallet":[1, 2, 2, 3, 4],
	"flint":[1, 1, 1, 2],
	"tower":[1, 1, 2, 2, 3],
	"brick":[1, 2, 2, 3, 4],
	"chisel":[1, 1, 2, 2, 3, 3, 4],
	"vharmony":[1, 2, 2, 2, 3],
	"scalpel":[1, 1, 2, 2, 3, 3, 4],
	"dirge":[1, 1],
	"vileswarm":[1, 1, 2],
	"graves":[1, 1, 2, 3, 3, 3],
	"cosset":[1, 2, 2, 3, 4],
	"silence":[1, 2, 2, 3, 3],
	"ghast":[1, 1, 2, 3, 3, 4],
	"casket":[1, 2, 2, 3, 3],
	"bonesaw":[1, 1, 1, 2],
	"vgraves":[1, 2, 2, 2, 3],
	"brainpan":[1, 1, 1],
	"memory":[1, 1, 2, 3],
	"blackheart":[1, 1, 2, 2, 3, 3],
	"vrage":[1, 2, 2, 3, 3, 3, 4],
	"coin":[1, 1],
	"strongbox":[1, 2],
	"gutter":[1, 1, 2, 2, 3],
	"decimate":[1, 2, 2, 2, 3, 3],
	"hemlocke":[1, 1, 2, 2],
	"minx":[1, 1, 2, 2, 3],
	"mist":[1, 1, 1, 1],
	"rage":[1, 2, 2, 3, 3, 4],
	"snakeskin":[1, 2, 2, 2, 3],
	"PEavarisse":[1, 1, 2, 3, 3],
	"avarisse":[1, 1, 2, 3, 3],
	"PEgreede":[1, 1, 2, 3, 3, 3, 4, 4],
	"greede":[1, 1, 2, 3],
	"fangtooth":[1, 2, 2, 3, 4],
	"PEharry":[1, 2, 2, 2, 3, 3],
	"harry":[1, 1, 2, 2, 3],
	"granite":[1, 1, 2, 2, 3, 4],
	"pintpot":[1, 1, 2, 2, 3],
	"sbrisket":[1, 1, 2, 2, 2],
	"grace":[1, 1, 2, 2],
	"benediction":[1, 1, 2, 2, 3, 3],
	"PEthresher":[1, 2, 2, 2, 3, 4],
	"grange":[1, 1, 2, 2, 3, 3],
	"peck":[1, 1],
	"buckwheat":[1, 1, 2, 3],
	"bushel":[1, 1, 2, 2],
	"harrow":[1, 1, 1, 1, 3],
	"jackstraw":[1, 1, 1],
	"millstone":[1, 2, 2, 3],
	"tater":[1, 2, 2, 2, 3],
	"windle":[1, 1, 2, 2, 3, 3],
	"thresher":[1, 2, 2, 2, 3, 3, 4],
	"ploughman":[1, 2, 2, 2, 3],
	"fallow":[1, 1, 2, 2, 3, 3],
	"lucky":[1, 2, 2, 3, 4],
	"anvil":[1, 1, 1, 2, 2, 3],
	"ferrite":[1, 1, 1, 3],
	"furnace":[1, 1, 2, 2, 3],
	"burnish":[1, 1, 1, 3],
	"farris":[1, 1, 2, 2, 3],
	"hearth":[1, 1, 1, 3],
	"cinder":[1, 1, 2, 2, 4],
	"iron":[1, 2, 2, 4, 4, 4, 7],
	"sledge":[1, 1, 2, 2, 4, 4, 7],
	"alloy":[1, 1, 1, 3, 3, 5],
	"bolt":[1, 1, 2, 2, 4],
	"cast":[1, 2, 2, 3, 3, 6],
	"skulk":[1, 1, 2, 2, 3, 3],
	"piper":[1, 1, 2, 2, 2],
	"pelage":[1, 1, 2, 2, 3],
	"squeak":[1, 1, 2],
	"miasma":[1, 1, 2, 2, 3],
	"scourge":[1, 2, 2, 3, 3, 5],
	"vgutter":[1, 1, 2, 2, 3],
	"vdecimate":[1, 2, 2, 3, 3],
	"vminx":[1, 2, 2, 2, 3]
};

longNames = {
	"ox":"Ox",
	"obulus":"Obulus",
	"midas":"Midas",
	"smoke":"Smoke",
	"flask":"Flask",
	"naja":"Naja",
	"calculus":"Calculus",
	"mercury":"Mercury",
	"vitriol":"Vitriol",
	"katalyst":"Katalyst",
	"venin":"Venin",
	"vkatalyst":"Veteran Katalyst",
	"compound":"Compound",
	"crucible":"Crucible",
	"tapper":"Tapper",
	"esters":"Esters",
	"scum":"Scum",
	"quaff":"Quaff",
	"friday":"Friday",
	"hooper":"Hooper",
	"spigot":"Spigot",
	"stoker":"Stoker",
	"stave":"Stave",
	"mash":"Mash",
	"vspigot":"Veteran Spigot",
	"fillet":"Fillet",
	"princess":"Princess",
	"truffles":"Truffles",
	"boiler":"Boiler",
	"brisket":"Brisket",
	"meathook":"Meathook",
	"shank":"Shank",
	"boar":"Boar",
	"tenderiser":"Tenderiser",
	"vbrisket":"Veteran Brisket",
	"vox":"Veteran Ox",
	"ballista":"Ballista",
	"pinvice":"Pin Vice",
	"mainspring":"Mainspring",
	"mother":"Mother",
	"velocity":"Velocity",
	"salvo":"Salvo",
	"ratchet":"Ratchet",
	"colossus":"Colossus",
	"hoist":"Hoist",
	"vvelocity":"Veteran Velocity",
	"locus":"Locus",
	"shark":"Shark",
	"corsair":"Corsair",
	"salt":"Salt",
	"tentacles":"Tentacles",
	"angel":"Angel",
	"siren":"Siren",
	"greyscales":"Greyscales",
	"jac":"Jac",
	"kraken":"Kraken",
	"sakana":"Sakana",
	"vsiren":"Veteran Siren",
	"hag":"Hag",
	"theron":"Theron",
	"fahad":"Fahad",
	"zarola":"Zarola",
	"hearne":"Hearne",
	"egret":"Egret",
	"jaecar":"Jaecar",
	"chaska":"Chaska",
	"seenah":"Seenah",
	"skatha":"Skatha",
	"snow":"Snow",
	"vhearne":"Veteran Hearne",
	"ulfr":"Ulfr",
	"honour":"Honour",
	"hammer":"Hammer",
	"marbles":"Marbles",
	"wrecker":"Wrecker",
	"harmony":"Harmony",
	"mallet":"Mallet",
	"flint":"Flint",
	"tower":"Tower",
	"brick":"Brick",
	"chisel":"Chisel",
	"vharmony":"Veteran Harmony",
	"scalpel":"Scalpel",
	"dirge":"Dirge",
	"vileswarm":"Vileswarm",
	"graves":"Graves",
	"cosset":"Cosset",
	"silence":"Silence",
	"ghast":"Ghast",
	"casket":"Casket",
	"bonesaw":"Bonesaw",
	"vgraves":"Veteran Graves",
	"brainpan":"Brainpan",
	"memory":"Memory",
	"blackheart":"Blackheart",
	"vrage":"Veteran Rage",
	"coin":"Coin",
	"strongbox":"Strongbox",
	"gutter":"Gutter",
	"decimate":"Decimate",
	"hemlocke":"Hemlocke",
	"minx":"Minx",
	"mist":"Mist",
	"rage":"Rage",
	"snakeskin":"Snakeskin",
	"avarisse":"Avarisse",
	"greede":"Greede",
	"fangtooth":"Fangtooth",
	"harry":"Harry the Hat",
	"granite":"Granite",
	"pintpot":"Pint Pot",
	"sbrisket":"Seasoned Brisket",
	"grace":"Grace",
	"benediction":"Benediction",
	"PEox":"PE Ox",
	"PEvitriol":"PE Vitriol",
	"PEvsiren":"PE Veteran Siren",
	"PEtheron":"PE Theron",
	"PEavarisse":"PE Avarisse",
	"PEgreede":"PE Greede",
	"PEharry":"PE Harry",
	"PEthresher":"PE Thresher",
	"thresher":"Thresher",
	"ploughman":"Ploughman",
	"fallow":"Fallow",
	"lucky":"Lucky",
	"anvil":"Anvil",
	"ferrite":"Ferrite",
	"furnace":"Furnace",
	"burnish":"Burnish",
	"farris":"Farris",
	"hearth":"Hearth",
	"cinder":"Cinder",
	"iron":"Iron",
	"sledge":"Sledge",
	"alloy":"Alloy",
	"bolt":"Bolt",
	"cast":"Cast",
	"skulk":"Skulk",
	"piper":"Piper",
	"pelage":"Pelage",
	"squeak":"Squeak",
	"miasma":"Miasma",
	"scourge":"Scourge",
	"vgutter":"Veteran Gutter",
	"vdecimate":"Veteran Decimate",
	"vminx":"Veteran Minx"
};

/*fullPlayBooks = {
		"midas":[
			"topcolumn":
			[
				["results":["1"], "momentous":false], 
				["results":["<<"], "momentous":false], 
				["results":["T"], "momentous":false],
				["results":null, "momentous":false], 
				["results":null, "momentous":false], 
				["results":null, "momentous":false]
			],
			"bottomcolumn":
			[
				["results":["GB"], "momentous":true],
				["results":["><"], "momentous":true],
				["results":["GBGB"], "momentous":true],
				["results":["2"], "momentous":false],
				["results":["2", "><"], "momentous":true],
				["results":["KD"], "momentous":false]
			],
			"colour": "green"
		],
		"smoke":[
			"topcolumn":
			[
				["results":null, "momentous":false],
				["results":["T"], "momentous":false],
				["results":["2"], "momentous":false],
				["results":null, "momentous":false]
			],
			"bottomcolumn":
			[
				["results":["1"], "momentous":false],
				["results":[">"], "momentous":true],
				["results":[">>"], "momentous":true],
				["results":["T"], "momentous":true]
			],
			"colour": "green"
		]
};*/

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

function probGettingExactSuccesses(rolls, successes, TN) {
	probSuccessRoll = (7.0-TN)/6.0;
	return Math.pow(probSuccessRoll, successes) * Math.pow(1 - probSuccessRoll, rolls-successes) * choose(rolls, successes);
}

function probGettingSuccesses(rolls, successes, TN) {
	result = 0.0;
	var dice = rolls;
	for (dice = rolls; dice >= successes; dice--) {
        result += probGettingExactSuccesses(rolls, dice, TN);
	}
	return result;
}

function expectedDamage(TAC, TN, ARM, dmgBoost) {
    var result = 0.0;
    var dice = 1;
    for (dice = 1; dice + ARM <= TAC; dice++) {
        chance = probGettingExactSuccesses(TAC, dice + ARM, TN);
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

function probExactlyThisMuchDamage(TAC, TN, ARM, dmgBoost, DMG) {
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
            chance = probGettingExactSuccesses(TAC, column + ARM, TN);
            result += chance;
        }
    }
    if (DMG == 0) {
        result += 1.0 - probGettingSuccesses(TAC, 1 + ARM, TN);
    }
    return result;
}


function probExactlyThisMuchDamageInMultipleHits(TAC, TN, ARM, dmgBoost, DMG, HITS) {
    var result = 0.0;
    var damage = 0;
    if (HITS == 1) {
        return probExactlyThisMuchDamage(TAC, TN, ARM, dmgBoost, DMG);
    }
    for (damage = 0; damage <= DMG; damage++) {
        result += probExactlyThisMuchDamage(TAC, TN, ARM, dmgBoost, damage) * probExactlyThisMuchDamageInMultipleHits(TAC, TN, ARM, dmgBoost, DMG - damage, HITS - 1);
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

function buildExactDamageCache(TAC, TN, ARM, dmgBoost, maxDMG, whichStep) {
    var result = 0.0;
    var damage = 0;
    damageProbCache[whichStep] = []
    if (whichStep == 0) {
        for (damage = 0; damage <= maxDMG; damage++) {
            damageProbCache[whichStep][damage] = probExactlyThisMuchDamage(TAC, TN, ARM, dmgBoost, damage);
        }
        return;
    }
    for (damage = 0; damage < (maxDMG + damageProbCache[whichStep - 1].length); damage++) {
        damageProbCache[whichStep][damage] = 0.0;
        for (damage2 = 0; damage2 <= damage; damage2++) {
            damageProbCache[whichStep][damage] += probExactlyThisMuchDamage(TAC, TN, ARM, dmgBoost, damage2) * damageCacheWrapper(whichStep - 1, damage - damage2);
        }
    }
}

function printDamageInMultipleHitsOld(TAC, TN, ARM, dmgBoost, maxDMG, HITS) {
    var outstring = "";
    var damage = 0;
    var probability = [];
    var atLeastProbability = [];
    var isTooWide = false;
    if (maxDMG > 25)
    {
        isTooWide = true;
    }
    for (damage = 0; damage <= maxDMG; damage++) {
        probability[damage] = probExactlyThisMuchDamageInMultipleHits(TAC, TN, ARM, dmgBoost, damage, HITS);
    }
    for (damage = 0; damage <= maxDMG; damage++) {
        atLeastProbability[damage] = 0.0;
        for (greaterDamage = damage; greaterDamage <= maxDMG; greaterDamage++) {
        atLeastProbability[damage] += probability[greaterDamage];
        }
    }
    for (damage = 0; damage <= maxDMG; damage++) {
    outstring = outstring + "<li style=\"width: " + (90.0/(maxDMG+1)).toFixed(1) + "%\">\n\t<span class=\"barlabel\">" + 
		damage + "</span>\n\t<span class=\"count\" style=\"height: " + (probability[damage] * 100).toFixed(1) + "%\">" + probability[damage].toFixed(3) + 
		"</span>\n\t<span class=\"barprob\"" + (isTooWide ? " style=\"transform: rotate(90deg);\"" : "") + ">" + probability[damage].toFixed(3) + 
		"</span>\n\t<span class=\"barcumprob\"" + (isTooWide ? " style=\"transform: rotate(90deg);\"" : "") + ">" + atLeastProbability[damage].toFixed(3) + "</span>\n</li>\n"
    }
    return outstring;
}

//cached version
function printDamageInMultipleHits(TAC, TN, ARM, dmgBoost, maxDMG, HITS, doCharge, maxChargeDMG) {
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
        buildExactDamageCache(TAC, TN, ARM, dmgBoost, 1 + (maxDMG/HITS), hitCount);
    }
	if (doCharge) {
		buildExactDamageCache(TAC + 4, TN, ARM, dmgBoost, maxChargeDMG, HITS);
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

function printCompareDamageInMultipleHitsOld(TAC, TN, ARM, dmgBoost, HITS, TAC2, TN2, ARM2, dmgBoost2, HITS2, maxDMG) {
	var outstring = "";
	var damage = 0;
	var probability = [];
	var atLeastProbability = [];
	var probability2 = [];
	var atLeastProbability2 = [];
	var isTooWide = false;
	var chartHeight = 46;/*chartHeight = 100 for old style*/
	if (maxDMG > 25)/*maxDMG > 14 for old style*/
	{
		isTooWide = true;
	}
	
	damageColumns = damagePlayBooks[document.getElementById("player").value];

	for (damage = 0; damage <= maxDMG; damage++) {
        probability[damage] = probExactlyThisMuchDamageInMultipleHits(TAC, TN, ARM, dmgBoost, damage, HITS);
	}
	for (damage = 0; damage <= maxDMG; damage++) {
        atLeastProbability[damage] = 0.0;
        for (greaterDamage = damage; greaterDamage <= maxDMG; greaterDamage++) {
        atLeastProbability[damage] += probability[greaterDamage];
        }
	}
	
	damageColumns = damagePlayBooks[document.getElementById("player2").value];
	
	for (damage = 0; damage <= maxDMG; damage++) {
        probability2[damage] = probExactlyThisMuchDamageInMultipleHits(TAC2, TN2, ARM2, dmgBoost2, damage, HITS2);
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

//cached version
function printCompareDamageInMultipleHits(TAC, TN, ARM, dmgBoost, HITS, doCharge, TAC2, TN2, ARM2, dmgBoost2, HITS2, doCharge2, maxDMG, maxChargeDMG) {
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
	
	damageColumns = damagePlayBooks[document.getElementById("player").value];

    for (hitCount = 0; hitCount < HITS; hitCount++) {
        buildExactDamageCache(TAC, TN, ARM, dmgBoost, 1 + (maxDMG/HITS), hitCount);
    }
	if (doCharge) {
		buildExactDamageCache(TAC + 4, TN, ARM, dmgBoost, maxChargeDMG, HITS);
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
	
	damageColumns = damagePlayBooks[document.getElementById("player2").value];
	
    for (hitCount = 0; hitCount < HITS2; hitCount++) {
        buildExactDamageCache(TAC2, TN2, ARM2, dmgBoost2, 1 + (maxDMG/HITS2), hitCount);
    }
	if (doCharge2) {
		buildExactDamageCache(TAC2 + 4, TN2, ARM2, dmgBoost2, maxChargeDMG, HITS2);
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
	
	var TAC2 = parseInt(document.getElementById("TAC2").value);
	var TN2 = parseInt(document.getElementById("TN2").value);
	var ARM2 = parseInt(document.getElementById("ARM2").value);
	var dmgBoost2 = parseInt(document.getElementById("dmgBoost2").value);
	var HITS2 = parseInt(document.getElementById("attacks2").value);
	
	damageColumns = damagePlayBooks[document.getElementById("player").value];

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
		damageColumns = damagePlayBooks[document.getElementById("player2").value];

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
		document.getElementById("thechart").innerHTML = printDamageInMultipleHits(TAC, TN, ARM, dmgBoost, maxDMG, HITS, doChargeAttack.checked, maxChargeDMG);
		document.getElementById("thechart").className = "barchart";
	}
	else if (compareBox.checked == true)
	{
		document.getElementById("thechart").innerHTML = printCompareDamageInMultipleHits(TAC, TN, ARM, dmgBoost, HITS, doChargeAttack.checked, TAC2, TN2, ARM2, dmgBoost2, HITS2, doChargeAttack2.checked, maxDMG, maxChargeDMG);
		document.getElementById("thechart").className = "barchart2";
	}
	var taken = performance.now() - time;
	document.getElementById("debugMessages").innerHTML = "Took " + (taken).toFixed(0) + "ms to calculate."
	
	if (compareBox.checked == true)
	{
		document.getElementById("captainName").innerHTML = longNames[document.getElementById("player").value];
		document.getElementById("captainName2").innerHTML = longNames[document.getElementById("player2").value];
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
</script>
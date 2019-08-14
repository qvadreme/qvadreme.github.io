guilds = {
	"alchemists":{
		"name":"Alchemist's Guild",
		"players":["midas", "smoke", "flask", "naja", "calculus", "vcalculus", "crucible", "katalyst", "vkatalyst", "mercury", "venin", "vitriol", "compound"],
		"colour":"#4b874b"
	},
	"blacksmiths":{
		"name":"Blacksmith's Guild",
		"players":["anvil", "burnish", "culverin", "farris", "ferrite", "furnace", "hearth", "alloy", "bolt", "cast", "cinder", "vcinder", "cutlass", "iron", "sledge"]
	},
	"brewers":{
		"name":"Brewer's Guild",
		"players":["tapper", "esters", "corker", "scum", "quaff", "vdecimate", "friday", "hooper", "mash", "pintpot", "spigot", "vspigot", "stave", "stoker", "lucky"]
	},
	"butchers":{
		"name":"Butcher's Guild",
		"players":["ox", "fillet", "vboar", "princess", "truffles", "boar", "boiler", "brisket", "vbrisket", "vgutter", "meathook", "vox", "shank", "tenderiser", "layne", "roast", "cinnamon"],
		"colour":"#da4141"
	},
	"cooks":{
		"name":"Cook's Guild",
		"players":["wellington", "pepper", "cinnamon", "roast", "spice", "sugar", "shank", "tenderiser"]
	},
	"engineers":{
		"name":"Engineer's Guild",
		"players":["ballista", "pinvice", "rivet", "mainspring", "mother", "colossus", "harriet", "hoist", "locus", "ratchet", "salvo", "velocity", "vvelocity", "compound", "spade", "fuse"]
	},
	"falconers":{
		"name":"Falconer's Guild",
		"players":["devana", "frelsi", "ikaros", "mataagi", "minerva", "rundaas", "egret", "vhearne"]
	},
	"farmers":{
		"name":"Farmer's Guild",
		"players":["grange", "thresher", "peck", "buckwheat", "bushel", "fallow", "harrow", "vhonour", "jackstraw", "millstone", "ploughman", "tater", "windle", "amber"]
	},
	"fish":{
		"name":"Fishermen's Guild",
		"players":["shark", "corsair", "yukai", "salt", "tentacles", "angel", "greyscales", "hag", "jac", "kraken", "sakana", "vsakana", "siren", "vsiren", "knuckles", "fathom", "horizon"]
	},
	"hunters":{
		"name":"Hunter's Guild",
		"players":["theron", "skatha", "steeljaw", "fahad", "snow", "chaska", "egret", "hearne", "vhearne", "jaecar", "vminx", "seenah", "ulfr", "zarola", "edge", "mataagi", "minerva"]
	},
	"masons":{
		"name":"Mason's Guild",
		"players":["honour", "hammer", "corbelli", "marbles", "wrecker", "brick", "chisel", "vchisel", "flint", "granite", "harmony", "vharmony", "mallet", "tower", "lucky"]
	},
	"miners":{
		"name":"Miner's Guild",
		"players":["shaft", "digger", "fissure", "mule", "spade", "fuse", "colossus", "salvo"]
	},
	"morticians":{
		"name":"Mortician's Guild",
		"players":["obulus", "scalpel", "mourn", "dirge", "vileswarm", "bonesaw", "brainpan", "memory", "casket", "cosset", "ghast", "graves", "vgraves", "vhemlocke", "silence", "gaffer", "pelage", "skulk"]
	},
	"navigators":{
		"name":"Navigator's Guild",
		"players":["windfinder", "wander", "azimuth", "ebb", "fathom", "horizon", "angel", "siren"]
	},
	"order":{
		"name":"The Order",
		"players":["sbrisket", "pride", "benediction", "vfangtooth", "harry", "mist", "sspigot", "grace"]
	},
	"ratcatchers":{
		"name":"Ratcatcher's Guild",
		"players":["piper", "squeak", "miasma", "pelage", "scourge", "skulk", "bonesaw", "vgraves"]
	},
	"union":{
		"name":"The Union",
		"players":["blackheart", "vrage", "coin", "strongbox", "avarisse", "greede", "decimate", "fangtooth", "gutter", "hemlocke", "minx", "rage", "snakeskin", "benediction", "harry", "mist", "grace"]
	}
}

players = {
	"midas":{
		"name":"Midas",
		"guilds":["alchemists"],
		"playbook":[1, 1, 1, 2, 2, 3],
		"pb_full":[
			[["1", false], [null, false], [null, false], [null, false], [null, false], ["3", false]],
			[["T", true], ["pd", true], ["b", true], ["2", true], ["k", false], ["ppdd", true]]
		]
	},
	"smoke":{
		"name":"Smoke",
		"guilds":["alchemists"],
		"playbook":[1, 1, 2, 2, 2],
		"pb_full":[
			[[null, false], ["T", false], ["2", false], [null, false], [null, false]],
			[["1", false], ["p", true], ["pp", true], ["T", true], ["k", false]]
		]
	},
	"flask":{
		"name":"Flask",
		"guilds":["alchemists"],
		"playbook":[1, 1],
		"pb_full":null
	},
	"naja":{
		"name":"Naja",
		"guilds":["alchemists"],
		"playbook":[1, 1, 2],
		"pb_full":null
	},
	"calculus":{
		"name":"Calculus",
		"guilds":["alchemists"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":null
	},
	"vcalculus":{
		"name":"Veteran Calculus",
		"guilds":["alchemists"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":null
	},
	"compound":{
		"name":"Compound",
		"guilds":["alchemists", "engineers"],
		"playbook":[1, 1, 2, 2, 2],
		"pb_full":null
	},
	"crucible":{
		"name":"Crucible",
		"guilds":["alchemists"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":null
	},
	"katalyst":{
		"name":"Katalyst",
		"guilds":["alchemists"],
		"playbook":[1, 1, 2, 2, 3, 3],
		"pb_full":null
	},
	"vkatalyst":{
		"name":"Veteran Katalyst",
		"guilds":["alchemists"],
		"playbook":[1, 1, 2, 2, 4, 4, 6],
		"pb_full":null
	},
	"mercury":{
		"name":"Mercury",
		"guilds":["alchemists"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":null
	},
	"venin":{
		"name":"Venin",
		"guilds":["alchemists"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":null
	},
	"vitriol":{
		"name":"Vitriol",
		"guilds":["alchemists"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":null
	},
	"alloy":{
		"name":"Alloy",
		"guilds":["blacksmiths"],
		"playbook":[1, 1, 1, 3, 3, 5],
		"pb_full":null
	},
	"anvil":{
		"name":"Anvil",
		"guilds":["blacksmiths"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":null
	},
	"bolt":{
		"name":"Bolt",
		"guilds":["blacksmiths"],
		"playbook":[1, 1, 2, 2, 4],
		"pb_full":null
	},
	"burnish":{
		"name":"Burnish",
		"guilds":["blacksmiths"],
		"playbook":[1, 1, 1, 3],
		"pb_full":null
	},
	"cast":{
		"name":"Cast",
		"guilds":["blacksmiths"],
		"playbook":[1, 2, 2, 3, 3, 6],
		"pb_full":null
	},
	"cinder":{
		"name":"Cinder",
		"guilds":["blacksmiths"],
		"playbook":[1, 1, 2, 2, 4],
		"pb_full":null
	},
	"vcinder":{
		"name":"Veteran Cinder",
		"guilds":["blacksmiths"],
		"playbook":[1, 1, 2, 2, 4, 4, 6],
		"pb_full":null
	},
	"farris":{
		"name":"Farris",
		"guilds":["blacksmiths"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":null
	},
	"ferrite":{
		"name":"Ferrite",
		"guilds":["blacksmiths"],
		"playbook":[1, 1, 1, 3],
		"pb_full":null
	},
	"furnace":{
		"name":"Furnace",
		"guilds":["blacksmiths"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":null
	},
	"hearth":{
		"name":"Hearth",
		"guilds":["blacksmiths"],
		"playbook":[1, 1, 1, 3],
		"pb_full":null
	},
	"iron":{
		"name":"Iron",
		"guilds":["blacksmiths"],
		"playbook":[1, 2, 2, 4, 4, 4, 7],
		"pb_full":null
	},
	"sledge":{
		"name":"Sledge",
		"guilds":["blacksmiths"],
		"playbook":[2, 2, 4, 4, 6, 6, 8],
		"pb_full":null
	},
	"esters":{
		"name":"Esters",
		"guilds":["brewers"],
		"playbook":[1, 2, 2, 3],
		"pb_full":null
	},
	"tapper":{
		"name":"Tapper",
		"guilds":["brewers"],
		"playbook":[1, 2, 2, 3, 3],
		"pb_full":null
	},
	"quaff":{
		"name":"Quaff",
		"guilds":["brewers"],
		"playbook":[1, 1],
		"pb_full":null
	},
	"scum":{
		"name":"Scum",
		"guilds":["brewers"],
		"playbook":[1, 2, 2],
		"pb_full":null
	},
	"vdecimate":{
		"name":"Veteran Decimate",
		"guilds":["brewers"],
		"playbook":[1, 2, 2, 3, 3],
		"pb_full":null
	},
	"friday":{
		"name":"Friday",
		"guilds":["brewers"],
		"playbook":[1, 2, 2],
		"pb_full":null
	},
	"hooper":{
		"name":"Hooper",
		"guilds":["brewers"],
		"playbook":[1, 2, 2, 3, 4],
		"pb_full":null
	},
	"lucky":{
		"name":"Lucky",
		"guilds":["brewers", "masons"],
		"playbook":[1, 2, 2, 3, 4],
		"pb_full":null
	},
	"mash":{
		"name":"Mash",
		"guilds":["brewers"],
		"playbook":[1, 2, 2, 3],
		"pb_full":null
	},
	"pintpot":{
		"name":"Pintpot",
		"guilds":["brewers"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":null
	},
	"spigot":{
		"name":"Spigot",
		"guilds":["brewers"],
		"playbook":[1, 2, 2, 3],
		"pb_full":null
	},
	"vspigot":{
		"name":"Veteran Spigot",
		"guilds":["brewers"],
		"playbook":[1, 1, 1, 2],
		"pb_full":null
	},
	"stave":{
		"name":"Stave",
		"guilds":["brewers"],
		"playbook":[1, 2, 2, 3, 4],
		"pb_full":null
	},
	"stoker":{
		"name":"Stoker",
		"guilds":["brewers"],
		"playbook":[1, 2, 2, 3],
		"pb_full":null
	},
	"fillet":{
		"name":"Fillet",
		"guilds":["butchers"],
		"playbook":[1, 1, 2, 2, 3, 3, 4],
		"pb_full":null
	},
	"ox":{
		"name":"Ox",
		"guilds":["butchers"],
		"playbook":[1, 1, 2, 2, 3, 3, 4],
		"pb_full":null
	},
	"vboar":{
		"name":"Veteran Boar",
		"guilds":["butchers"],
		"playbook":[1, 2, 2, 3, 3, 5, 6],
		"pb_full":null
	},
	"princess":{
		"name":"Princess",
		"guilds":["butchers"],
		"playbook":[1, 2, 2, 3],
		"pb_full":null
	},
	"truffles":{
		"name":"Truffles",
		"guilds":["butchers"],
		"playbook":[1, 1, 2],
		"pb_full":null
	},
	"boar":{
		"name":"Boar",
		"guilds":["butchers"],
		"playbook":[1, 2, 2, 3, 3, 5, 6],
		"pb_full":null
	},
	"boiler":{
		"name":"Boiler",
		"guilds":["butchers"],
		"playbook":[1, 2, 2, 3, 4],
		"pb_full":[
			[["b", false], ["T", true], ["k", false], [null, false], [null, false]],
			[["1", false], ["2", true], ["pd", false], ["3", true], ["4", true]]
		]
	},
	"brisket":{
		"name":"Brisket",
		"guilds":["butchers"],
		"playbook":[1, 2, 2, 2, 2],
		"pb_full":null
	},
	"vbrisket":{
		"name":"Veteran Brisket",
		"guilds":["butchers"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":null
	},
	"vgutter":{
		"name":"Veteran Gutter",
		"guilds":["butchers"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":null
	},
	"meathook":{
		"name":"Meathook",
		"guilds":["butchers"],
		"playbook":[1, 1, 2, 2, 2, 3],
		"pb_full":null
	},
	"vox":{
		"name":"Veteran Ox",
		"guilds":["butchers"],
		"playbook":[1, 1, 2, 2, 3, 3, 4],
		"pb_full":null
	},
	"shank":{
		"name":"Shank",
		"guilds":["butchers", "cooks"],
		"playbook":[1, 2, 2, 3, 3, 3],
		"pb_full":null
	},
	"tenderiser":{
		"name":"Tenderiser",
		"guilds":["butchers", "cooks"],
		"playbook":[1, 1, 2, 3, 3, 5],
		"pb_full":null
	},
	"ballista":{
		"name":"Ballista",
		"guilds":["engineers"],
		"playbook":[1, 1, 2, 3, 3, 4],
		"pb_full":null
	},
	"pinvice":{
		"name":"Pin Vice",
		"guilds":["engineers"],
		"playbook":[1, 1, 2, 2, 3, 3],
		"pb_full":null
	},
	"mainspring":{
		"name":"Mainspring",
		"guilds":["engineers"],
		"playbook":[1, 1],
		"pb_full":null
	},
	"mother":{
		"name":"Mother",
		"guilds":["engineers"],
		"playbook":[1, 1, 2],
		"pb_full":null
	},
	"colossus":{
		"name":"Colossus",
		"guilds":["engineers", "miners"],
		"playbook":[1, 1, 2, 3, 4],
		"pb_full":null
	},
	"harriet":{
		"name":"Harriet the Hat",
		"guilds":["engineers"],
		"playbook":[1, 2, 2, 2, 3],
		"pb_full":null
	},
	"hoist":{
		"name":"Hoist",
		"guilds":["engineers"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":null
	},
	"locus":{
		"name":"Locus",
		"guilds":["engineers"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":null
	},
	"ratchet":{
		"name":"Ratchet",
		"guilds":["engineers"],
		"playbook":[1, 2, 2, 2, 3],
		"pb_full":null
	},
	"salvo":{
		"name":"Salvo",
		"guilds":["engineers", "miners"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":null
	},
	"velocity":{
		"name":"Velocity",
		"guilds":["engineers"],
		"playbook":[1, 1, 1, 1],
		"pb_full":null
	},
	"vvelocity":{
		"name":"Veteran Velocity",
		"guilds":["engineers"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":null
	},
	"devana":{
		"name":"Devana",
		"guilds":["falconers"],
		"playbook":[1, 2, 2, 3, 3],
		"pb_full":null
	},
	"frelsi":{
		"name":"Frelsi",
		"guilds":["falconers"],
		"playbook":[1, 2, 2, 3],
		"pb_full":null
	},
	"ikaros":{
		"name":"Ikaros",
		"guilds":["falconers"],
		"playbook":[1, 1, 2, 2],
		"pb_full":null
	},
	"mataagi":{
		"name":"Mataagi",
		"guilds":["falconers", "hunters"],
		"playbook":[1, 2, 2, 2, 3],
		"pb_full":null
	},
	"minerva":{
		"name":"Minerva",
		"guilds":["falconers", "hunters"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":null
	},
	"rundaas":{
		"name":"Rundaas",
		"guilds":["falconers"],
		"playbook":[1, 2, 3, 3, 3, 4],
		"pb_full":null
	},
	"egret":{
		"name":"Egret",
		"guilds":["hunters", "falconers"],
		"playbook":[1, 1, 1, 2],
		"pb_full":null
	},
	"vhearne":{
		"name":"Veteran Hearne",
		"guilds":["falconers"],
		"playbook":[1, 1, 2, 3, 3],
		"pb_full":null
	},
	"grange":{
		"name":"Grange",
		"guilds":["farmers"],
		"playbook":[2, 2, 2, 3, 3, 3],
		"pb_full":null
	},
	"thresher":{
		"name":"Thresher",
		"guilds":["farmers"],
		"playbook":[2, 2, 3, 3, 3, 4],
		"pb_full":null
	},
	"buckwheat":{
		"name":"Buckwheat",
		"guilds":["farmers"],
		"playbook":[1, 1, 2, 3],
		"pb_full":null
	},
	"peck":{
		"name":"Peck",
		"guilds":["farmers"],
		"playbook":[1, 1],
		"pb_full":null
	},
	"bushel":{
		"name":"Bushel",
		"guilds":["farmers"],
		"playbook":[0, 2, 2, 3],
		"pb_full":null
	},
	"fallow":{
		"name":"Fallow",
		"guilds":["farmers"],
		"playbook":[2, 2, 3, 3, 3, 4],
		"pb_full":null
	},
	"harrow":{
		"name":"Harrow",
		"guilds":["farmers"],
		"playbook":[2, 2, 2, 2, 3],
		"pb_full":null
	},
	"vhonour":{
		"name":"Veteran Honour",
		"guilds":["farmers"],
		"playbook":[2, 2, 2, 3],
		"pb_full":null
	},
	"jackstraw":{
		"name":"Jackstraw",
		"guilds":["farmers"],
		"playbook":[2, 2, 2],
		"pb_full":null
	},
	"millstone":{
		"name":"Millstone",
		"guilds":["farmers"],
		"playbook":[2, 3, 3, 3],
		"pb_full":null
	},
	"ploughman":{
		"name":"Ploughman",
		"guilds":["farmers"],
		"playbook":[2, 2, 2, 2, 3],
		"pb_full":null
	},
	"tater":{
		"name":"Tater",
		"guilds":["farmers"],
		"playbook":[2, 2, 2, 3, 4],
		"pb_full":null
	},
	"windle":{
		"name":"Windle",
		"guilds":["farmers"],
		"playbook":[2, 3, 3, 4, 5],
		"pb_full":null
	},
	"corsair":{
		"name":"Corsair",
		"guilds":["fish"],
		"playbook":[1, 2, 2, 3, 3],
		"pb_full":null
	},
	"shark":{
		"name":"Shark",
		"guilds":["fish"],
		"playbook":[1, 1, 2, 2, 3, 3],
		"pb_full":null
	},
	"yukai":{
		"name":"Yukai",
		"guilds":["fish"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":null
	},
	"salt":{
		"name":"Salt",
		"guilds":["fish"],
		"playbook":[1, 1],
		"pb_full":null
	},
	"tentacles":{
		"name":"Tentacles",
		"guilds":["fish"],
		"playbook":[1, 1, 2],
		"pb_full":null
	},
	"angel":{
		"name":"Angel",
		"guilds":["fish", "navigators"],
		"playbook":[1, 1, 2, 2],
		"pb_full":null
	},
	"greyscales":{
		"name":"Greyscales",
		"guilds":["fish"],
		"playbook":[1, 1, 1, 2, 2],
		"pb_full":null
	},
	"hag":{
		"name":"Hag",
		"guilds":["fish"],
		"playbook":[1, 1, 2, 2],
		"pb_full":null
	},
	"jac":{
		"name":"Jac",
		"guilds":["fish"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":null
	},
	"kraken":{
		"name":"Kraken",
		"guilds":["fish"],
		"playbook":[1, 2, 2, 3, 3],
		"pb_full":[
			[["1", false], ["2", false], ["T", false], [null, false], [null, false]],
			[["k", true], ["pp", true], ["b", true], ["3", false], ["kpp", true]]
		]
	},
	"sakana":{
		"name":"Sakana",
		"guilds":["fish"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":null
	},
	"vsakana":{
		"name":"Veteran Sakana",
		"guilds":["fish"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":null
	},
	"siren":{
		"name":"Siren",
		"guilds":["fish", "navigators"],
		"playbook":[1, 1, 2],
		"pb_full":null
	},
	"vsiren":{
		"name":"Veteran Siren",
		"guilds":["fish"],
		"playbook":[1, 1, 2, 2],
		"pb_full":null
	},
	"fathom":{
		"name":"Fathom",
		"guilds":["navigators", "fish"],
		"playbook":[1, 1, 1, 2],
		"pb_full":null
	},
	"horizon":{
		"name":"Horizon",
		"guilds":["navigators", "fish"],
		"playbook":[0, 1, 1, 1],
		"pb_full":null
	},
	"skatha":{
		"name":"Skatha",
		"guilds":["hunters"],
		"playbook":[0, 1, 2, 2, 3],
		"pb_full":null
	},
	"theron":{
		"name":"Theron",
		"guilds":["hunters"],
		"playbook":[1, 1, 2, 2, 3, 4],
		"pb_full":null
	},
	"steeljaw":{
		"name":"Steeljaw",
		"guilds":["hunters"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":null
	},
	"fahad":{
		"name":"Fahad",
		"guilds":["hunters"],
		"playbook":[1, 1, 2],
		"pb_full":null
	},
	"snow":{
		"name":"Snow",
		"guilds":["hunters"],
		"playbook":[1, 1, 2],
		"pb_full":null
	},
	"chaska":{
		"name":"Chaska",
		"guilds":["hunters"],
		"playbook":[1, 2, 2, 3],
		"pb_full":null
	},
	"hearne":{
		"name":"Hearne",
		"guilds":["hunters"],
		"playbook":[1, 2, 2, 3, 3],
		"pb_full":null
	},
	"jaecar":{
		"name":"Jaecar",
		"guilds":["hunters"],
		"playbook":[1, 2, 2, 3, 3, 4],
		"pb_full":null
	},
	"vminx":{
		"name":"Veteran Minx",
		"guilds":["hunters"],
		"playbook":[1, 2, 2, 2, 3],
		"pb_full":null
	},
	"seenah":{
		"name":"Seenah",
		"guilds":["hunters"],
		"playbook":[1, 2, 3, 4, 5, 6],
		"pb_full":null
	},
	"ulfr":{
		"name":"Ulfr",
		"guilds":["hunters"],
		"playbook":[1, 1, 1, 2],
		"pb_full":null
	},
	"zarola":{
		"name":"Zarola",
		"guilds":["hunters"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":null
	},
	"honour":{
		"name":"Honour",
		"guilds":["masons"],
		"playbook":[1, 2, 2, 3, 3, 4],
		"pb_full":null
	},
	"hammer":{
		"name":"Hammer",
		"guilds":["masons"],
		"playbook":[1, 1, 2, 2, 3, 4],
		"pb_full":null
	},
	"marbles":{
		"name":"Marbles",
		"guilds":["masons"],
		"playbook":[1, 1, 2],
		"pb_full":null
	},
	"wrecker":{
		"name":"Wrecker",
		"guilds":["masons"],
		"playbook":[1, 1, 2],
		"pb_full":null
	},
	"brick":{
		"name":"Brick",
		"guilds":["masons"],
		"playbook":[0, 2, 2, 3, 4],
		"pb_full":null
	},
	"chisel":{
		"name":"Chisel",
		"guilds":["masons"],
		"playbook":[1, 2, 2, 3, 4],
		"pb_full":null
	},
	"vchisel":{
		"name":"Veteran Chisel",
		"guilds":["masons"],
		"playbook":[1, 2, 2, 2, 3],
		"pb_full":null
	},
	"flint":{
		"name":"Flint",
		"guilds":["masons"],
		"playbook":[1, 1, 1, 2],
		"pb_full":null
	},
	"granite":{
		"name":"Granite",
		"guilds":["masons"],
		"playbook":[1, 1, 2, 2, 3, 4],
		"pb_full":null
	},
	"harmony":{
		"name":"Harmony",
		"guilds":["masons"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":null
	},
	"vharmony":{
		"name":"Veteran Harmony",
		"guilds":["masons"],
		"playbook":[1, 2, 2, 2, 3],
		"pb_full":null
	},
	"mallet":{
		"name":"Mallet",
		"guilds":["masons"],
		"playbook":[1, 2, 2, 3, 4],
		"pb_full":null
	},
	"tower":{
		"name":"Tower",
		"guilds":["masons"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":null
	},
	"obulus":{
		"name":"Obulus",
		"guilds":["morticians"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":null
	},
	"scalpel":{
		"name":"Scalpel",
		"guilds":["morticians"],
		"playbook":[1, 1, 2, 2, 3, 3, 4],
		"pb_full":null
	},
	"mourn":{
		"name":"Mourn",
		"guilds":["morticians"],
		"playbook":[1, 1, 2],
		"pb_full":null
	},
	"dirge":{
		"name":"Dirge",
		"guilds":["morticians"],
		"playbook":[1, 1, 1],
		"pb_full":null
	},
	"vileswarm":{
		"name":"Vileswarm",
		"guilds":["morticians"],
		"playbook":[1, 2, 3],
		"pb_full":null
	},
	"bonesaw":{
		"name":"Bonesaw",
		"guilds":["morticians", "ratcatchers"],
		"playbook":[0, 1, 1, 2, 2],
		"pb_full":null
	},
	"brainpan":{
		"name":"Brainpan",
		"guilds":["morticians"],
		"playbook":[1, 1, 1],
		"pb_full":null
	},
	"memory":{
		"name":"Memory",
		"guilds":["morticians"],
		"playbook":[1, 1, 2, 3],
		"pb_full":null
	},
	"casket":{
		"name":"Casket",
		"guilds":["morticians"],
		"playbook":[1, 2, 2, 3, 3],
		"pb_full":null
	},
	"cosset":{
		"name":"Cosset",
		"guilds":["morticians"],
		"playbook":[1, 2, 2, 3, 4],
		"pb_full":null
	},
	"ghast":{
		"name":"Ghast",
		"guilds":["morticians"],
		"playbook":[1, 1, 2, 3, 3, 4],
		"pb_full":null
	},
	"graves":{
		"name":"Graves",
		"guilds":["morticians"],
		"playbook":[1, 1, 2, 3, 3, 3],
		"pb_full":null
	},
	"vgraves":{
		"name":"Veteran Graves",
		"guilds":["morticians", "ratcatchers"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":null
	},
	"vhemlocke":{
		"name":"Hemlocke",
		"guilds":["morticians"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":null
	},
	"silence":{
		"name":"Silence",
		"guilds":["morticians"],
		"playbook":[1, 2, 2, 3, 3],
		"pb_full":null
	},
	"windfinder":{
		"name":"Windfinder",
		"guilds":["navigators"],
		"playbook":[0, 1, 1, 2, 2],
		"pb_full":null
	},
	"wander":{
		"name":"Wander",
		"guilds":["navigators"],
		"playbook":[1, 1, 1],
		"pb_full":null
	},
	"azimuth":{
		"name":"Azimuth",
		"guilds":["navigators"],
		"playbook":[1, 1, 1, 2, 2, 3],
		"pb_full":null
	},
	"ebb":{
		"name":"Ebb",
		"guilds":["navigators"],
		"playbook":[1, 1, 2, 2],
		"pb_full":null
	},
	"sbrisket":{
		"name":"Seasoned Brisket",
		"guilds":["order"],
		"playbook":[1, 1, 2, 2, 2],
		"pb_full":null
	},
	"pride":{
		"name":"Pride",
		"guilds":["order"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":null
	},
	"benediction":{
		"name":"Benediction",
		"guilds":["order", "union"],
		"playbook":[1, 1, 2, 2, 3, 3],
		"pb_full":null
	},
	"vfangtooth":{
		"name":"Veteran Fangtooth",
		"guilds":["order"],
		"playbook":[2, 3, 3, 3, 6],
		"pb_full":null
	},
	"harry":{
		"name":"Harry the Hat",
		"guilds":["order", "union"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":null
	},
	"mist":{
		"name":"Mist",
		"guilds":["order", "union"],
		"playbook":[1, 1, 1, 1],
		"pb_full":null
	},
	"sspigot":{
		"name":"Seasoned Spigot",
		"guilds":["order"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":null
	},
	"grace":{
		"name":"Grace",
		"guilds":["order", "union"],
		"playbook":[1, 1, 2, 2],
		"pb_full":null
	},
	"piper":{
		"name":"Piper",
		"guilds":["ratcatchers"],
		"playbook":[1, 1, 2, 2, 2],
		"pb_full":null
	},
	"squeak":{
		"name":"Squeak",
		"guilds":["ratcatchers"],
		"playbook":[1, 1, 2],
		"pb_full":null
	},
	"miasma":{
		"name":"Miasma",
		"guilds":["ratcatchers"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":null
	},
	"pelage":{
		"name":"Pelage",
		"guilds":["ratcatchers", "morticians"],
		"playbook":[1, 2, 2, 3, 4],
		"pb_full":null
	},
	"scourge":{
		"name":"Scourge",
		"guilds":["ratcatchers"],
		"playbook":[1, 2, 2, 3, 3, 5],
		"pb_full":null
	},
	"skulk":{
		"name":"Skulk",
		"guilds":["ratcatchers", "morticians"],
		"playbook":[1, 1, 2, 2, 2, 3],
		"pb_full":null
	},
	"blackheart":{
		"name":"Blackheart",
		"guilds":["union"],
		"playbook":[1, 1, 2, 2, 3, 3],
		"pb_full":null
	},
	"vrage":{
		"name":"Veteran Rage",
		"guilds":["union"],
		"playbook":[1, 2, 3, 3, 3, 3, 4],
		"pb_full":null
	},
	"coin":{
		"name":"Coin",
		"guilds":["union"],
		"playbook":[1, 1],
		"pb_full":null
	},
	"strongbox":{
		"name":"Strongbox",
		"guilds":["union"],
		"playbook":[1, 2],
		"pb_full":null
	},
	"avarisse":{
		"name":"Avarisse",
		"guilds":["union"],
		"playbook":[1, 1, 2, 3, 3],
		"pb_full":null
	},
	"greede":{
		"name":"Greede",
		"guilds":["union"],
		"playbook":[1, 1, 2, 3],
		"pb_full":null
	},
	"decimate":{
		"name":"Decimate",
		"guilds":["union"],
		"playbook":[1, 2, 2, 2, 3, 4],
		"pb_full":null
	},
	"fangtooth":{
		"name":"Fangtooth",
		"guilds":["union"],
		"playbook":[1, 2, 2, 3, 4],
		"pb_full":null
	},
	"gutter":{
		"name":"Gutter",
		"guilds":["union"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":null
	},
	"hemlocke":{
		"name":"Hemlocke",
		"guilds":["union"],
		"playbook":[1, 1, 1, 2],
		"pb_full":null
	},
	"minx":{
		"name":"Minx",
		"guilds":["union"],
		"playbook":[1, 2, 3, 3, 4],
		"pb_full":null
	},
	"rage":{
		"name":"Rage",
		"guilds":["union"],
		"playbook":[1, 2, 2, 3, 3, 4],
		"pb_full":null
	},
	"snakeskin":{
		"name":"Snakeskin",
		"guilds":["union"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":null
	},
	"spade":{
		"name":"Spade",
		"guilds":["miners", "engineers"],
		"playbook":[1, 1, 1, 2],
		"pb_full":null
	},
	"fuse":{
		"name":"Fuse",
		"guilds":["miners", "engineers"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":null
	},
	"mule":{
		"name":"Mule",
		"guilds":["miners"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":null
	},
	"fissure":{
		"name":"Fissure",
		"guilds":["miners"],
		"playbook":[1, 1, 1, 1, 2],
		"pb_full":null
	},
	"digger":{
		"name":"Digger",
		"guilds":["miners"],
		"playbook":[1, 1, 2],
		"pb_full":null
	},	
	"shaft":{
		"name":"Shaft",
		"guilds":["miners"],
		"playbook":[0, 0, 1, 2, 2, 2],
		"pb_full":null
	},
	"wellington":{
		"name":"Wellington",
		"guilds":["cooks"],
		"playbook":[1, 1, 2, 3, 4],
		"pb_full":null
	},
	"pepper":{
		"name":"Pepper",
		"guilds":["cooks"],
		"playbook":[1, 2, 2],
		"pb_full":null
	},
	"cinnamon":{
		"name":"Cinnamon",
		"guilds":["cooks", "butchers"],
		"playbook":[1, 1, 2, 3],
		"pb_full":null
	},	
	"roast":{
		"name":"Roast",
		"guilds":["cooks", "butchers"],
		"playbook":[1, 1, 2, 3, 3, 4],
		"pb_full":null
	},
	"spice":{
		"name":"Spice",
		"guilds":["cooks"],
		"playbook":[1, 2, 2, 3, 4],
		"pb_full":null
	},
	"sugar":{
		"name":"Sugar",
		"guilds":["cooks"],
		"playbook":[1, 2, 2, 3],
		"pb_full":null
	},
	"rivet":{
		"name":"Rivet",
		"guilds":["engineers"],
		"playbook":[1, 2, 2, 3, 3, 4],
		"pb_full":[
			[["1", false], [null, false], [null, false], ["pp", false], [null, false], [null, false]],
			[["T", true], ["2p", true], ["k", false], ["3", true], ["kp", true], ["4", true]]
		]
	},
	"corker":{
		"name":"Corker",
		"guilds":["brewers"],
		"playbook":[1, 2, 2, 3, 3, 4],
		"pb_full":[
			[["1", false], ["2", false], [null, false], ["T", false], [null, false], [null, false]],
			[["p", true], ["k", true], ["pp", true], ["3", true], ["kpp", true], ["4", true]]
		]
	},
	"corbelli":{
		"name":"Corbelli",
		"guilds":["masons"],
		"playbook":[0, 0, 2, 2, 3],
		"pb_full":[
			[["T", true], [null, false], ["2", true], [null, false], [null, false]],
			[["d", true], ["dd", true], ["pd", true], ["k", false], ["3", false]]
		]
	},
	"culverin":{
		"name":"Culverin",
		"guilds":["blacksmiths"],
		"playbook":[1, 1, 1, 3],
		"pb_full":[
			[["1", false], ["T", false], ["pp", true], [null, false]],
			[["p", true], ["b", true], ["k", true], ["3", false]]
		]
	},
	"cutlass":{
		"name":"Cutlass",
		"guilds":["blacksmiths"],
		"playbook":[1, 1, 3, 3, 5, 6],
		"pb_full":[
			[["d", false], ["T", false], [null, false], [null, false], [null, false], [null, false]],
			[["1", true], ["1dd", true], ["3", true], ["pd", false], ["5", true], ["6", true]]
		]
	},
	"layne":{
		"name":"Layne",
		"guilds":["butchers"],
		"playbook":[1, 2, 2, 2, 3],
		"pb_full":[
			[[null, false], ["dd", false], [null, false], [null, false], [null, false]],
			[["1d", true], ["2", true], ["T", false], ["dd", true], ["T3", true]]
		]
	},
	"amber":{
		"name":"Amber",
		"guilds":["farmers"],
		"playbook":[2, 2, 2, 3, 4],
		"pb_full":[
			[["d", false], [null, false], ["k", false], ["3", true], [null, false]],
			[["2", true], ["Tb", true], ["2d", true], ["dd", true], ["4", true]]
		]
	},	
	"knuckles":{
		"name":"Knuckles",
		"guilds":["fish"],
		"playbook":[1, 2, 2, 2, 3, 4],
		"pb_full":[
			[["1", false], ["2", false], ["b", true], ["Tpp", false], [null, false], [null, false]],
			[["p", true], ["T", false], ["pp", true], ["k", true], ["3", false], ["4", false]]
		]
	},
	"edge":{
		"name":"Edge",
		"guilds":["hunters"],
		"playbook":[1, 2, 2, 3],
		"pb_full":[
			[["1", false], [null, false], [null, false], ["3", false]],
			[["Td", true], ["2b", true], ["pd", false], ["Tdd", true]]
		]
	},
	"gaffer":{
		"name":"Gaffer",
		"guilds":["morticians"],
		"playbook":[1, 1, 2, 2, 3],
		"pb_full":[
			[["1", false], [null, false], ["pp", false], [null, false], [null, false]],
			[["p", true], ["T", true], ["2", false], ["b", true], ["3", true]]
		]
	}
}

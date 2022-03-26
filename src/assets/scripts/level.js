export default {
	"start": {
		"storyImage": "hillary1.jpg",
		"storyText": "Hillary Clinton is about to fart in your eyeball and give you pink eye, what do you do?",
		"choices": [
			{
				"choiceText": "Kick her in the fart box",
				"nextScene": "kickedHillary"
			},
			{
				"choiceText": "Plead for your life",
				"nextScene": "pleadedForLife"
			}
		]
	},
	"pleadedForLife": {
		"storyImage": "hillary2.jpg",
		"storyText": "Hillary Clinton is unmoved by your plight and asks if you have Kromer",
		"choices": [
			{
				"choiceText": "Give Kromer",
				"nextScene": "end"
			},
			{
				"choiceText": "Give COVID Vaccine",
				"nextScene": "gaveVaccine"
			}
		]
	},
	"kickedHillary": {
		"storyImage": "hillary3.jpg",
		"storyText": "She howls in pain like some kind of bizarre animal.",
		"choices": [
			{
				"choiceText": "Kick her again",
				"nextScene": "kickedHillaryAgain"
			},
			{
				"choiceText": "Run away",
				"nextScene": "ranAway"
			},
			{
				"choiceText": "Give COVID vaccine",
				"nextScene": "gaveVaccine"
			}
		]
	},
	"kickedHillaryAgain": {
		"storyImage": "hillary4.jpg",
		"storyText": "You try kicking her again, but she tears your arms off and shoves them up her butt.",
		"choices": [
			{
				"choiceText": "Scream a bit and then die",
				"nextScene": "end"
			}
		]
	},
	"gaveVaccine": {
		"storyImage": "arbys.png",
		"storyText": "Hillary Clinton grows an entire Arby's restaraunt in the tight confines of her lungs.  Roast beef erupts from every orifice.",
		"choices": [
			{
				"choiceText": "Yay!",
				"nextScene": "end"
			}
		]
	},
	"ranAway": {
		"storyImage": "hillary4.jpg",
		"storyText": "Hillary Clinton runs so fast that she is elected twice and catches up with you and drinks your blood because it tastes like Mountain Dew..",
		"choices": [
			{
				"choiceText": "Oh noes!",
				"nextScene": "end"
			}
		]
	}
}
define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Goal',
			title : {
				media : {word : 'Goal'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'intention'},
				{word: 'aim'},
				{word: 'target'},
				{word: 'planning'},
				{word: 'plan'},
				{word: 'destination'},
				{word: 'finality'},
				{word: 'purpose'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},	
		category2 :	{
			name : 'Chance',
			title : {
				media : {word : 'Chance'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'luck'},
				{word: 'lottery'},
				{word: 'contingency'},
				{word: 'dice roll'},
				{word: 'uncertainty'},
				{word: 'raffle'},
				{word: 'coincidence'},
				{word: 'accident'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		
		attribute2 :
		{
			name : 'Genetics',
			title : {
				media : {word : 'Genetics'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'genome'},
				{word: 'genetics'},
				{word: 'genetic heritage'},
				{word: 'chromosome'},
				{word: 'heredity'},
				{word: 'genetic information'},
				{word: 'genetic material'},
				{word: 'DNA'},
				{word: 'gene'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute1 :
		{
			name : 'Environment',
			title : {
				media : {word : 'Environment'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'luminosity'},
				{word: 'climate'},
				{word: 'humidity'},
				{word: 'tempurature'},
				{word: 'atmospheric pressure'},
				{word: 'natural events'},
				{word: 'radiation'},
				{word: 'new environment'},

			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},		
		

		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/'
		} 
	});
});

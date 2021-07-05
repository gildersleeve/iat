define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Teleology',
			title : {
				media : {word : 'Teleology words'},
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
				{word: 'goal'},
				{word: 'finality'},
				{word: 'purpose'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},	
		category2 :	{
			name : 'Chance',
			title : {
				media : {word : 'Chance words'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'luck'},
				{word: 'chance'},
				{word: 'lottery'},
				{word: 'contingency'},
				{word: 'wonderful'},
				{word: 'peace'},
				{word: 'pleasure'},
				{word: 'pleasure'},
				{word: 'love'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		
		attribute2 :
		{
			name : 'Genetics',
			title : {
				media : {word : 'Genetics words'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'laughter'},
				{word: 'happy'},
				{word: 'glorious'},
				{word: 'joy'},
				{word: 'wonderful'},
				{word: 'peace'},
				{word: 'pleasure'},
				{word: 'pleasure'},
				{word: 'love'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute1 :
		{
			name : 'Environment',
			title : {
				media : {word : 'Environment words'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'awful'},
				{word: 'failure'},
				{word: 'agony'},
				{word: 'hurt'},
				{word: 'horrible'},
				{word: 'terrible'},
				{word: 'nasty'},
				{word: 'nasty'},
				{word: 'evil'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},		
		

		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/'
		} 
	});
});

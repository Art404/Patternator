(function () {

	// Init Canvas Object
	var canvasObject = {
		colorPalette: 'default',
		layers: {
		},
		background: {
			type: 'body',
			color: 'transparent'
		}
	}

	// Canvas Pallet
	var randColorPalette;


	methods = {
		init: function () {
			console.log('Init');
			methods.initEventHandlers();
			methods.initAuto();
			methods.initInitialLayers();
		},
		initAuto: function () {
			console.log('Init Auto!');
			setInterval(function () {
				
				methods.autoCreate();
			}, 1500);
		},
		initEventHandlers: function () {
			$('.new-art-button').on('click', function () {
				// console.log('new-art');
				var numLayers = methods.createNumLayers();
				methods.createRandLayerComp(numLayers);
			});

			$('.new-color-pallete-button').on('click', function () {
				// console.log('new-color-pallete');
				methods.setRandColorPalette();
				// methods.setColorToLayers();
			});

			$('.default-color-pallete-button').on('click', function () {
				// console.log('new-color-pallete');
				methods.setDefaultColorPalette();
				// methods.setColorToLayers();
			});
		},
		initInitialLayers: function () {
			var numLayers = methods.createNumLayers();
			methods.createRandLayerComp(numLayers);
		},
		createNumLayers: function () {
			return 6;
			//return Math.ceil(Math.random() * 6);
		},
		createRandLayerComp: function (numLayers) {
			// console.log(numLayers);
			// numLayers = 3;
			var currentPatternArray = [];
			for (i = 0; i < numLayers; i++) {
				// get rand shape and pattern properties
				var randShapeDef = methods.getRandShapeDef();
				var randPatternDef = methods.getRandPatternDef();
				// methods.returnUniquePattern(randPatternDef, currentPatternArray);
				
				// if ($.inArray(currentPatternArray) > -1) {
				// 	console.log('HELLO');
				// 	var randPatternDef = methods.getRandPatternDef();
				// 	currentPatternArray.push(randPatternDef.name);
				// }

				console.log(randPatternDef);

				// console.log(i);
				canvasObject.layers['layer' + i] = randShapeDef;
				canvasObject.layers['layer' + i].pattern = randPatternDef;
			}
			console.log(currentPatternArray);
			console.log(canvasObject);
			methods.switchShape();
		},
		returnUniquePattern: function (randPatternDef, currentPatternArray) {
			if ($.inArray(randPatternDef, currentPatternArray) > -1) {
				randPatternDef = methods.getRandPatternDef();
				methods.returnUniquePattern(randPatternDef);		
			} else {
				currentPatternArray.push(randPatternDef.name);
				return randPatternDef;
			}
		},
		switchShape: function () {
			console.log('switchShape');
			// empty the current design in the SVG canvas
			$('.svg-canvas-group').empty();

			// Loop through the canvasObject and upadete the canvas DOM
			for (var layer in canvasObject.layers) {
				currentShape = canvasObject.layers[layer];
				console.log(layer);

				if (currentShape.pattern.name === 'single') {
					console.log(currentShape.pattern.name);
					$('.svg-canvas-group').append('<use class="' + layer + '" xlink:href="#' + currentShape.name + ' fill="' + currentShape.defaultColor.layer1 + '"' + '" transform="translate(180, 180) scale(0.5) rotate(0)"/>');
					$('#' + currentShape.pattern.name).attr({'xlink:href': '#' + currentShape.name});
				} else {
					// find the patternType in the dom and change the base symbol to the current shape
					console.log(currentShape.pattern.name);

					// append rectangle with the layer name and selected pattern type
					$('.svg-canvas-group').append('<rect  class="' + layer + '" fill ="url(#' + currentShape.pattern.name + ')" x="' + currentShape.pattern.x + '"  y="' + currentShape.pattern.y + '"  width="' + currentShape.pattern.width + '"  height="' +  currentShape.pattern.height +'"/>');
					$('#' + currentShape.pattern.name).find('use').attr({'xlink:href': '#' + currentShape.name, 'fill': currentShape.defaultColor.layer1});
				}						

				// $('.svg-canvas-group').append('<use class="' + layer + '" xlink:href="#' + currentShape.name + '" transform="translate(180, 180) scale(0.5) rotate(0)"/>');
				// $('.layer1').attr('xlink:href', '#' + currentShape.name);
			}

			// resets the canvas and renders the SVG shapes
			$(".svg-canvas").html($(".svg-canvas").html());
		},
		getRandShapeDef: function () {
			var count = 0;
			for (var shape in shapeDefArray)
			    if (Math.random() < 1/++count)
			       randShapeDef = shape;
			return shapeDefArray[randShapeDef];

			// return shapeDefArray[Math.floor(Math.random() * shapeDefArray.length)];
		},
		getRandPatternDef: function () {
			var count = 0;
			for (var pattern in patternDefArray)
			    if (Math.random() < 1/++count)
			       randPatternDef = pattern;
			return patternDefArray[randPatternDef];
			// return patternDefArray[Math.floor(Math.random() * patternDefArray.length)];
		},
		setRandColorPalette: function () {
			randColorPalette;
		    var count = 0;
		    for (var palette in colorPalette)
		        if (Math.random() < 1/++count)
		           randColorPalette = palette;
		    console.log(colorPalette[randColorPalette]);
		    
		    // find num of layers, loop through the layer objects and change the color
		    var numOfCurrentLayers = Object.keys(canvasObject.layers).length;
		    for (i = 0; i < numOfCurrentLayers; i++) {
		    	currentRandColor = methods.getRandColorFromPalette();
		    	canvasObject.layers['layer' + i].currentColor = currentRandColor;
		    	methods.setColorToLayers();
		    }
		    currentBackgroundColor = methods.getRandColorFromPalette();
		    canvasObject.background.currentColor = currentBackgroundColor;

		},
		getRandColorFromPalette: function () {
			currentColorPalette = colorPalette[randColorPalette];
			var randColorFromPalette = currentColorPalette[Math.floor(Math.random() * currentColorPalette.length)];
			return randColorFromPalette;
			// methods.setColorToLayers();
		},
		setDefaultColorPalette: function () {
			// console.log(canvasObject);
			
			for (var key in canvasObject.layers) {
				// console.log(key);
				var layer = canvasObject.layers[key];	
				console.log(layer.defaultColor);
				console.log('layer: ' + layer.name);
				// console.log($('#' + layer.name));
				// console.log(layer.pattern.name);
				var currentPattern = ('#' + layer.pattern.name);
				console.log(currentPattern);
				if (currentPattern === '#single') {
					$(currentPattern).attr({'fill': layer.defaultColor.layer1});
				} else {
					console.log('pattern:' + currentPattern);
					// $('#' + layer.name).attr({'fill': layer.defaultColor});
					$(currentPattern).find('use').attr({'fill': layer.defaultColor.layer1});
					$('.background').attr({'fill': 'white'});	
				}
				
			}
		},
		setColorToLayers: function () {
			console.log('setColorToLayers');

			for (var layer in canvasObject.layers) {
				console.log(layer);
				currentShape = canvasObject.layers[layer];

				if (currentShape.pattern.name === 'single') {
					$('.' + layer).attr({'fill': currentShape.currentColor});
				} else {
					$('#' + currentShape.pattern.name).find('use').attr({'fill': currentShape.currentColor});
				}	
			}

			$('.background').attr({'fill': canvasObject.background.currentColor});
		},
		autoCreate: function () {
			console.log('autoCreate');
			var input = $('#checkboxbutton').is(":checked");
			console.log(input);
			
			if (input === true) {

				randButton = Math.floor(Math.random()* 3);
				console.log('new-art');

				switch (randButton) {
					case 1:
						var numLayers = methods.createNumLayers();
						methods.createRandLayerComp(numLayers);
						break;
					case 2:
						methods.setRandColorPalette();
						break;
					case 3:
						break;
						methods.setDefaultColorPalette();
				}
			}
		}
	}

	window.Pattern = methods;
})();


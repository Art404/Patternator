(function () {

	var shapeDefArray = [
		'mcdonalds',
		'dove',
		'adidas',
		'nike',
		'target',
		'abercrombie',
		'american-airlines',
		'burberry',
		'american-outfitters',
		'redbull',
		'nbc',
		'apple',
		'coca-cola',
		'phat',
		'bacardi',
		'barclays',
		'threem',
		'adidasflower',
		'afi',
		'aim',
		'airjordan',
		'allianz',
		'airfrance',
		'americaonline',
		'aperture',
		'audi',
		'phat',
		'bancagenerali',
		'bankofamerica',
		'batman',
		'bp',
		'browning',
		'carrefour',
		'cbs',
		'channel',
		'chase',
		'chiquita',
		'chupachups',
		'citroen',
		'dharma',
		'dinersclub',
		'directv',
		'dodge',
		'dolby',
		'droetkerlogo',
		'ecko',
		'emi',
		'evernote',
		'ferraricolor',
		'fisherprice',
		'foxmoto',
		'fuji',
		'gap',
		'givenchy',
		'goodyear',
		'gucci',
		'halflife',
		'halmark',
		'harpercollins',
		'hermes',
		'hsbclogo',
		'ingbank',
		'jal',
		'kenzo',
		'klm',
		'kmart',
		'lacoste',
		'laview',
		'levis',
		'louisvuitton',
		'masstransport',
		'mazda',
		'mercedes',
		'merck',
		'mobil',
		'motorola',
		'newbalance',
		'northface',
		'olympics',
		'oneil',
		'opel',
		'panam',
		'pathe',
		'paulfrank',
		'pbs',
		'penguin',
		'playboy',
		'playstation',
		'plus',
		'prudential',
		'puma',
		'purewool',
		'rayban',
		'reebok',
		'renault',
		'rolex',
		'samsonite',
		'waltdisney',
		'paulfrank',
		'chiquitacolor',
		'chupachups',
		'mastercard',
		'foster',
		'citroen',
		'dharma'
	];



	var patternObject = {
		group1: {
			tX: '0',
			tY: '0',
			mX: 1,
			mY: 1,
			sX: 0.7,
			sY: 0.7,
			item1: {
				tX: '0',
				tY: '0',
				mX: 1,
				mY: 1,
				sX: 0.7,
				sY: 0.7
			},
			item2: {
				tX: '0',
				tY: '0',
				mX: 1,
				mY: 1,
				sX: 0.7,
				sY: 0.7
			}
		},
		group2: {
			item1: {
				tX: '0',
				tY: '0',
				mX: 1,
				mY: 1,
				sX: 0.7,
				sY: 0.7
			},
			item2: {
				tX: '0',
				tY: '0',
				mX: 1,
				mY: 1,
				sX: 0.7,
				sY: 0.7
			}
		},
		group3: {
			item1: {
				tX: '0',
				tY: '0',
				mX: 1,
				mY: 1,
				sX: 0.7,
				sY: 0.7
			},
			item2: {
				tX: '0',
				tY: '0',
				mX: 1,
				mY: 1,
				sX: 0.7,
				sY: 0.7
			}
		}
	}

	var randShapeDef1,
		randShapeDef2,
		randShapeDef3,
		randShapeDef4,
		randShapeDef5,
		randShapeDef6,
		randShapeDef7,
		randShapeDef8;

	var randColorPalette;

	var colorPalette = {
		pallete1: [
			'#556270',
			'#4ECDC4',
			'#C7F464',
			'#FF6B6B',
			'#C44D58'
		],
		pallete2: [
			'#69D2E7',
			'#A7DBD8',
			'#E0E4CC',
			'#F38630',
			'#FA6900'
		],
		pallete3: [
			'#00A0B0',
			'#6A4A3C',
			'#CC333F',
			'#EB6841',
			'#EDC951'
		],

	}


	methods = {
		init: function () {
			console.log('Init');
			methods.initEventHandlers();
			methods.initAuto();
			// methods.initSliders();
		},
		initAuto: function () {
			console.log('Init Auto!');
			setInterval(function () {
				
				methods.autoCreate();
			}, 5000);
		},
		initEventHandlers: function () {
			$('.example-button').on('click', function () {
				var html = $(this).html();
				$('li').removeClass('selected');
				$(this).addClass('selected');
				// var classes = $(this).attr("class");
				methods.switchPatternView(html);
			});

			// $("input[type='checkbox']").on('click', function() {
			//     if ($(this).is(':checked')) {
			//     	console.log('checked!');
			//     	methods.mirrorShape($(this), 1);
			//     } else {
			//     	console.log('not checked!');
			//     	methods.mirrorShape($(this), -1);
			//     }
			    
			// });

			$('switchShape').on('click', function () {
				console.log('switch shape!');
			});

			$('.new-art-button').on('click', function () {
				console.log('new-art');
				randShapeDef1 = methods.getRandShapeDef();
				randShapeDef2 = methods.getRandShapeDef();
				randShapeDef3 = methods.getRandShapeDef();
				randShapeDef4 = methods.getRandShapeDef();
				randShapeDef5 = methods.getRandShapeDef();
				randShapeDef6 = methods.getRandShapeDef();
				randShapeDef7 = methods.getRandShapeDef();
				randShapeDef8 = methods.getRandShapeDef();
				randShapeDef9 = methods.getRandShapeDef();


				console.log(randShapeDef1,
					randShapeDef2,
					randShapeDef3,
					randShapeDef4,
					randShapeDef5,
					randShapeDef6,
					randShapeDef7,
					randShapeDef8) 

				methods.switchShape();


			});

			$('.new-color-pallete-button').on('click', function () {
				// console.log('new-color-pallete');
				// methods.getRandShapeDef();
				// methods.switchShape();
				methods.setRandColorPalette();
				// methods.setColorToLayers();
			});
		},
		initSliders: function () {
			$( ".pattern-ui-slider" ).slider({
				value:0,
				min: 0,
				max: 1000,
				step: 1,
				slide: function( event, ui ) {
					methods.moveShape($(this), ui);
					// console.log($(this).attr("class"));
					// console.log(ui.value);
					// $( "#amount" ).val( "$" + ui.value );
					// $("#use-1").children()[0].setAttribute('transform', 'translate(' + ui.value + ', ' + '0' + 'scale(-0.7, -0.7)');
					// console.log($('#use-1').setAttribute('transform', 'translate(' + ui.value + ', ' + '0' + 'scale(-0.7, -0.7)'));
					// console.log($('.def-shape1').attr('transform', 'translate(' + ui.value + ', ' + '0' + ') ' + 'scale(-0.7, -0.7)'));
					//console.log($('#pattern1-item2'));
				}
			});
			// $( "#amount" ).val( "$" + $( ".pattern-ui-slider" ).slider( "value" ) );
			
		},
		moveShape: function (shapeObject, uiObject) {
			// console.log(shapeObject.hasClass('pattern1-item1-translateX'));
			if (shapeObject.hasClass('group1-item1-translateX')) {
				patternObject.group1.item1.tX = uiObject.value;
				$('.group1-item1').attr('transform', 'translate(' + patternObject.group1.item1.tX + ', ' + patternObject.group1.item1.tY + ') ' + 'scale(' + patternObject.group1.item1.mX * patternObject.group1.item1.sX + ', ' + patternObject.group1.item1.mY * patternObject.group1.item1.sY + ')');
			} else if (shapeObject.hasClass('group1-item1-translateY')) {
				patternObject.group1.item1.tY = uiObject.value;
				$('.group1-item1').attr('transform', 'translate(' + patternObject.group1.item1.tX + ', ' + patternObject.group1.item1.tY + ') ' + 'scale(' + patternObject.group1.item1.mX * patternObject.group1.item1.sX + ', ' + patternObject.group1.item1.mY * patternObject.group1.item1.sY + ')');
			} else if (shapeObject.hasClass('group1-item2-translateX')) {
				patternObject.group1.item2.tX = uiObject.value;
				$('.group1-item2').attr('transform', 'translate(' + patternObject.group1.item2.tX + ', ' + patternObject.group1.item2.tY + ') ' + 'scale(' + patternObject.group1.item2.mX * patternObject.group1.item2.sX + ', ' + patternObject.group1.item2.mY * patternObject.group1.item2.sY + ')');
			} else if (shapeObject.hasClass('group1-item2-translateY')) {
				patternObject.group1.item2.tY = uiObject.value;
				$('.group1-item2').attr('transform', 'translate(' + patternObject.group1.item2.tX + ', ' + patternObject.group1.item2.tY + ') ' + 'scale(' + patternObject.group1.item2.mX * patternObject.group1.item2.sX + ', ' + patternObject.group1.item2.mY * patternObject.group1.item2.sY + ')');
			} else if (shapeObject.hasClass('group2-item1-translateX')) {
				patternObject.group2.item1.tX = uiObject.value;
				console.log($('.group2-item1').attr('transform', 'translate(' + patternObject.group2.item1.tX + ', ' + patternObject.group1.item1.tY + ') ' + 'scale(-0.7, -0.7)'));
			} else if (shapeObject.hasClass('group2-item1-translateY')) {
				patternObject.group2.item2.tY = uiObject.value;
				console.log($('.group2-item2').attr('transform', 'translate(' + patternObject.group2.item1.tX + ', ' + patternObject.group2.item1.tY + ') ' + 'scale(-0.7, -0.7)'));
			} else if (shapeObject.hasClass('group2-item2-translateX')) {
				patternObject.group2.item2.tX = uiObject.value;
				console.log($('.group2-item2').attr('transform', 'translate(' + patternObject.group2.item2.tX + ', ' + patternObject.group2.item2.tY + ') ' + 'scale(-0.7, -0.7)'));
			} else if (shapeObject.hasClass('group2-item2-translateY')) {
				patternObject.group2.item2.tY = uiObject.value;
				console.log($('.group2-item2').attr('transform', 'translate(' + patternObject.group2.item2.tX + ', ' + patternObject.group2.item2.tY + ') ' + 'scale(-0.7, -0.7)'));
			} else if (shapeObject.hasClass('group1-translateX')) {
				patternObject.group1.tX = uiObject.value;
				console.log(patternObject.group1.tX);
				$('.group1').attr('transform', 'translate(' + patternObject.group1.tX + ', ' + patternObject.group1.tY + ') ' + 'scale(-0.7, -0.7)');
			} else if (shapeObject.hasClass('group1-translateY')) {
				patternObject.group1.tY = uiObject.value;
				console.log(patternObject.group1.tY);
				console.log($('.group2-item2').attr('transform'));
				$('.group1').attr('transform', 'translate(' + patternObject.group1.tX + ', ' + patternObject.group1.tY + ') ' + 'scale(-0.7, -0.7)');
			}
		},
		mirrorShape: function (checkbox, state) {
			if (checkbox.hasClass('group1-item1-mirrorX')) {
				patternObject.group1.item1.mX = state;
				methods.updateShape('.group1-item1', patternObject.group1.item1);
			} else if (checkbox.hasClass('group1-item1-mirrorY')) {
				patternObject.group1.item1.mY = state;
				methods.updateShape('.group1-item1', patternObject.group1.item1);
			} else if (checkbox.hasClass('group1-item2-mirrorX')) {
				patternObject.group1.item2.mX = state;
				methods.updateShape('.group1-item2', patternObject.group1.item2);
			} else if (checkbox.hasClass('group1-item2-mirrorY')) {
				patternObject.group1.item2.mY = state;
				methods.updateShape('.group1-item2', patternObject.group1.item2);
			} else if (checkbox.hasClass('group1-mirrorX')) {
				patternObject.group1.mX = state;
				methods.updateShape('.group1', patternObject.group1);
			} else if (checkbox.hasClass('group1-mirrorY')) {
				patternObject.group1.mY = state;
				methods.updateShape('.group1', patternObject.group1);
			}
		},
		switchShape: function () {
			$('.layer1').attr('xlink:href', '#' + randShapeDef1);
			$('#Pattern1').find('use').attr({'xlink:href': '#' + randShapeDef2});
			$('#Pattern2').find('use').attr({'xlink:href': '#' + randShapeDef3});
			$('#Pattern3').find('use').attr({'xlink:href': '#' + randShapeDef4});
			$('#Pattern4').find('use').attr({'xlink:href': '#' + randShapeDef5});
			$('#Pattern5').find('use').attr({'xlink:href': '#' + randShapeDef6});
			$('#Pattern6').find('use').attr({'xlink:href': '#' + randShapeDef7});
			$('#Pattern7').find('use').attr({'xlink:href': '#' + randShapeDef8});
		},
		updateShape: function (shape, objectPath) {
			$(shape).attr('transform', 'translate(' + objectPath.tX + ', ' + objectPath.tY + ') ' + 'scale(' + objectPath.mX * objectPath.sX + ', ' + objectPath.mY * objectPath.sY + ')');
		},
		switchPatternView: function (html) {
			$('.canvas').css({'display': 'none'})

			switch (html) {
				case 'Grid Example':
					$('.canvas-1').css({'display': 'block'});
					break;
				case 'Radial Example':
					$('.canvas-2').css({'display': 'block'});
					break;
				case 'Mirror Example':
					$('.canvas-3').css({'display': 'block'});
					break;
				case 'Output View':
					$('.canvas-threejs').css({'display': 'block'});
					break;
				default: 
					console.log(html);
					break;
			}
		},
		getRandShapeDef: function () {
			return shapeDefArray[Math.floor(Math.random() * shapeDefArray.length)];
		},
		setRandColorPalette: function () {
			randColorPalette;
		    var count = 0;
		    for (var palette in colorPalette)
		        if (Math.random() < 1/++count)
		           randColorPalette = palette;
		    console.log(colorPalette[randColorPalette]);
		    methods.getRandColorFromPalette();
		},
		getRandColorFromPalette: function () {
			currentColorPalette = colorPalette[randColorPalette];
			var randColorFromPalette = currentColorPalette[Math.floor(Math.random() * currentColorPalette.length)];
			console.log(randColorFromPalette);
			// methods.setColorToLayers();
		},
		setColorToLayers: function () {
			console.log('setColorToLayers');
		},
		switchColorPalette: function () {
			$('.layer1').attr('xlink:href', '#' + randShapeDef1);
			$('#Pattern1').find('use').attr({'xlink:href': '#' + randShapeDef2});
			$('#Pattern2').find('use').attr({'xlink:href': '#' + randShapeDef3});
			$('#Pattern3').find('use').attr({'xlink:href': '#' + randShapeDef4});
			$('#Pattern4').find('use').attr({'xlink:href': '#' + randShapeDef5});
			$('#Pattern5').find('use').attr({'xlink:href': '#' + randShapeDef6});
			$('#Pattern6').find('use').attr({'xlink:href': '#' + randShapeDef7});
			$('#Pattern7').find('use').attr({'xlink:href': '#' + randShapeDef8});
		},
		autoCreate: function () {
			console.log('autoCreate');
			var input = $('#checkboxbutton').is(":checked");
			console.log(input);
			if (input === true) {
				console.log('new-art');
				randShapeDef1 = methods.getRandShapeDef();
				randShapeDef2 = methods.getRandShapeDef();
				randShapeDef3 = methods.getRandShapeDef();
				randShapeDef4 = methods.getRandShapeDef();
				randShapeDef5 = methods.getRandShapeDef();
				randShapeDef6 = methods.getRandShapeDef();
				randShapeDef7 = methods.getRandShapeDef();
				randShapeDef8 = methods.getRandShapeDef();
				randShapeDef9 = methods.getRandShapeDef();


				console.log(randShapeDef1,
					randShapeDef2,
					randShapeDef3,
					randShapeDef4,
					randShapeDef5,
					randShapeDef6,
					randShapeDef7,
					randShapeDef8) 

				methods.switchShape();
			}
		}
	}

	window.Pattern = methods;
})();




// console.log($("#Pattern").children()[0].setAttribute('x',50));



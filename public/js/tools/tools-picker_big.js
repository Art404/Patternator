
function Iconcontroller(OBJ_ICON_ID,SIZE_W,SIZE_H,SIZES_WH,FUNCTIONCALLBACK){
			
			// CONSTANTS AUX
			var NAME_OBJECT_CONTROL=OBJ_ICON_ID;
			var NAME_FILE_INPUT=NAME_OBJECT_CONTROL+'_FILES_INPUT';
			var NAME_PREVIEW_CANVAS=NAME_OBJECT_CONTROL+'_CANVAS_PREVIEW';
			
			var NAME_TARGET_IMG='target';
			var NAME_POPUP_HTML='popup';
			var SIZE_W=SIZE_W;
			var SIZE_H=SIZE_H;
			var SIZES_WH=SIZES_WH;
		
		
			$( "#"+NAME_OBJECT_CONTROL).after( '<input  name="'+NAME_FILE_INPUT+'" style="display:none" id="'+NAME_FILE_INPUT+'" type="file" accept="image/jpeg,image/png,image/gif" />' );
			$( "#"+NAME_OBJECT_CONTROL).after( '<canvas id="'+NAME_PREVIEW_CANVAS+'" style="display:none"></canvas>' );
			$('#'+NAME_OBJECT_CONTROL).click(
			function(){
				$('#'+NAME_FILE_INPUT).val("");
				$('#'+NAME_FILE_INPUT).click();
			});
		
			$('#'+NAME_FILE_INPUT).change(function(e) {
				var file = e.target.files[0];
				ProcessImage(file,NAME_PREVIEW_CANVAS,NAME_TARGET_IMG,NAME_POPUP_HTML,SIZE_W,SIZE_H,SIZES_WH,FUNCTIONCALLBACK);
			});
			
		}
	    
		function modal(NAME_POPUP_HTML){
				$("#"+NAME_POPUP_HTML).modal({escapeClose: true,clickClose: true,showClose: true});
	    }
		
		//PROCESS AND RESIZE FUNCTION 
		function ProcessImage(file,NAME_PREVIEW_CANVAS,NAME_TARGET_IMG,NAME_POPUP_HTML,SIZE_W,SIZE_H,SIZES_WH,FUNCTIONCALLBACK){
		
			var NAME_PREVIEW_CANVAS=NAME_PREVIEW_CANVAS;
			var NAME_TARGET_IMG=NAME_TARGET_IMG;
			var NAME_POPUP_HTML=NAME_POPUP_HTML;
			var SIZE_W=SIZE_W;
			var SIZE_H=SIZE_H;
		
		    //RESIZING AND UPLOAD
			canvasResize(file, {
						width: 710,
						height: 470,
						crop: false,
						quality:100,
						rotate: 0,
						callback: function(data, width, height) {
									// resizing img
									var span = $('#'+NAME_TARGET_IMG).attr('src',data);
									// detect crop
									jcrop_obj= $('#'+NAME_TARGET_IMG).data('Jcrop');
									// show popup
									$("#"+NAME_POPUP_HTML).modal({
											escapeClose: true,
											clickClose: true,
											showClose: true
									});
									// si existe para cambiar el crop	
									if (jcrop_obj != null) {$('#'+NAME_TARGET_IMG).data('Jcrop').destroy()}
											
											if(SIZES_WH!=1){SIZES_WH=SIZE_W /SIZE_H;}
											else{SIZES_WH=0;}
											
											// crea el jcrop for image
											$('#'+NAME_TARGET_IMG).Jcrop({
												aspectRatio: SIZES_WH,
												onChange : updatePreview,
												onSelect : updatePreview,
												setSelect: [ 0, 0, SIZE_W, SIZE_H]
											});
									// update image canvas
									function updatePreview(c) {	
											if(parseInt(c.w) > 0) {
												var imageObj = $("#"+NAME_TARGET_IMG)[0];
												// Show image preview
												var canvas = $("#"+NAME_PREVIEW_CANVAS)[0];
												canvas.width  = SIZE_W;
												canvas.height = SIZE_H;
												var context = canvas.getContext("2d");						
													context.drawImage(imageObj, c.x, c.y, c.w, c.h, 0, 0, SIZE_W,SIZE_H);
												}
											if(FUNCTIONCALLBACK){FUNCTIONCALLBACK();}
									};
											
								}
  			});
		}
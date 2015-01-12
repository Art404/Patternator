
/******************************* variables *******************/
//Preparamos el render
var Render = new THREE.WebGLRenderer();
//El escenario
var Escenario = new THREE.Scene();
// la Figura 
var Figura;
var controls;
var Ancho=window.innerWidth-15;
var Alto=window.innerHeight-10;
var Angulo = 45;	
var Aspecto=Ancho/Alto;
var cerca=0.1;
var lejos=10000;
var model;
//La cámara
var Camara=new THREE.PerspectiveCamera(Angulo,Aspecto,cerca,lejos);
/******************************* inicio *******************/
function inicio(){
		//Tamaño del render(resultado)
		Render.setSize(Ancho,Alto);
		//Se agrega el render al documento html
		document.getElementById('render').appendChild(Render.domElement);
		//Acercamos la cámara en z es profundidad para ver el punto
		Camara.position.z=1500;
		//agregando la cámara al escenario
		Escenario.add(Camara);
		// Territorio 
		crear_plano();

		// agregamos todo el escenario y la cámara al render
		controls=new THREE.OrbitControls(Camara,Render.domElement);
}

function crear_plano(){
		var ambient = new THREE.AmbientLight( 0x101030 );
		Escenario.add( ambient );

		var directionalLight = new THREE.DirectionalLight( 0xffeedd );
		directionalLight.position.set( 0, 0, 1 );
		Escenario.add( directionalLight );
		
		// texture
		var manager = new THREE.LoadingManager();
		manager.onProgress = function ( item, loaded, total ) {
			console.log( item, loaded, total );
		};

		var texture = new THREE.Texture();
		var loader = new THREE.ImageLoader( manager );
		loader.load( 'assets/models/textures/UV_Grid_Sm.jpg', function ( image ) {
			texture.image = image;
			texture.needsUpdate = true;
		});

		// model
		var loader = new THREE.OBJLoader( manager );
		loader.load( 'assets/models/obj/male02/male02.obj', function ( object ) {
			object.traverse( function ( child ) {
				if ( child instanceof THREE.Mesh ) {
					child.material.map = texture;
				}
			});

			model = object;
			console.log(model);
		Escenario.add(model);
});



		//Geometría del plano
		// Geometria_plano=new THREE.PlaneGeometry(1000,1000,10,10);
		// //Textura
		// Textura_plano=new THREE.ImageUtils.loadTexture("cesped.jpg");
		// Textura_plano.wrapS=Textura_plano.wrapT=THREE.RepeatWrapping;
		// Textura_plano.repeat.set(10,10);
		// // Material y agregado la textura
		// Material_plano=new THREE.MeshBasicMaterial({map:Textura_plano,side:THREE.DoubleSide});
		// // El plano (Territorio)
		// Territorio=new THREE.Mesh(Geometria_plano,Material_plano);
		// Territorio.rotation.y=-0.5
		// Territorio.rotation.x=Math.PI/4;
		// Escenario.add(Territorio);
}
function animacion(){
		requestAnimationFrame(animacion);
		render_modelo();
}
function render_modelo(){
		controls.update();
		
		Render.render(Escenario,Camara);
}
/**************************llamado a las funciones ******************/
// load function
jQuery('#Ready').click(function() {
var	data_image_1=$('#img_front_CANVAS_PREVIEW')[0].toDataURL('image/png');

if($('#img_front_FILES_INPUT').val()!=''){
	model.traverse( function ( child ) {
		if ( child instanceof THREE.Mesh ) {
			child.material.map = new THREE.ImageUtils.loadTexture( data_image_1 );
		}
	});



	//Escenario.children[4].material.map = new THREE.ImageUtils.loadTexture( data_image_1 );				
}
});
inicio();
animacion();
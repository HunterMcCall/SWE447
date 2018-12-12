/*var gl = undefined;

function init() {
  var canvas = document.getElementById( "webgl-canvas" );

  gl = WebGLUtils.setupWebGL( canvas );

  if ( !gl ) {
    alert("Unable to setup WebGL");
    return;
  }

  gl.clearColor( 0.8, 0.8, 0.8, 1.0 );
  gl.enable( gl.DEPTH_TEST );
  
  render();
}*/


var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 200;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
keyLight.position.set(-100, 0, 100);

var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
fillLight.position.set(100, 0, 100);

var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
backLight.position.set(100, 0, -100).normalize();

scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);

var mtlLoader = new THREE.MTLLoader();
mtlLoader.load('grass.mtl', function (materials) {

    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    var vscale = 5;
    objLoader.load('tree.obj', function (object) { 
       object.scale.x = vscale;
       object.scale.y = vscale;
	   object.scale.z = vscale;

        scene.add(object);
        //object.position.y -= 60;


    });

});1

var mtlLoader2 = new THREE.MTLLoader();
mtlLoader2.load('appleTexture.mtl', function (materials) {

    materials.preload();

    var objLoader2 = new THREE.OBJLoader();
    objLoader2.setMaterials(materials);
    var vscale = .5;
    objLoader2.load('grass.obj', function (object) { 
       object.scale.x = vscale;
       object.scale.y = .1;
	   object.scale.z = vscale;
	   object.position.x = -10;
	   object.position.y = -10;
	   object.position.z = 65;

        scene.add(object);
        //object.position.y -= 60;


    });

});



var mtlLoader3 = new THREE.MTLLoader();
mtlLoader.load('testing.mtl', function (materials) {

    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    var ascale = .01;
    objLoader.load('apple.obj', function (object2) { 
       object2.scale.x = ascale;
       object2.scale.y = ascale;
	   object2.scale.z = ascale;
	   object2.position.x = 40;
	   object2.position.y = 45;
	   object2.position.z = -50;
	   object2.name = "object2";
       scene.add(object2);
        //object.position.y -= 60;


    });

});




mtlLoader.load('testing.mtl', function (materials) {
	materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    var ascale = .01;
    objLoader.load('apple.obj', function (object) { 
	
	   console.log(object);
	   var apple2 = object;
	   
       apple2.scale.x = ascale;
       apple2.scale.y = ascale;
	   apple2.scale.z = ascale;
	   apple2.position.x = 5;
	   apple2.position.y = 50;
	   apple2.position.z = 22;
	   apple2.rotation.x = 100;
	   apple2.name = "apple2";

       scene.add(apple2);

        //object.position.y -= 60;


    });

});
	
	
function animate() {

	// apple2.rotation.x = 5;
	if(scene.getObjectByName("apple2").scale.x < .2)
	{
		scene.getObjectByName("apple2").scale.x += .001;
		scene.getObjectByName("apple2").scale.y += .001;
		scene.getObjectByName("apple2").scale.z += .001;
	}
	else if (scene.getObjectByName("apple2").scale.x >= .2)
	{
		scene.getObjectByName("apple2").rotation.y -= 0.1;
		if(scene.getObjectByName("apple2").position.y > -2)
		{
			scene.getObjectByName("apple2").position.y -= 1;
			scene.getObjectByName("apple2").rotation.x += 0.05;
		}
		else if (scene.getObjectByName("apple2").position.y <= -2)
		{
			scene.getObjectByName("apple2").position.x += 1;
			if (scene.getObjectByName("apple2").position.x >= 300)
			{
				scene.getObjectByName("apple2").position.x = 5;
				scene.getObjectByName("apple2").position.y = 50;
				scene.getObjectByName("apple2").position.z = 22;
				scene.getObjectByName("apple2").rotation.x = 100;
				scene.getObjectByName("apple2").rotation.y = 0;
				scene.getObjectByName("apple2").rotation.z = 0;
				scene.getObjectByName("apple2").scale.x = .01;
				scene.getObjectByName("apple2").scale.y = .01;
				scene.getObjectByName("apple2").scale.z = .01;
				
			}
		}
	}
	
	if(scene.getObjectByName("object2").scale.x < .2)
	{
		scene.getObjectByName("object2").scale.x += .00075;
		scene.getObjectByName("object2").scale.y += .00075;
		scene.getObjectByName("object2").scale.z += .00075;
	}
	else if (scene.getObjectByName("object2").scale.x >= .2)
	{
		scene.getObjectByName("object2").rotation.y += 0.05;
		if(scene.getObjectByName("object2").position.y > -2)
		{
			scene.getObjectByName("object2").position.y -= 1;
			scene.getObjectByName("object2").rotation.x += 0.05;
		}
		else if (scene.getObjectByName("object2").position.y <= -2)
		{
			scene.getObjectByName("object2").position.x -= .5;
			if (scene.getObjectByName("object2").position.x <= -300)
			{
				scene.getObjectByName("object2").position.x = 40;
				scene.getObjectByName("object2").position.y = 45;
				scene.getObjectByName("object2").position.z = -50;
				scene.getObjectByName("object2").rotation.x = 100;
				scene.getObjectByName("object2").rotation.y = 0;
				scene.getObjectByName("object2").rotation.z = 0;
				scene.getObjectByName("object2").scale.x = .01;
				scene.getObjectByName("object2").scale.y = .01;
				scene.getObjectByName("object2").scale.z = .01;
				
			}
		}
	}
	
	requestAnimationFrame( animate );
	controls.update();
	renderer.render(scene, camera);
};


/*
function render() {
  gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT );
  animate();
}*/
/*
window.onload = init();*/
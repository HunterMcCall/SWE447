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
mtlLoader.load('testing.mtl', function (materials) {

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

});


var mtlLoader = new THREE.MTLLoader();
mtlLoader.load('testing.mtl', function (materials) {

    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    var ascale = .2;
    objLoader.load('apple.obj', function (object2) { 
       object2.scale.x = ascale;
       object2.scale.y = ascale;
	   object2.scale.z = ascale;
	   object2.position.x = 40;
	   object2.position.y = 38;
	   object2.position.z = -50;
       scene.add(object2);
        //object.position.y -= 60;


    });

});



var mtlLoader = new THREE.MTLLoader();
mtlLoader.load('testing.mtl', function (materials) {
	materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    var ascale = .2;
    objLoader.load('apple.obj', function (object) { 
	
       object.scale.x = ascale;
       object.scale.y = ascale;
	   object.scale.z = ascale;
	   object.position.x = 5;
	   object.position.y = 40;
	   object.position.z = 22;
	   object.rotation.x = 100;
	   apple2 = object;
       scene.add(apple2);

        //object.position.y -= 60;


    });

});
	


var animate = function () {
	
	
	//objLoader.rotation.x = 5;
	
	requestAnimationFrame( animate );
	controls.update();
	renderer.render(scene, camera);
};

animate();

<script>
var camera, scene, renderer;
var mesh;

init();
animate();

function init() {
	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	
	var container =  $('#kubus');
	container.append(renderer.domElement);	
	// container.appendChild( renderer.domElement );
	//
	var w=window.innerWidth;
	var h=window.innerHeight;
	camera = new THREE.PerspectiveCamera( 70, w/h, 1, 1000 );
	camera.position.z = 1000;
	camera.position.y = -200;
	camera.position.x = +w/2;	
	
	scene = new THREE.Scene();
    var d=100;
	var geometry = new THREE.CubeGeometry( d, d, d );
	//crate.gif
	var texture = 
	  THREE.ImageUtils.loadTexture( 'plaatjes/beeld.jpg' );
	var material = new THREE.MeshBasicMaterial( { map: texture } );

	mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );
	window.addEventListener( 'resize', onWindowResize, false );
}

function onWindowResize() {
	var w=window.innerWidth;
	camera.aspect = w / window.innerHeight;
	camera.updateProjectionMatrix();
	camera.position.x = +w/3;
	renderer.setSize( window.innerWidth, window.innerHeight );
}
var teller=0;
function animate() {
	teller++;
	if (teller%100==0)
	   console.log("turning.."+(teller/100) );
	requestAnimationFrame( animate );
	mesh.rotation.x += 0.005;
	mesh.rotation.y += 0.01;
	renderer.render( scene, camera );
}
</script>

// JavaScript Document
/*********************************************************************/

function toonKubus(){
	var material;
	var loader = new THREE.TextureLoader();
// load a resource
loader.load(
	// resource URL
	'images/marjan.jpg',
	// Function when resource is loaded
	function ( texture ) {
		// do something with the texture
		    material = new THREE.MeshBasicMaterial( {
			map: texture
		 } );
	},
	// Function called when download progresses
	function ( xhr ) {
		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
	},
	// Function called when download errors
	function ( xhr ) {
		console.log( 'An error happened' );
	}
);	 	
	//var texture = THREE.ImageUtils.loadTexture( 'images/marjan.jpg' );

	var geometry = new THREE.BoxGeometry( 100, 100, 100 );
//	var material = new THREE.MeshBasicMaterial( { map: texture } );
//
	mesh = new THREE.Mesh( geometry, material );

	mesh.position.y = 0.1*window.innerHeight; //+ 80 is omhoog;  
	mesh.position.x = -0.8*window.innerWidth;
	scene.add( mesh );
		 controls = new THREE.DeviceOrientationControls( mesh);		
		 // Create controls for mobile.  addListeners
          controls.connect();
          controls.update(); 		
}
/**************************************************************/
/* http://www.webdesignermagazine.nl/workshop/maak-een-kompas-met-html5
document.addEventListener("DOMContentLoaded", function(event) {
 
  if (window.DeviceOrientationEvent) {
    document.getElementById("notice").innerHTML = "Gaaf! De DeviceOrientationEvent API word door dit toestel ondersteund.";
  } else {
    document.getElementById("notice").innerHTML = "Helaas. De DeviceOrientationEvent API word niet door dit toestel ondersteund."
  };
 */

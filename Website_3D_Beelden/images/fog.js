var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
camera.position.y = 2;

// Init the object and fog here
var myfog = { value: .5 }
scene.fog = new THREE.FogExp2(0xffffff, myfog.value);


var geometry = new THREE.BoxGeometry( 2, 2, 2 );

var texture = THREE.ImageUtils.loadTexture( 'images/marjan.jpg' );
var material = new THREE.MeshBasicMaterial( { map: texture } );

var mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );   


var renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x555555);
document.body.appendChild(renderer.domElement);

function render() {
  renderer.render(scene, camera);
}

function animate() {
  requestAnimationFrame(animate);

  mesh.rotation.x += 0.005;
  mesh.rotation.y += 0.01;  
  render();
}

animate();

// This animates the fog
gsap.to(myfog, {
  duration: 20,
  value: 0.002, // The end value
  onUpdate: function() {
    // New fog with current myfog value
    scene.fog = new THREE.FogExp2(0x999999, myfog.value);
  },
  // These just infinitely repeat the animation
  yoyo: true,
  repeat: -1,
});


// Regelt belichting.
var intens = 0.5;   // 0.7
function maakBelichting(){	
     // intensiteit door kleur. 
     var ambient = new THREE.AmbientLight( 0x404040 );
     scene.add( ambient );
	  
	var directionalLight1 = 
	new THREE.DirectionalLight(0xffffff, intens );
	directionalLight1.position.set(0,-1,10);  // + links,  omhoog -, na voren
	directionalLight1.position.normalize();
    scene.add( directionalLight1 );
	
	var directionalLight2 = 
	new THREE.DirectionalLight(0xffffff, intens );
	directionalLight2.position.set(-1,1,1); 
	directionalLight2.position.normalize();
    scene.add( directionalLight2 );	
}
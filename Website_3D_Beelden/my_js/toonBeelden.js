// JavaScript Document

/**********  Begin programma  ******************/
function startProgramma()
{
// eerst scene opbouwen:		
	init(); 
	maakBelichting();
	maakEvents();
	maakNavigatorEvents();
    toon_Model_Tekst();	
	laadObject(modellen[teller]);	// ladenObjecten.js		
		
	if (webgl)
		renderer = new THREE.WebGLRenderer();
	else
		renderer = new THREE.CanvasRenderer();

	renderer.setSize( window.innerWidth, window.innerHeight );

	container.appendChild( renderer.domElement );	
	animate();	
}


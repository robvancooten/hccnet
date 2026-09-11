// JavaScript Document
function toon_Model_Tekst(){
 		verwijderenNav(); 		
		if (teller==-1)
		{
		// random model starten / kiezen:
		var aantal=modellen.length;
		// alert("aantal modellen: " + aantal);
		teller=Math.random() * aantal; 
		teller=Math.floor(teller);
		}	
		var beeldnaam=modellen[teller];
		var aantal = modellen.length; 
		beeldnaam = beeldnaam.split('/');
		if (webgl)
			tekst=+(teller+1) +"/"+aantal+ ": " +
			           beeldnaam[2] ;
		else
			tekst="Traag compressed beeld: " +beeldnaam[2] ;		
/******************************************************************************/
		toon3DTekst("wait, model loading..");				
}
/****************************************************************************/	
  
function toon3DTekst(t){            
				// Get text from hash

				var theText = "Hello three.js!";
				theText = t; 

				var hash = document.location.hash.substr( 1 );

				if ( hash.length !== 0 ) {

					theText = hash;

				}

				var text3d = new THREE.TextGeometry( theText, {

					size: 20,
					height: 10,
					curveSegments: 2,
					font: "helvetiker"

				});

				text3d.computeBoundingBox();
				var centerOffset = 
				     -0.5 * ( text3d.boundingBox.max.x - text3d.boundingBox.min.x );

				var material = new THREE.MeshFaceMaterial( [
				new THREE.MeshBasicMaterial( { color: 0x333353, overdraw: 0.5 } ),
				new THREE.MeshBasicMaterial( { color: 0x111131, overdraw: 0.5 } )
				] );

				text = new THREE.Mesh( text3d, material );
				text.position.x = centerOffset;
				text.position.y = -200;
				text.position.z = +200;
				
				text.rotation.z = 0.0;
				text.rotation.y = Math.PI * 0.0;
				text.rotation.x = -Math.PI * 0.001;				
				// omzetten naar gegroepeerd object: 				
				if (tekstObject!=null)
					  scene.remove(tekstObject);
				tekstObject=null;
				tekstObject = new THREE.Group();
				tekstObject.add( text );
				scene.add( tekstObject);				
}
// JavaScript Document
function laadColladae(m){
	var model=m; 
	var schaal=1;
	geladen=false;
	// Alles klaar, daarna pas dae laden:
	var loader = new THREE.ColladaLoader();
	// laat dit eens weg:
	loader.options.convertUpAxis = true;
	/*
	loader.addProgressListener(function(e) 
	   { console.log(e.resource.getName()); });	
	  */ 		
	loader.load( model, 
		function colladaReady( collada ) 
		{
		// Mesh is geladen: 
		// renderer.deallocateTexture( texture )
		// renderer.deallocateObject(model[0])
	     if (dae != null)
	         scene.remove( dae );	
		dae = collada.scene;
        /* truc: 
		 dae.traverse( function(node) {
				if (node instanceof THREE.Mesh) {
						scene.add(node);
				}
		});
		*/ 
		// var skin = collada.skins[ 0 ];
						
		if (webgl)
		    schaal=15;
		else
			schaal=15;		 				
		dae.scale.x = dae.scale.y = dae.scale.z =schaal;
		dae.position.x=0;
		dae.position.y=+200;
		dae.position.z=0;	
		dae.rotation.x = Math.PI/2; 

		if (teller==0) // aardbolman
		    {   
			    if (webgl) schaal=1.30; //1.3;
				else schaal=1.3; 
				dae.scale.x = dae.scale.x*schaal - Math.PI/2;
				dae.scale.y = -dae.scale.y*schaal - Math.PI/2;
				dae.scale.z = -dae.scale.z*schaal;
				dae.position.y=+150;
				//intens=0;
				//maakBelichting();					
			}
		if (teller==1) // groenenVerenLady normaal
		    {
				dae.position.y=+300;
				//intens=2.5;
				//maakBelichting();					
			}						
		if (teller==2) //ladyHead
		    {   
			 if (webgl)
			     schaal = 30;
			 else
				schaal = 30;
				dae.scale.x = schaal;
				dae.scale.y = -schaal;
				dae.scale.z = -schaal;
				//intens=1.5;
				//maakBelichting();					
			}							
		if (teller==5) // bladerpop
		    {  // 2 keer vergroten:
			 if (webgl)
			     schaal = 30;
			 else
				schaal = 10;			
				dae.scale.x = schaal;
				dae.scale.y = schaal;
				dae.scale.z = 30;	
			}					
		dae.updateMatrix();	
		// Add the COLLADA
		scene.add( dae );		
		// animatie dae mag beginnen:
		geladen=true;	
		console.log("Status geladen is: " + geladen);
		// jQuery("#next").stop().show();
		// jQuery("#prev").stop().show();			
		jQuery("#progressBalk").css({width: "100px"});		
		// alert("prev next show");															
	}
	,
	// https://github.com/mrdoob/three.js/commit/298afecf8049c9a1870d35069d468812cc2cacc0
	
	function colladaProgres( collada ) 
	{
	// alert("Progress"); 	
	var w=(collada.loaded / collada.total)*100;
	w = Math.floor(w)+"%";
    if (w=="100%")
	{
	var total=collada.total/(1000*1000);	
	console.log(".........totaal: "+ total + "MBytes");	
	}
	else
	{
	console.log("..progress" + w +
				" / loaded: " + collada.loaded + "Bytes.");
	} 
	
	jQuery("#progressBalk").css({width: w});		
	}
	
	);  // einde load.
}
	

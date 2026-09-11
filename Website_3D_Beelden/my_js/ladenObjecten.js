// JavaScript Document
//http://mrdoob.github.io/three.js/examples/#webgl_loader_obj_mtl
function laadObject(m)
{	
//https://www.dropbox.com/s/1ahcr3l6qrss243/1.jpg?dl=0 
		  // m="https://www.dropbox.com/s/1ahcr3l6qrss243/aardbolman/aardbolman/";
		  var model = m;
		  geladen = false;
		  nieuwObj = true;

		  if (object!= null)
			  { 
				 scene.remove( object );
				 object=null;	
			  }
		  var manager = new THREE.LoadingManager();		  	 	 
		  manager.onProgress = function( item, loaded, total ) 
		  {
			  console.log("Geladen objecten: "+  item );
			  if ( loaded==1)
			  	console.log("Geladen texture.");			  
			//  else 
			//  	console.log("Geladen object.");			  				
			 //  alert("geladen");
			   // + " 1 of 0: " +loaded + " kbytes: " +total );
		  };
/***********************************************************************/		  
		var onProgress = function ( xhr ) {
			if ( xhr.lengthComputable ) {
				var percentComplete = xhr.loaded / xhr.total * 100;
			//	console.log( Math.round(percentComplete, 2) + '% downloaded' );
			}
		};

		var onError = function ( xhr ) {
			console.log("O o, laad error.... "); 
		};
/***********************************************************************/		  		  
		  
		  
		  
/**************************************************************************/
          // texture en object laden: 
		  var texture = new THREE.Texture();
		  var loader = new THREE.ImageLoader( manager );
		  // loader.load( 'modellen/bladerPop/bladerpop_tex_0.jpg', 	
		  loader.load( model + '.jpg', 	
		  function ( image ) {
			  texture.image = image;
			  texture.needsUpdate = true;					
		  } );
/**************************************************************************/
		  // model
		  var loader = new THREE.OBJLoader( manager );		  
		  loader.load( model+'.obj', 
		  function ( obj ) {
			  object=obj;
			  object.traverse( function ( child ) {
				  if ( child instanceof THREE.Mesh ) {
					  child.material.map = texture;
				  	  }
			  		} 			  
			  );  // end traverse								 
			  // alert("y is: " + object.position.y); 				
      schaal=15;	
	  object.position.y = -0; //+ 80 is omhoog;  
	  object.position.z =  -1500;  	  
	  object.scale.x = object.scale.x*schaal;
	  object.scale.y = object.scale.y*schaal;
	  object.scale.z = object.scale.z*schaal;
	  // object.rotation.x-=Math.PI/2;  
	  // object.rotation.z=-Math.PI/2; 	
	  object.updateMatrix();																
	  scene.add( object );	    	  
	  geladen=true;
	}, onProgress, onError ); 
	// einde loader.load(..............
} // einde laadObject.

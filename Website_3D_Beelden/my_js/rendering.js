// JavaScript Document
function tweeenKomNaarVoor(doel){
		 var doelZ=doel; 
		 var distance = doelZ - object.position.z; 
		 var stapgrootte=50;
		object.position.z += distance / stapgrootte; 	

		if (object.position.z > doelZ -2 && object.position.z < doelZ -1)
		    { 
			r=+1;
			toon3DTekst(tekst);	
		    tekstObject.rotation.y+=0.01;			
			}
		//else
		  //  tekstObject.rotation.y +=0.01
		 tekstObject.rotation.y +=0.01;		
}
function tweeenGaNaarAchter(doel){
		 var doelZ=doel;   // -1500 
		 var distance = doelZ - object.position.z; 
		 var stapgrootte=50;
		object.position.z += distance / stapgrootte; 	
			//if (debug) 
		    	console.log("object.position.z " + object.position.z );
		if (object.position.z < doelZ*3/4 )				
			{ 
		    // alert("komt nieuw object aan... ");
			r=0;
			toon3DTekst(tekst);	
			tekstObject.rotation.y=0;
			toonVolgende();
			}
}
function animate() {
		requestAnimationFrame( animate );
	render();
//	if (!webgl)
//		stats.update();
}

var r=0;  // rotatie-richtig +1 of -1 
var DOELZ=-100; 

function render() {		
	// dynamisch schalen: 
	camera.position.z= 1000 + 0.5*(mouseX-mouseXOnMouseDown);	
	// kantelen:
	camera.position.y =  mouseY - mouseXOnMouseDown;

	// camera wel blijven richten, daarom kantelt die:
	camera.lookAt( scene.position );

// controleer of object geladen is, anders tekst roteren:
    if (tekstObject!=null && !geladen)
			{	      
		     tekstObject.rotation.y+=0.1;		 
			}
	else if (tekstObject!=null && geladen)
			{				
	        tekstObject.rotation.z=0.0;
			}

	if (nieuwObj && geladen)			   
		  {
		  r=0;	  
		  nieuwObj=false;
		  navTonen();  	  
		  }
	  
if (geladen && webgl)
   		{		
		 // heen en weer draaien:
		 if (object.rotation.y>Math.PI/3)   // 60 graden 
		 	r=-1;
		 else if (object.rotation.y<-Math.PI/3)
		  	{
				r=+1; 
				// alert("r=" + r); 
				if (!webgl)
				    { 
					teller++;
					if (teller==modellen.length)
					     teller=0;	
				    toon_Model_Tekst();
					}
			}
				
			//starten object.rotation y as: 		
		    if (webgl && object.position.z >DOELZ-10 && object!=null)
				{
				object.rotation.y = object.rotation.y + 0.01*r;
				 tekstObject.rotation.y=0;
			    // console.log("rotation.y: " + Math.floor(object.rotation.y*100)/100);
				}
			if (!webgl && object!=null)
			{
				object.rotation.y = object.rotation.y + 0.3*r;
			    // console.log("rotation.y: " + Math.floor(object.rotation.y*100)/100);
			}				
			 // in het zicht brengen en verwijderen via een tween:
		  if (r==0)
		 	tweeenKomNaarVoor(DOELZ);
		 			  
		  if (object.rotation.y>-Math.PI/30 && object.rotation.y<0 
		        &&r>0 && playmode=="on")				
		 	{
				// verdwijn=true; 
			    tweeenGaNaarAchter(-1500);					
				// alert("ga naar achter");
			}	
		}
	renderer.render( scene, camera );
}
/**********************************************/


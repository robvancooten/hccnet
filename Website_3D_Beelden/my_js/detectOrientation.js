// JavaScript Document
function getOrientation(event)
{
	 // alert("ik luister");  
     var alpha=Math.round(event.alpha*Math.PI/180);
     var beta=Math.round(event.beta*Math.PI/180);
     var gamma=Math.round(event.gamma*Math.PI/180);
    // alert("alpha is: " + alpha);
	 if (alpha==beta==gamma==0) // laptop alpha is direct 0. 
	     {
		    alert("Sorry, your browser doesn't support Device Orientation"); 
			 //  deviceorientation=true;
			deviceorientation=false;
	  		autobegin=true;
			deviceteller=0; 
			console.log("orientation sensor ziet 0, teller: " + deviceteller); 
			// window.removeEventListener("deviceorientation", deviceOrientationListener);
		 }
	  else 
	  {
	   alert("Okay your browser support Device Orientation"); 		  
	   deviceteller--;
	   console.log("orientation sensor ziet iets, teller: " + deviceteller); 
	   autobegin=false;
	   deviceorientation=true;	  
	  }
}	  
/********************************************************	  
	  if (deviceteller<-10)
	        { 
			   autobegin=false;
		       deviceorientation=true;
	  		}
	
	if (deviceteller==0)
	{
//  window.removeEventListener("deviceorientation", deviceOrientationListener);
	  deviceorientation=false;
	  autobegin=true;
	  console.log("Sorry, your browser doesn't support Device Orientation" 
	  			   + deviceorientation);  
	}
********************************************/	


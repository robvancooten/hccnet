// JavaScript Document Events
$(document).ready(function(e) {
	maakNavigator();    
});

function maakNavigator(){
	// alert(" nav gemaakt ");
	jQuery("#next").click(function(e) {
		// alert("klik");
		nummer++;	
				//	if (mesh!= null)
	         		{ 
					   scene.remove( mesh );
				       mesh=null;	
					}
		init();
		animate();		
        console.log("next is: " + nummer);		

    });
	jQuery("#prev").click(function(e) {
		// alert("klik");
		nummer--;	
		init();	
		animate();			
        console.log("prev is: " + nummer);		;
    });	

	
}
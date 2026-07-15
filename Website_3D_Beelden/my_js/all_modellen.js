let modellen = new Array();

function leesModellen() {

	/* array vullen met modelnamen */
	var tel = 0;

//	modellen[tel++] = 'sadLady';	
//	modellen[tel++] = 'sadLady';	

	modellen[tel++] = 'bladerKop';	
	modellen[tel++] = 'koppie';	

	modellen[tel++] = 'geinVogel1';		
	modellen[tel++] = 'whiteHead';	   // render in expo was heel traag....., ff opnieuw. MeshLab texture gezet. 
	modellen[tel++] = 'pinkelEye';	    // render in expo was heel traag....., ff opnieuw. 

	modellen[tel++] = 'kiekeboeBird';	
	modellen[tel++]= 'knolletje';	 
	modellen[tel++]= 'powertexLady';	
	modellen[tel++] = 'jolyHead';  
	modellen[tel++]= 'dumpy';    // te donker. 	Kleuren vreemd.

	modellen[tel++] = 'boomVrouw';
	modellen[tel++] = 'greenLady';     //  te traag. Nu goed, MeshLab. 
	modellen[tel++] = 'meermin';     // te donker. 	

	modellen[tel++] = 'aardBolMan';
	modellen[tel++] = 'childFish';
	modellen[tel++] = 'wormWoman';	
	modellen[tel++] = 'sloffie';
	modellen[tel++] = 'ladyHead';
	modellen[tel++] = 'noefy';
	
    modellen[tel++] = 'nuffy';	
	modellen[tel++] = 'takkeWijfie';		
	modellen[tel++] = 'goldenGirlOnBall';  // 
	modellen[tel++] = 'blauweElf';
	modellen[tel++] = 'bladerina';	// helderheid contrast 10 iets te veel. 
//	modellen[tel++]= 'krakerigeKop';    // niet mooi
//	modellen[tel++] = 'sadLady';	    // traag en niet mooi. 
	//	modellen[tel++] = 'groteKop';     // te donker, nu weer goed, zelfde jpg. 	


	/* 
	// herstelt naar 1 texture via highresolutie:
	// modellen[tel++]= pad + 'Carousel/Carousel';			

	// eigen gekleurde textuur: 
	// modellen[tel++]= pad + 'whiteHead2/whiteHead2';		
	*/

}
export { leesModellen, modellen };

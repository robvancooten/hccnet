// jQuery navigator: 
function menuEffect(){
	jQuery("#menu").fadeOut();
//	jQuery("#menu").fadeTo(0, 0.7);
	jQuery("#menu").fadeIn(4000 * 1);
//	jQuery("#menu").fadeTo("slow", 1.0);
/*
		  $("#menu").animate({
			left: '50%',
			opacity: '0.5',
			width: '30%'
		  });
	
		  $("#menu").animate({
			left: '0px',
			opacity: '1.0',
			width: '100%'
		  });		  */  
}
function navTonen() {
	//if (playmode == "off") {
	if (1 == 1) {
		jQuery("#next").stop().fadeIn(2 * 1000);
		jQuery("#prev").stop().fadeIn(2 * 1000);
	}
}
function verwijderenNav() {
	jQuery("#prev").stop().fadeOut(2 * 1000);
	jQuery("#next").stop().fadeOut(2 * 1000);
	// jQuery("#progressBalk").css("width", "300px");	
}

function toonVolgende() {
	teller++;
	aantal = modellen.length;
	// alert(aantal);
	if (teller > aantal - 1)
		teller = 0;
	// teller = teller%aantal; 
	if (debug)
		console.log("next is: " + teller);
	// tekst van het model ophalen en tonen:
	// verdwijn=true; 	
	toon_Model_Tekst();
	laadObject(modellen[teller]);

}
function toonVorige() {
	teller--;
	var aantal = modellen.length;
	if (teller < 0)
		teller = aantal - 1;
	if (debug)
		console.log("prev is: " + teller);
	toon_Model_Tekst();
	laadObject(modellen[teller]);
}
function togglePlaymode() {
	if (playmode == "off") {
		playmode = "on";

		// alert("nav automatisch");

		var t = "";

		t = " Automatische show.";
		stijl = "color:black; text-align:center; margin-left: auto; margin-right: auto;width: 50%";
		t = t + '<div id="toggle" style= ' + stijl + '><i class="fa fa-play-circle-o"></i>';
		t = t + ' Press here voor navigator. </div>';
		//	t = t + '<i class="fa fa-pause-circle-o"></i>';


		jQuery("#menu").html(leesMenuTekst() + t);
		jQuery("#menu").css({ "backgroundColor": "silver" });   // silver
		menuEffect();
		// verwijderenNav();
		navTonen();
	}
	else {
		playmode = "off";
		navTonen();
		//  alert("nav met pijltjes"); 		
		var t = "";
		t = t + '<i class="fa fa-play-circle-o"></i> Navigeer zelf. ';
		stijl = "color:black; text-align:center; margin-left: auto; margin-right: auto;width: 50%";
		t = t + '<div id="toggle" style= ' + stijl + '>';
		t = t + ' Press here voor autorun. </div> ';
		//	t = t + '<i class="fa fa-pause-circle-o"></i>';


		pijlLinks = maakPijltjes("links");
		pijlRechts = maakPijltjes("rechts");

		jQuery("#menu").html(leesMenuTekst() + pijlLinks + t + pijlRechts);
		jQuery("#menu").css({ "backgroundColor": "silver" });   // white
		menuEffect()
		navTonen();
	}

	if (debug) alert(" playmode " + playmode);
	maakNavigatorEvents();
}




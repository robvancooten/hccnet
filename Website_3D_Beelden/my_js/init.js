// JavaScript Document
var debug = false; // false;  // false; 

var webgl = false;
var container, stats;
var camera, scene, renderer;
var controls;  //  tilting camera. 
var deviceOrientation = false;
// var mesh; 
var object;
var geladen = false;
var nieuwObj = false;
var mouseX = 0, mouseY = 0;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
var targetRotation = 0;
var targetRotationOnMouseDown = 0;
var mouseXOnMouseDown = 0;
var mouseYOnMouseDown = 0;

var pad = "./modellen/";
var modellen = new Array();
var aantal;  // aantal modellen.
// var info; 
var tekstObject;
let menu;
var tekst = "";
var menu_tekst;
var teller = -1; // model teller;
let playmode = "on";
var pijlLinks;
var pijlRechts;

// alert("start init");
// alert("menu_tekst" + menu_tekst);

function isTouchDevice() {
	var el = document.createElement('div');
	el.setAttribute('ongesturestart', 'return;');
	if (typeof el.ongesturestart == "function") {
		return true;
	} else {
		return false
	}
}

function checkWebGL() {
	if (Detector.webgl) {
		console.log("Rendering: WebGL.");
		webgl = true;
		if (debug)
			alert("Perfect, WebGL Browser gedetecteerd.");
	}
	else {
		console.log("Rendering: Canvas.");
		webgl = false;
		if (debug)
			alert("Helaas, GEEN WebGL Browser.");
	}
return webgl;
}   // einde checkWebGL 

function maakPijltjes(teken) {
	let pijl;
	if (teken == "links")
		pijl = ' <img src="images/pijlPrev.jpg" id="prev" title="vorige beeld" /> ';
	if (teken == "rechts")
		pijl = ' <img src="images/pijlNext.jpg" id="next" title="volgend beeld" /> ';
	return pijl;
}  // einde maakPijltjes(); 

function maakTekstInfo() {
	t = "<p>";
	// alert(" maakTekst werkt weer");
	t = " " + aantal + " Keramieke <b>B</b>eelden van marjan.<br/>";
	if (isTouchDevice()) {
		t = t + "Use finger ";
		if (debug) alert('Touch Screen');
	}
	else {
		t = t + "Press left mouse button ";

		if (debug) alert('No Touch Screen');
	}
	t = t + "in the field to tilt model.";
	let stijl = "color:black; text-align:center; margin-left: auto; margin-right: auto; width:50px ";
	t = t + '<div id="toggle" style= ' + stijl + '><i class="fa fa-play-circle-o"></i>';
	t = t + ' Press here: autorun or navigator. ';
	t = t + '<i class="fa fa-pause-circle-o"></i> </div> ';


	// mobiel testen: zet webgl=false;
	if (webgl) {
		pijlLinks = maakPijltjes("links");
		pijlRechts = maakPijltjes("rechts");
		//	pijl="<h1>Hello</h1>" ; 

		menu = document.getElementById("menu");
		jQuery("#menu").html(leesMenuTekst() + pijlLinks + t + pijlRechts);
		//jQuery("#menu").html(pijl );
		//menu.innerHTML = pijl; ;

		jQuery("#menu").css({ "backgroundColor": "silver" });
		
		kleurActiveLink();  
		
		// alert("webgl staat aan");
		// togglePlaymode();
		menuEffect();
		
		maakNavigatorEvents();
	}
	else {
		menu.innerHTML = "" + aantal + " Compressed beelden van marjan.";
		jQuery("body").css({ "backgroundColor": "blue" });
	}
}   // einde maakTekstInfo(); 


function init() {
	playmode = "off";
	// html bouwen: 
	// afhankelijk webgl: 
	leesMenuTekst();   // tekst voor hoofdmenu 
	leesModellen();   // namen van modellen ophalen.
	aantal = modellen.length;
	// alert("aantal beelden"+ aantal);
	webgl = checkWebGL();
	if (debug) alert(" webgl: " + webgl);
	if (!Detector.webgl)
		Detector.addGetWebGLMessage();

	maakTekstInfo();
	maakNavigatorEvents();   // events

	container = document.getElementById("container");
	scene = new THREE.Scene();
	var aspect = window.innerWidth / window.innerHeight;
	camera = new THREE.PerspectiveCamera(45, aspect, 1, 2000);  // near, far 


	camera.position.set(0, 0, 1000);
	scene.add(camera);

	/***************************************************************/
	// CPU statistieken, links boven:
	if (debug) {
		stats = new Stats();
		stats.domElement.style.position = 'absolute';
		stats.domElement.style.top = '200px';
		container.appendChild(stats.domElement);
	}
	/***************************************************************/
}

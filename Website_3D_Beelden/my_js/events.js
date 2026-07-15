// JavaScript Document Events
function onDocumentMouseDown(event) {
	event.preventDefault();
	document.addEventListener('mousemove', onMouseMove, false);
	document.addEventListener('mouseup', onDocumentMouseUp, false);
}

function onDocumentMouseUp(event) {
	event.preventDefault();
	document.removeEventListener('mousemove', onMouseMove, false);
	document.removeEventListener('mouseup', onDocumentMouseUp, false);
}

function onMouseMove(event) {
	// netjes muis positie tussen + en - 
	mouseX = (event.clientX - windowHalfX);
	mouseX = Math.abs(mouseX) - windowHalfX;
	mouseY = (event.clientY);
	//mouseY=Math.abs(mouseY) - windowHalfY ;
	// mouseY = ( event.clientY - windowHalfY ) / 2;
}

function onWindowResize() {
	if (debug) alert("onWindowResize()");
	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);

}

function onDocumentTouchStart(event) {
	//alert("touch scherm"); 
	if (event.touches.length == 1) {
		// event.preventDefault();
		mouseXOnMouseDown = event.touches[0].pageX - windowHalfX;
		mouseYOnMouseDown = event.touches[0].pageY - windowHalfY;
		// targetRotationOnMouseDown = targetRotation;
	}
}

function onDocumentTouchMove(event) {
	if (event.touches.length == 1) {
		event.preventDefault();
		mouseX = event.touches[0].pageX - windowHalfX;
		mouseY = event.touches[0].pageY - windowHalfY;
		// alert(mouseX);
		//targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.05;
	}
}

function maakEvents() {
	window.addEventListener('resize', onWindowResize, false);
	// document.addEventListener( 'mousemove', onMouseMove, false );	
	document.addEventListener('mousedown', onDocumentMouseDown, false);
	document.addEventListener('touchstart', onDocumentTouchStart, true);
	document.addEventListener('touchmove', onDocumentTouchMove, false);
}

//	maakNavigator();	
function maakNavigatorEvents() {
	jQuery("#toggle").click(function (e) {
		e.stopImmediatePropagation();
		//	alert(e+"TOGGLE");
		togglePlaymode();
	});
	jQuery("#next").click(function (e) {
		e.stopImmediatePropagation();
		//	alert("next, toggle");		
		toonVolgende();
	});
	jQuery("#prev").click(function (e) {
		e.stopImmediatePropagation();
		toonVorige();
	});
}


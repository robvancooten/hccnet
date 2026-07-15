
var element;
/*
Mozilla Proposal	Chrome/Safari	Firefox	 W3C Proposal	 
Function
.requestFullScreen()	.webkitRequestFullScreen()	.mozRequestFullScreen()	.requestFullscreen()	
Start request to make an element fullscreen
.cancelFullScreen()	.webkitCancelFullScreen()	.mozCancelFullScreen()	.exitFullscreen()

*/ 
/*
var elem = document.getElementById("root");
req = elem.requestFullScreen || elem.webkitRequestFullScreen || elem.mozRequestFullScreen;
req.call(elem);
*/

function goFullscreen() {
    // Get the element that we want to take into fullscreen mode
    element = document.getElementById("root");

    if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } 
	else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
      }
     // IE werkt:
	else if (element.msRequestFullscreen){
	  element.msRequestFullscreen(); 
	}  
   // fullscreen mode!
}

function resetFullScreen(){
	// exit full-screen
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
	} else if (document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	} else if (document.msExitFullscreen) {
		document.msExitFullscreen();
	}

 	
}
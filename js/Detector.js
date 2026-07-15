/**
 * @author alteredq / http://alteredqualia.com/
 * @author mr.doob / http://mrdoob.com/
 */


 function webgl_support() {
	// first create a canvas element
	var testCanvas = document.createElement("canvas");
	// and from that canvas get the webgl context
	var gl = null;

	// if exceptions are thrown, indicates webgl is null
	try {
		gl = testCanvas.getContext("webgl");
	} catch (x) {
		gl = null;
	}

	// if still null try experimental
	if (gl == null) {
		try {
			gl = testCanvas.getContext("experimental-webgl");
		} catch (x) {
			gl = null;
		}

	}
	// if webgl is all good return true;
	if (gl) {
		return true;
	} else {
		return false;
	}
}


 function Wwebgl_support() {
	try {
		var canvas = document.createElement('canvas');
		return !!window.WebGLRenderingContext &&
			(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
	} catch (e) {
		return false;
	}
};


Detector = {

	canvas: !! window.CanvasRenderingContext2D,
	webgl: ( function () { try { return !! window.WebGLRenderingContext && !! document.createElement( 'canvas' ).getContext( 'experimental-webgl' ); } catch( e ) { return false; } } )(),
	workers: !! window.Worker,
	fileapi: window.File && window.FileReader && window.FileList && window.Blob,
	getWebGLErrorMessage: function () {
		alert("fout getwebgl");
	}

};


// JavaScript Document
$(document).ready(function(){
	var html='Hier enkele  '+ 
     '<a href="http://i879014.iris.fhict.nl/hccnet/3D_Beelden/cube6.php" '+
   '  target="_blank" '+ 
   '  title="Alleen: Canvas rendering.'+
   '  Marjan haar beelden van Keramiek."> '+ 
   '  3D Beelden. </a>';
	// webGL: 
	if ( !Detector.webgl )
   		{
			$("#3d_beelden").html(html);
			$("#123D").html("<br/><br/>O, o langzaam, geen WebGL"); 
		}
	// Flash:	
	  if (navigator.mimeTypes ["application/x-shockwave-flash"] == undefined)
      {
       //  alert("Flash is not installed on your Web browser.");
	   $(".flash").html("");
      }	
   $("#kubus").load("js/webgl.js");				   
   $("#particles").load("particles/index.html");	
});
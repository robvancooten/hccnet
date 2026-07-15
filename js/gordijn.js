// export 
function open_gordijn() {
  let w = window.innerWidth;
  let h = window.innerHeight;
  let tijd = 2000;
  //  alert("open");
  // chrome browser wil return:
  // Safari opacity 0 of 1. 

  document.getElementById('buttonL').disabled = true;
  document.getElementById('buttonL').style.opacity = "0";


  $("#kopR").animate({ height: h * 0.05, opacity: 0 }, tijd, "swing", function () { return true });

  $("#kopL").animate({ height: h * 0.05, opacity: 0 }, tijd, "swing", function () { return true });

  $("#gordijnR").animate({ width: w * 0.05 }, tijd, "swing", function () { return true });

  $("#gordijnL").animate({ width: w * 0.05 }, tijd, "swing", function () {
    document.getElementById('buttonR').disabled = false;
    document.getElementById('buttonR').value = "close";
    document.getElementById('buttonR').style.opacity = "1";
    return true
  });
}

function close_gordijn() {
  let w = window.innerWidth;
  let h = window.innerHeight;
  let tijd = 1000;
  document.getElementById('buttonR').disabled = true;
  document.getElementById('buttonR').style.opacity = "0";

  $("#kopR").animate({ height: h * 0.65, opacity: 1 }, tijd);
  $("#kopL").animate({ height: h * 0.65, opacity: 1 }, tijd);
  // document.getElementById("myDIV").style.opacity = "0.5";
  document.getElementById('kopL').style.opacity = "1";
  document.getElementById('kopR').style.opacity = "1";
  document.getElementById('kopL').style.visibility = "visible";
  document.getElementById('kopR').style.visibility = "visible";

  $("#gordijnR").animate({ width: w * 0.5 }, tijd);
  $("#gordijnL").animate({ width: w * 0.5 }, tijd, function () {
    document.getElementById('buttonL').disabled = false;
    document.getElementById('buttonL').style.opacity = "1";

    return true
  });
}

export { open_gordijn, close_gordijn };




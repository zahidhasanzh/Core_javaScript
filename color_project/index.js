var input = document.querySelector(".colorvalue");
var rval = document.querySelector(".r");
var gval = document.querySelector(".g");
var bval = document.querySelector(".b");

input.addEventListener("keyup", () => {
  var v = input.value;

  //FF00FF

  var rex = /#([0-9A-F]{1,2})([0-9A-F]{1,2})([0-9A-F]{1,2})/i;

  rval.innerHTML = "";

  if (v.length === 4 || v.length === 7) {
    var output = rex.exec(v);

    if (output === null) {
      rval.innerHTML = "not a valid color";
    } else {
      rval.innerHTML = `R: ${getColorValue(output[1])}`;
      gval.innerHTML = `G: ${getColorValue(output[2])}`;
      bval.innerHTML = `B: ${getColorValue(output[3])}`;
      document.body.style.backgroundColor = v;
    }
  } 
  else {
    rval.innerHTML = "not a valid color";
  }
});

function getColorValue(hex) {
  if (hex.length === 1) {
    hex = hex + hex;
  }
  return parseInt(hex, 16);
}

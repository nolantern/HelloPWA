window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}
var btn = document.getElementById("btn");
btn.onclick = function() {
	var value = document.getElementById("inputNumber").value;
	alert(value);
};

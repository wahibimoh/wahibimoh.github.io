(function () {
console.log("test_123 clicked!")
if( typeof window.res !== 'undefined') return;

var selectedElement = null;
window.res = document.querySelectorAll('div'); 

for(div of window.res) 
	if(div.innerHTML == 'Approval Counter: Click Me') 
		selectedElement = div
	
console.log("selectedElement",selectedElement)
var counter = 0;	
function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  //selectedElement.innerHTML = ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
	selectedElement.innerHTML = "Approval Counter:"+ counter++;
}

setInterval(time, 5000);
})();

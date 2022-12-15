/*let cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (evt) => {
  cursor.style.top = evt.pageY + "px";
  cursor.style.left = evt.pageX + "px";
});*/

var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove",function(e){
  cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});



/*var years = prompt('Сколько вам лет?', 100);

alert('Вам ' + years + ' лет!')*/
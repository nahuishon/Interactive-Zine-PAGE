var mainBox = document.querySelector(".main");
var img = document.querySelector(".image");

function cursorFollow(e,mainBox){
  var contentBox = mainBox.getBoundingClientRect();
  var x = e.pageX - contentBox.x;
  var y = e.pageY - contentBox.y;
  img.style.transform = 'translate(${x}px, ${y}px)';
}

mainBox.addEventListener("mousemove", (e)=>{
  setInterval(cursorFollow(e,mainBox), 1000);
});
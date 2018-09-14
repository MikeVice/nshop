var link=document.querySelector(".contact-btn");
var popup=document.querySelector(".modal-content");
var close=document.querySelector(".modal-content-close");
var overley=document.querySelector(".modal-overley");
link.addEventListener("click", function(){
  event.preventDefault();
  popup.classList.add("modal-content-show");
  overley.classList.add("modal-overley-show");
});
close.addEventListener("click", function(){
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  overley.classList.remove("modal-overley-show");

});
overley.addEventListener("click", function(){
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  overley.classList.remove("modal-overley-show");
});
// map
ymaps.ready(init);
function init() {
  var  myMap = new ymaps.Map("map", {
    center: [30.323058, 59.938759],
    zoom:17,
    conrols: []
  });
  myMap.behaviors.disable('scrollZoom');
}

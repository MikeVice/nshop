var link=document.querySelector(".contact-btn");
var popup=document.querySelector(".modal-content");
var close=document.querySelector(".modal-content-close");
var overley=document.querySelector(".modal-overley");
var username=document.querySelector("[name=username]");
var form=document.querySelector("[name=feedback]");
var email=document.querySelector("[name=email]");
var massage=document.querySelector("[name=massage]");

link.addEventListener("click", function(){
  event.preventDefault();
  popup.classList.add("modal-content-show");
  overley.classList.add("modal-overley-show");
  username.focus();
});

close.addEventListener("click", function(){
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  overley.classList.remove("modal-overley-show");
  popup.classList.remove("modal-error");

});

overley.addEventListener("click", function(){
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  overley.classList.remove("modal-overley-show");
  popup.classList.remove("modal-error");
});
window.addEventListener("keydown", function(){
  if (event.keyCode===27) {
    popup.classList.remove("modal-content-show");
    overley.classList.remove("modal-overley-show");
    popup.classList.remove("modal-error");
  }

});

form.addEventListener("submit", function(){
  if (!username.value || !email.value || !massage.value) {
    event.preventDefault();
    console.log("нужно ввести");
    popup.classList.remove("modal-error");
    void popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});
// map
// ymaps.ready(init);
// function init() {
//   var  myMap = new ymaps.Map("map", {
//     center: [30.323058, 59.938759],
//     zoom:17,
//     conrols: []
//   });
//   myMap.behaviors.disable('scrollZoom');
// }

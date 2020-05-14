document.documentElement.className = document.documentElement.className.replace('no-js', 'js');
function cth(c) {document.documentElement.classList.add(c)}
'ontouchstart' in window?cth('touch'):cth('no-touch');
if(typeof InstallTrigger!=='undefined')cth('firefox');
if(/constructor/i.test(window.HTMLElement)||(function(p){return p.toString()==="[object SafariRemoteNotification]"})(!window['safari']||(typeof safari!=='undefined'&&safari.pushNotification)))cth('safari');
if(/*@cc_on!@*/false||!!document.documentMode)cth('ie');
if(!(/*@cc_on!@*/false||!!document.documentMode)&&!!window.StyleMedia)cth('edge');
if(!!window.chrome&&(!!window.chrome.webstore||!!window.chrome.runtime))cth('chrome');
if(~navigator.appVersion.indexOf("Win"))cth('windows');
if(~navigator.appVersion.indexOf("Mac"))cth('osx');
if(~navigator.appVersion.indexOf("Linux"))cth('linux');

// Если на проекте jQuery
// $( document ).ready(function() {
//   // code
// });

// Изоляция без jQuery
// (function(){
//   // code
// }());

(function(){

  window.addEventListener('scroll', stickyHandler);

  var navbar = document.getElementById("page-header");
  var sticky = navbar.offsetTop;
  var offset = 250;

  function stickyHandler() {
    if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky");

      if (window.pageYOffset >= (sticky + offset) ) {
        navbar.classList.add("sticky--new-bg");
      }
    }
    else {
      navbar.classList.remove("sticky");
      navbar.classList.remove("sticky--new-bg");
    }
  }
}());

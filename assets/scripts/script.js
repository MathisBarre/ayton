function msieversion() {

   var ua = window.navigator.userAgent;
   var msie = ua.indexOf("MSIE ");

   if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
   {
       alert("Internet explorer n'est pas supporté, veuillez évoluer vers un nouveau navigateur tel que firefox \n https://www.mozilla.org/fr/firefox/new/");
   }
   return false;
}

msieversion();
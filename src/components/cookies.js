function setCookie(name, value, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays *1000 );
    var expires = "expires="+d.toUTCString();;
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }
  
  function getCookie(name) {
    var name1 = name + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name1) == 0) {
        return c.substring(name1.length, c.length);
      }
    }
    return "";
  }

  module.exports={
    setCookie:setCookie,
    getCookie:getCookie
  };
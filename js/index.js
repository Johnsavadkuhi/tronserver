var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var data = "id=5186431";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://olu.ninisite.com/Home/GetOnlineUsers");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.send(data);
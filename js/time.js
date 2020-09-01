function timeSF() {
    let hour = new Date().getHours() - 4;
    let min = new Date().getMinutes();
    let minFormatt = ("00" + min).slice(-2);

    document.getElementById("timeSF").innerHTML = "Hora " + hour + "h" + minFormatt;
}

function timePOA() {
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let minFormatt = ("00" + min).slice(-2);

    return document.getElementById("timePOA").innerHTML = "Hora " + hour + "h" + minFormatt;
}

function currentTime() {
  var date = new Date(); /* creating object of Date class */
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; /* adding time to the div */
    var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
}

currentTime();
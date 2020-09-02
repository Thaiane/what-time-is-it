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

    document.getElementById("timePOA").innerHTML = "Hora " + hour + "h" + minFormatt;

}

function updateTime() {
    setInterval(function(){ timePOA() }, 1000);
    setInterval(function(){ timeSF() }, 1000);
};

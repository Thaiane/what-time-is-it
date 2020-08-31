function timeSF() {
    let hour = new Date().getHours() - 4;
    let min = new Date().getMinutes();
    let minFormatt = ("00" + min).slice(-2);

    return document.getElementById("timeSF").innerHTML = "Hora " + hour + "h" + minFormatt;
}

function timePOA() {
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let minFormatt = ("00" + min).slice(-2);
    return document.getElementById("timePOA").innerHTML = "Hora " + hour + "h" + minFormatt;
}
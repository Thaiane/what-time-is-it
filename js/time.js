function timeSF() {
    let time = new Date();
    return document.getElementById("timeSF").innerHTML = "Hora " + (time.getHours() - 4) + "h" + time.getMinutes();
}

function timePOA() {
    let time = new Date();
    return document.getElementById("timePOA").innerHTML = "Hora " + time.getHours() + "h" + time.getMinutes();
}
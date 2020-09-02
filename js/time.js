const Timezone = Object.freeze({
    SF: ["en-US", "America/Los_Angeles"],
    POA: ["pt-BR", "America/Sao_Paulo"]
});

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

function createTime(timezone) {
    const [locale, timeZone] = timezone

    let date = new Date().toLocaleString(, {timeZone: "America/Los_Angeles"})

}

setInterval(function(){ timePOA() }, 1000);
setInterval(function(){ timeSF() }, 1000);

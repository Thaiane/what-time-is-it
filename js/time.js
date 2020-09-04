const Timezone = Object.freeze({
    SF: ["pt-br", "America/Los_Angeles"],
    POA: ["pt-br", "America/Sao_Paulo"]
});

function atualizarFusoPOA(time) {
    document.getElementById("timePOA").innerHTML = "Hora: " + time;
}

function atualizarFusoSF(time) {
    document.getElementById("timeSF").innerHTML = "Hora: " + time;
}

function createTime(timezone, atualizarFuso) {
    const [locale, timeZone] = timezone

    let time = new Date().toLocaleTimeString(locale, {timeZone: timeZone})
    atualizarFuso(time)
}

document.getElementById("atualizarFusoPOA").addEventListener("onclick", function() {
    createTime(Timezone.POA, atualizarFusoPOA)
});
document.getElementById("atualizarFusoSF").addEventListener("onclick", function() {
    createTime(Timezone.SF, atualizarFusoSF)
});

setInterval(function(){ createTime(Timezone.POA, atualizarFusoPOA) }, 1000);
setInterval(function(){ createTime(Timezone.SF, atualizarFusoSF) }, 1000);

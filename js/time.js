const Timezone = Object.freeze({
    SF: ["pt-br", "America/Los_Angeles"],
    POA: ["pt-br", "America/Sao_Paulo"]
});

function createTime(timezone, fn) {
    const [locale, timeZone] = timezone

    let date = new Date().toLocaleTimeString(locale, {timeZone: "America/Los_Angeles"})
    document.getElementById("timePOA").innerHTML = "Hora: " + date;
    fn(date)
}
// passar uma funcao para renderizar por lugar


setInterval(function(){ createTime(Timezone.POA) }, 1000);
setInterval(function(){ createTime(Timezone.SF) }, 1000);

document.getElementById("atualizarFusoPOA").addEventListener("onclick", function() {createTime(Timezone.POA)})
document.getElementById("atualizarFusoSF").addEventListener("onclick", function() {createTime(Timezone.SF)})
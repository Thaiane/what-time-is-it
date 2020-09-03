const Timezonee = Object.freeze({
    SF: ["pt-br", "America/Los_Angeles"],
    POA: ["pt-br", "America/Sao_Paulo"]
});

// como importar timezone e como passar parametros do index pro js

function createTime(timezone) {
    const [locale, timeZone] = timezone

    let date = new Date().toLocaleTimeString(locale, {timeZone: "America/Los_Angeles"})
    document.getElementById("timePOA").innerHTML = "Hora " + date;
}

(function() {
    setInterval(function(){ createTime(Timezonee.POA) }, 1000);
    setInterval(function(){ createTime(Timezonee.SF) }, 1000);
})();
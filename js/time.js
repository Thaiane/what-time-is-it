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

// function getWeather() {
//     const weather = new Promise(
//
//     ).then(
//         function() {
//         console.log('promesse ok');
//         }
//     ).catch(
//         function() {
//             console.log('promesse rompue');
//             }
//     )
// }

// fetch('"https://community-open-weather-map.p.rapidapi.com/weather')
//     .then(res => console.log(res))
//     .catch(rej => console.log(`Errrooouuuu`))

fetch("https://dark-sky.p.rapidapi.com/%7Blatitude%7D,%7Blongitude%7D?lang=en&units=auto", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "dark-sky.p.rapidapi.com",
		"x-rapidapi-key": "SIGN-UP-FOR-KEY"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});
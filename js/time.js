const Timezone = Object.freeze({
    SF: ["pt-br", "America/Los_Angeles"],
    POA: ["pt-br", "America/Sao_Paulo"]
});

function atualizarFusoPOA(time) {
    document.getElementById("timePOA").innerHTML = "Local time: " + time;
}

function atualizarFusoSF(time) {
    document.getElementById("timeSF").innerHTML = "Local time: " + time;
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

function getWeather() {
    return fetch('https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid=bacf99c899e78364efe9550df9f8d2cb')
        .then(res => console.log('foi'))
        .catch(rej => console.log(`Errrooouuuu`))
};

// getWeather();





























var

w      = window.innerWidth,
h      = window.innerHeight,
canvas = document.querySelector('canvas');
ctx    = canvas.getContext('2d'),
rate   = 50,
arc    = 500,
time   = 0,
count  = 0,
size   = 2,
speed  = 10,
lights = [],
colors = ['hsl(210 15% 10%)'],

init = () => {
  for (var i = 0; i < arc; i++) {
    lights[i] = {
      x: Math.ceil(Math.random() * w),
      y: Math.ceil(Math.random() * h),
      toX: Math.random() * 5 + 1,
      toY: Math.random() * 5 + 1,
      c: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * size
    }
  }
},

bubble = () => {
  ctx.clearRect(0, 0, w, h);

  for (var i = 0; i < arc; i++) {
    var li = lights[i];

    ctx.beginPath();
    ctx.arc(li.x, li.y, li.size, 0, Math.PI * 2, false);
    ctx.fillStyle = li.c;
    ctx.fill();

    li.x = li.x + li.toX * (time * 0.05);
    li.y = li.y + li.toY * (time * 0.05);

    if (li.x > w) li.x = 0;
    if (li.y > h) li.y = 0;
    if (li.x < 0) li.x = w;
    if (li.y < 0) li.y = h;
  }

  if (time < speed) {
    time++;
  }

  timerID = setTimeout(bubble, 1000 / rate);
};

canvas.setAttribute('width', w);
canvas.setAttribute('height', h);

init();

bubble();
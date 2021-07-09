"use strict"

var hora = 0;
var min = 0;
var seg = 0;
var tempo = 10;
var cron;

function start() {
    cron = setInterval(() => { timer(); }, tempo);
}

function pause() {
    clearInterval(cron);
}

function stop() {
    clearInterval(cron);
    document.getElementById("cron").innerText = "00:00:00";
}

function timer() {
    seg++;
    if (seg == 60) {
        seg = 0;
        min++;

        if (min == 60) {
            min = 0;
            hora++;
        }
    }

    var format = (hora < 10 ? "0" + hora : hora) + ":" + (min < 10 ? "0" + min : min) + ":" + (seg < 10 ? "0" + seg : seg);
    document.getElementById("cron").innerText = format;
}

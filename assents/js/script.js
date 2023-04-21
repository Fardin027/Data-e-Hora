const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');


const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr
    if (min < 10) min = '0' + min
    if (s < 10) s = '0' + s

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s
}) 

const Data = setInterval(function time(){
    let dateToday = new Date();
    let D = dateToday.getDate();
    let M = dateToday.getMonth();
    let A = dateToday.getFullYear();

    if (D < 10) D = '0' + D
    if (M < 10) M = '0' + M

    dia.textContent =  D
    mes.textContent =  M
    ano.textContent =  A
}) 
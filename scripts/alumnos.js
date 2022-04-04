let retoActual = document.getElementById("retoActual");
let retosVoluntarios = document.getElementById("retosVoluntarios");
let retosCompletos = document.getElementById("retosCompletos");

retoActual.addEventListener("click", ()=>{
    window.location.href = './verReto.html';
})

retosVoluntarios.addEventListener("click", ()=>{
    window.location.href = './retosVoluntarios.html';
})

retosCompletos.addEventListener("click", ()=>{
    window.location.href = './retosHechos.html';
})
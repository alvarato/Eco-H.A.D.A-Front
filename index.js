let entrar;
let entrar2 = document.getElementsByID("entrar2");
let id = 1;

entrar2.addEventListener("keydown", ()=>{
    acceder();
});

function acceder(){
    entrar = document.getElementById("email").value;
    entrar2 = entrar2.value;
    if(api(entrar && entrar2)) {
        return "El usuario existe";
    }
    let a = entrar.substring(0,6);
    console.log(a);
    if("alumno" == a){
        console.log("get alumno")
        window.location.href = 'vistasAlumno/principalAlumno'
    }else{
        console.log("get profesor")
        window.location.href = 'vistasProfe/principalProfe'
    }
}
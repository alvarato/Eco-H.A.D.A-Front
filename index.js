let entrar = document.getElementById("entrar");
let id = 1;

entrar.addEventListener("click", ()=> {
    acceder();
})



function acceder(){
    usuario = document.getElementById("usuario").value;
    // contrasenya = document.getElementById("contrasenya").value;
    // if(api(entrar && entrar2)) {
    //     return "El usuario existe";
    // }
    let a = usuario.substring(0,6);
    console.log(a);
    if("alumno" == a){
        console.log("get alumno")
        window.location.href = 'vistasAlumno/principalAlumno.html'
    }else{
        console.log("get profesor")
        window.location.href = 'vistasProfe/principalProfe.html'
    }
}
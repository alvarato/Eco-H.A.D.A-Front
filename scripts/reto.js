const url = "https://jsonplaceholder.typicode.com/";

const mostrarData = (data) => {
    console.log(data)
    let body = ''
    for( let i = 0; i<data.lenght; i++){
        body +=`<div class="col-6">
                    <div class="d-flex flex-row m-4 retoHecho">
                        <h3 class="col-8">${data[i].name}</h3>
                    <div class="col-4 d-flex justify-content-end imgreto">
                    <img src="${data[i].email}" alt="Medalla-Bronce-Cancha"
                    border="0">
                    </div>
                    <div class="d-flex justify-content-end m-2">
                        <button onclick=verReto(${data[i].id})" class="btnReto"> + Info</button>
                    </div>
                </div>`
    }
}

function verUsuarios(){
    fetch(url + "users")
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))
}


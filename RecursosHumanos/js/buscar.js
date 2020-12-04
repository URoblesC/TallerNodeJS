window.onload = init;
var headers = {};
function init(){


        
    if(localStorage.getItem("token")){

        token = localStorage.getItem("token");
        headers = {
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        }

        document.querySelector('.agregar').addEventListener('click', function() {
            window.location.href = "agregarempleado.html"
        });

        document.querySelector('.actualizar').addEventListener('click', function() {
            window.location.href = "modificarempleado.html"
        });

        document.querySelector('.eliminar').addEventListener('click', function() {
            window.location.href = "eliminarempleado.html"
        });

        document.querySelector('.buscar').addEventListener('click', buscar);
        
    }
    else{
        window.location.href = "index.html";
    }
}


function buscar(){
    var buscarnombre = document.getElementById('buscarnombre').value;

    console.log("nombre",buscarnombre);

    axios.get("http://localhost:3000/user/employee/buscar", headers)
    .then(function(res){
        console.log(res);
        displayPokemon(res.data.message);
    }).catch(function(err){
        console.log(err);
    })
}

function displayempleados(empleados){
    var body = document.querySelector("resultados");
    for (var i=0 ; i<empleados.length; i++){
        body.innerHTML += `<h5> ${empleados[i].empleado_id} </h5>`
    }
}

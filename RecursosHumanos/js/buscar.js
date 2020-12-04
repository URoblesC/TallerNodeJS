window.onload = init;

function init(){

    document.querySelector('.buscar').addEventListener('click', buscar);
    if(localStorage.getItem("token")){

    
        document.querySelector('.agregar').addEventListener('click', function() {
            window.location.href = "agregarempleado.html"
        });

        document.querySelector('.actualizar').addEventListener('click', function() {
            window.location.href = "modificarempleado.html"
        });

        document.querySelector('.eliminar').addEventListener('click', function() {
            window.location.href = "eliminarempleado.html"
        });   
    }
    else{
        window.location.href = "index.html";
    }
}


function buscar(){
    var buscarnombre = document.getElementById('buscarnombre').value;

    console.log("nombre",buscarnombre);

    axios({
        method: 'get',
        url: 'http://localhost:3000/user/employee/buscar',
        data: {
            empleado_nombre : buscarnombre
        }, 
        headers: {
            'Authorization': "bearer " + localStorage.getItem("token")
        }
    }).then(function(res){
        console.log(res);
        displayempleados(res.data.message);
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

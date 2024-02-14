'use strict'

let empleados = [];
let empleadoId = 0;


function Empleado(nombre, apellidos, nif, edad, puesto, salario, antigüedad){
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.nif = nif;
    this.edad = edad;
    this.puesto = puesto;
    this.salario = salario;
    this.antigüedad = antigüedad;
}

function anyadirEmpleado(empleado){
    empleado.id = empleadoId;
    empleadoId++;
    empleados.push(empleado);
}

function muestraWeb(){
    let divEmple = document.getElementById('divEmple');

    if(divEmple){
        divEmple.innerHTML = "";
    }

    let titulo = document.createElement('h1');
    titulo.id = "tituloH1";
    titulo.textContent = "Listado de Empleados";

    divEmple.append(titulo);

    let listaOrd = document.createElement('ol');
    listaOrd.id = "listaOrd";
    listaOrd.className = "rounded-list";
    divEmple.append(listaOrd);

    for(let empleado of empleados){
        muestraEmpleado(empleado);
    }

}

function muestraEmpleado(empleado){
    let listaOrd = document.getElementById("listaOrd");

    let lista = document.createElement("li");
    lista.id = `li${empleado.id}`
    listaOrd.append(lista);

    let div = document.createElement('div');
    div.className = "empleado"
    div.id = empleado.id;
    lista.append(div);

    let nombreCompleto = document.createElement('p');
    nombreCompleto.textContent = `${empleado.nombre} ${empleado.apellidos}`

    let nif = document.createElement('p');
    nif.textContent = `NIF: ${empleado.nif}`

    let edad = document.createElement('p');
    edad.textContent = `Edad: ${empleado.edad}`;

    let puesto = document.createElement('p');
    puesto.textContent = `Puesto: ${empleado.puesto}`;

    let salario = document.createElement('p');
    salario.textContent = `Salario: ${empleado.salario}`;

    let antigüedad = document.createElement('p');
    antigüedad.textContent = `Antigüedad: ${empleado.antigüedad}`;

    let botonEditar = document.createElement('button');
    botonEditar.id = `bEdit${empleado.id}`;
    botonEditar.textContent = "Editar";
    
    let botonBorrar = document.createElement('button');
    botonBorrar.id = `borra${empleado.id}`;
    botonBorrar.textContent = "Borrar";

    let objEditar = new EditarHandleFormulario();
    objEditar.empleado = empleado;
    objEditar.Editar = botonEditar;
    objEditar.Borrar = botonBorrar;
    botonEditar.addEventListener('click', objEditar);

    let objBorrar = new BorrarHandle();
    objBorrar.empleado = empleado;
    botonBorrar.addEventListener('click', objBorrar)

    div.append(nombreCompleto, nif, edad, puesto, salario, antigüedad, botonEditar, botonBorrar);
}

function EditarHandleFormulario(){
    this.handleEvent = function(){
        let empleado = this.empleado;
        let divEmple = document.getElementById(empleado.id);
        let formulario = document.getElementById("formulario-template").content.cloneNode(true);
        let form = formulario.querySelector('form');
        divEmple.append(form);
        let bBorrar = this.Borrar;
        let bEditar = this.Editar;
        bEditar.disabled = true;
        bBorrar.disabled = true;


        form.elements.nombre.value = empleado.nombre;
        form.elements.apellidos.value = empleado.apellidos
        form.elements.nif.value = empleado.nif;
        form.elements.edad.value = empleado.edad;
        form.elements.puesto.value = empleado.puesto;
        form.elements.salario.value = empleado.salario;
        form.elements.antigüedad.value = empleado.antigüedad;

        form.addEventListener('submit', function(event){
            event.preventDefault();

            empleado.nombre = form.elements.nombre.value;
            empleado.apellidos = form.elements.apellidos.value;
            empleado.nif = form.elements.nif.value;
            empleado.edad = form.elements.edad.value;
            empleado.puesto = form.elements.puesto.value;
            empleado.salario = form.elements.salario.value;
            empleado.antigüedad = form.elements.antigüedad.value;

            bEditar.disabled = false;
            bBorrar.disabled = false;
            form.remove();
            muestraWeb();
        })

        let botonCancelar = form.querySelector('button.cancelar');
        botonCancelar.addEventListener('click', function(){
            bEditar.disabled = false;
            bBorrar.disabled = false;
            form.remove();
        })


    }
}

function BorrarHandle(){
    this.handleEvent = function(){
        let indice = empleados.findIndex(empleado => empleado.id == this.empleado.id);
        empleados.splice(indice, 1);
        muestraWeb();
    }
}

function nuevoEmpleadowebFormulario(){
    let divForm = document.getElementById('fNuevo')
    let formulario = document.getElementById("formulario-template").content.cloneNode(true);
    let form = formulario.querySelector('form');
    divForm.append(form);
    let boton = document.getElementById('anyadeEmpleForm');
    boton.disabled = true;

    form.addEventListener('submit', function(event){
        event.preventDefault();

        let nombre = form.elements.nombre.value;
        let apellidos = form.elements.apellidos.value;
        let nif = form.elements.nif.value;
        let edad = form.elements.edad.value;
        let puesto = form.elements.puesto.value;
        let salario = form.elements.salario.value;
        let antigüedad = form.elements.antigüedad.value;

        let empleado = new Empleado(nombre, apellidos, nif, edad, puesto, salario, antigüedad);
        anyadirEmpleado(empleado);
        form.remove();
        boton.disabled = false;
        muestraWeb();
    })

    let botonCancelar = form.querySelector('button.cancelar');
    botonCancelar.addEventListener('click', function(){
        form.remove();
        boton.disabled = false;
    })
}

let botonAnya = document.getElementById("anyadeEmpleForm");
botonAnya.addEventListener('click', function(){
    nuevoEmpleadowebFormulario();
})


function guardarEmpleadosWeb(){
    localStorage.empleados = JSON.stringify(empleados);
}

function cargarEmpleadosWeb(){
    let array = [];
    if(localStorage.empleados){
        array = JSON.parse(localStorage.empleados);
    }
    cargarEmpleados(array);
    muestraWeb();
}

function cargarEmpleados(vEmpleados){
    empleados = [];
    for(let vEmpleado of vEmpleados){
        let nEmpleado = new Empleado();
        Object.assign(nEmpleado, vEmpleado);
        empleados.push(nEmpleado);
    }

}

let botonGuardar = document.getElementById("guardarEmpleado");
botonGuardar.addEventListener('click', function(){
    guardarEmpleadosWeb();
})

let botonCargar = document.getElementById("cargarEmpleado");
botonCargar.addEventListener('click', function(){
    cargarEmpleadosWeb();
})

let emple1 = new Empleado("Juan", "Pérez", "12345678A", 30, "Programador", 2000, 5);
let emple2 = new Empleado("Ana", "García", "87654321B", 25, "Programador", 2000, 2);

anyadirEmpleado(emple1);
anyadirEmpleado(emple2);

muestraWeb();
'use strict'

let usuarios = [];

function Usuario(nombre, apellido1, apellido2, NIF, edad = 20, fechaNacimiento, ...aficiones){
    this.nombre = typeof nombre === 'string' ? nombre : '----';

    this.apellido1 = typeof apellido1 === 'string' ? apellido1 : '----';

    this.apellido2 = typeof apellido2 === 'string' ? apellido2 : '----';

    this.NIF = typeof NIF === 'string' ? NIF : '----';

    if(typeof edad !== 'number' || (edad <= 0 || edad >= 100)){
        this.edad = 18;
    }
    else{
        this.edad = edad;
    }

    this.mayoria = this.edad >= 18 ? true : false;

    this.fecNac = !isNaN(Date.parse(fechaNacimiento)) ? Date.parse(fechaNacimiento) : Date.now();

    let aficionesMinusculas = aficiones.map(aficion => aficion.toLowerCase());
    this.aficiones = [...aficionesMinusculas];

    this.mostrarUsuario = function(){
        let mayor = this.mayoria ? 'es mayor de edad' : 'no es mayor de edad';
        let fecha = new Date(this.fecNac).toLocaleDateString();
        return `Nombre: ${this.nombre}\n Apellidos: ${this.apellido1} ${this.apellido2}\n NIF: ${this.NIF}\n Edad: ${edad} - ${mayor}\n F.Nac: ${fecha}\n Aficiones: \n-${aficiones.join('\n-')}`;
    }

    this.actualizarNombreApellidosNifFnac = function(nDatos){
        this.nombre = typeof nDatos.nombre === 'string' ? nDatos.nombre : this.nombre;
        this.apellido1 = typeof nDatos.apellido1 === 'string' ? nDatos.apellido1 : this.apellido1;
        this.apellido2 = typeof nDatos.apellido2 === 'string' ? nDatos.apellido2 : this.apellido2;
        this.NIF = typeof nDatos.Nif === 'string' ? nDatos.Nif : this.NIF;
        if(typeof nDatos.fecha === 'string'){
            Date.parse(nDatos.fecha);
            let age = new Date().getFullYear() - new Date(nDatos.fecha).getFullYear();
            this.edad = age;
            this.mayoria = this.age >= 18 ? true : false;
        }
        this.fecNac = typeof nDatos.fecha === 'string' ? Date.parse(nDatos.fecha) : this.fecNac;

        let year = new Date(nDatos.fecha);
        year.getFullYear();
    }

    this.anyadirAficiones = function(...nAficiones){
        for(let i = 0; i < [...nAficiones].length; i++){
            if(!this.aficiones.includes(...nAficiones[i].toLowerCase())){
                this.aficiones.push(...nAficiones[i].toLowerCase());
            }
        }
    }

    this.borrarAficiones = function(...vAficiones){
        for(let i = 0; i < [...vAficiones].length; i++){
            let found = this.aficiones.indexOf(...vAficiones[i].toLowerCase());
            if(found != -1){
                this.aficiones.splice(found, 1);
            }
        }
    }
}

let user1 = new Usuario('Carlos', 'Bleda', 'Aliaga', '12345678V', 21, '2000-11-09', 'fútbol', 'informática');
let user2 = new Usuario('Pepe', 'García', 'Navarro', '48896548W', 30, '1992-11-09', 'pesca', 'formula 1');
let user3 = new Usuario('Rosa', 'Ferrari', 'López', undefined, 32, '1990-09-09', 'running', 'música');
let user4 = new Usuario('Francisca', 'López', 'de Ayala', undefined,  82, '1942-09-09', 'cocina', 'viajar');

usuarios.push(user1, user2, user3, user4);

for(let user of usuarios){
    console.log(user.mostrarUsuario());
}

function agruparUsuarios(){
    let agrupacion = usuarios.reduce(function(acc, user){
    let fecha = new Date(user.fecNac).toLocaleDateString();
    acc[fecha] = (acc[fecha] || 0) + 1;
    return acc;
}, {});
    return agrupacion;
}

console.log(agruparUsuarios());

function filtrado({fechaDesde, fechaHasta, dni, edad, mayoria}){
    let filtro = usuarios;
    if(!isNaN(Date.parse(fechaDesde))){
        filtro = usuarios.filter(user => user.fecNac > Date.parse(fechaDesde));
    }
    if(!isNaN(Date.parse(fechaHasta))){
        filtro = filtro.filter(user => user.fecNac < Date.parse(fechaHasta));
    }
    if(typeof dni === 'string'){
        filtro = filtro.filter(user => user.NIF == dni);
    }
    if(typeof edad === 'number'){
        filtro = filtro.filter(user => user.edad == edad);
    }
    if(typeof mayoria === 'boolean'){
        filtro = filtro.filter(user => user.mayoria == mayoria)
    }
    return filtro;
}

//console.log(filtrado({fechaDesde: '2000-01-01'}));
let usuariosFiltrados = filtrado({fechaDesde: '2000-01-01'});
for(let user of usuariosFiltrados){
    console.log(user.mostrarUsuario());
}

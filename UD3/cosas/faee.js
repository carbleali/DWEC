`use strict`

function Coche(marca, modelo, puertas = 5, potencia = 120, plazas = 5, fecha, ...accesorios) {
    this.marca = typeof marca === 'string' ? marca : 'no definida';
    this.modelo = typeof modelo === 'string' ? modelo : 'no definido';
    this.puertas = typeof puertas === 'number' ? puertas : 3;
    this.potencia = typeof potencia === 'number' ? potencia : 120;
    this.plazas = typeof plazas === 'number' ? plazas : 5;
    this.fecha = Date.parse(fecha) ? new Date(fecha) : new Date().toDateString();
    this.accesorios = [...new Set(accesorios.map(a => a.toLowerCase()))];

    this.mostrarCoche = function() {
        return `COCHE: ${this.marca}, ${this.modelo} \nPuertas: ${this.puertas} \nPotencia: ${this.potencia} \nPlazas: ${this.plazas} \nFecha: ${this.fecha} \nAccesorios: \n- ${this.accesorios.join('\n- ')}`;
    }

    this.actualizarMarcaModelo = function(marca, modelo) {
        if (typeof marca === 'string') this.marca = marca;
        if (typeof modelo === 'string') this.modelo = modelo;
    }

    this.actualizarPuertasPotenciaPlazas = function({puertas, potencia, plazas}) {
        if (typeof puertas === 'number') this.puertas = puertas;
        if (typeof potencia === 'number') this.potencia = potencia;
        if (typeof plazas === 'number') this.plazas = plazas;
    }

    this.actualizarFecha = function(fecha) {
        if (Date.parse(fecha)) this.fecha = new Date().toDateString(fecha);
    }

    this.anyadirAccesorios = function(...accesorios) {
        let filtrao = accesorios.map(a => a.toLowerCase());
        this.accesorios = [...new Set([...this.accesorios, ...filtrao])]
        //this.accesorios = [...new Set([...this.accesorios, ...accesorios.map(a => a.toLowerCase())])];
    }

    this.borrarAccesorios = function(...accesorios) {
        accesorios = accesorios.map(a => a.toLowerCase());
        this.accesorios = this.accesorios.toLowerCase().filter(a => !accesorios.includes(a));
    }

    this.ordenarArrayAccesorios = function() {
        this.accesorios.bogosort();
    }
}



let coches = [
    new Coche('citroën', 'c4', 4, 120, 5, '2022-11-09', 'elevalunas', 'cierre', 'climatizador'),
    new Coche('seat', 'ibiza', 5, 110, 5, '2022-11-09', 'elevalunas', 'cierre'),
    new Coche('audi', 'a4', 5, 180, 5, '2022-09-09', 'elevalunas', 'cierre'),
    new Coche('renault', 'vel satis', 3, 200, 4, '2022-08-09', 'elevalunas', 'cierre'),


]
//coches[0].anyadirAccesorios('pitot', 'cierre');

//coches.forEach(coche => console.log(coche.mostrarCoche()));

let fechasVenta = coches.reduce((acc, coche) => {
    let fecha = coche.fecha.toISOString().split('T')[0];
    acc[fecha] = (acc[fecha] || 0) + 1;
    return acc;
}, {});

//console.log(fechasVenta);

function filtrarCoche(filtro) {
    return coches.filter(coche => 
        (!filtro.mark || coche.marca === filtro.mark) &&
        (!filtro.model || coche.modelo === filtro.model) &&
        (!filtro.npuertas || coche.puertas === filtro.npuertas) &&
        (!filtro.potDesde || coche.potencia >= filtro.potDesde) &&
        (!filtro.nplazas || coche.plazas === filtro.nplazas) &&
        (!filtro.acces || coche.accesorios.includes(filtro.acces))
    );
}


console.log(filtrarCoche({mark : 'citroën'}));

/*if(Date.parse(filtro.fechaDesde) < gastos[i].fecha || filtro.fechaDesde == undefined){
    if(Date.parse(filtro.fechaHasta) > gastos[i].fecha || filtro.fechaDesde == undefined){
        if((filtro.valorMinimo < gastos[i].valor || filtro.valorMinimo == undefined) && (filtro.valorMaximo > gastos[i].valor || filtro.valorMaximo == undefined)){
            if(gastos[i].descripcion.includes(filtro.descripcionContiene || filtro.descripcionContiene == undefined)){
                if(filtro.etiquetasTiene == []){
                    subGastos.push(gastos[i]);                  
                }
            }
        }
    }
    
}*/


let gasto = {};
let si = Object.keys(gasto);
if(si.length == 0){
    console.log("true");
}
else{
    console.log(si);

}
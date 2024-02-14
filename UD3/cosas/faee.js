`use strict`
let cosas = "Hola, ; ~ buendia                      () - 123-123: incre:ible";
let obj = [];
obj = cosas.split(/\W+/); 

console.log(obj);
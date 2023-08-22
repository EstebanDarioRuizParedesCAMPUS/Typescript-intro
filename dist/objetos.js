"use strict";
// object (array)
let goleadores = ['Joel', 'Philody', 'Akio'];
let goals = [0, -1, 6];
console.log(`Goleadores: ${goleadores}`);
console.log(`Goles: ${goals}`);
let corners = [];
//Metodo alternsativo para definir arrays en TypeScript
let penalties = [true, false, false, true];
console.log(`¿Hubo gol en los penaltis?: ${penalties}`);
//Autocompletar con métodos aplicables segun el tipo de dato del array
console.log(goals.map(ele => ele.toFixed()));
console.log(goleadores.map(ele => ele.toUpperCase()));
let goleadoresId = [2, 4, 53, 52, 2, 23];
goleadoresId.push(+'1', +'24');
console.log(goleadoresId);
//object
const songs = {
    id: 1,
    name: 'Careless Wisper'
};
console.log(songs);

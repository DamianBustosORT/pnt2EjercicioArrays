const personajesSimpsons = [
{ nombre: "Homero", edad: 39, rol: "Padre" },
{ nombre: "Marge", edad: 36, rol: "Madre" },
{ nombre: "Bart", edad: 10, rol: "Hijo" },
{ nombre: "Lisa", edad: 8, rol: "Hija" },
{ nombre: "Maggie", edad: 1, rol: "Hija" },
{ nombre: "Ned", edad: 35, rol: "Vecino" },
{ nombre: "Ralph", edad: 8, rol: "Compañero de clase" },
{ nombre: "Milhouse", edad: 10, rol: "Amigo" },
{ nombre: "Nelson", edad: 12, rol: "Bravucón" },
{ nombre: "Martin", edad: 10, rol: "Compañero de clase" }
];
//personajesSimpsons.forEach(personaje => {
//    console.log(personaje.nombre);
//});
console.log(personajesSimpsons[0]);

const pjMenores = 
    personajesSimpsons.filter(personaje => personaje.edad < 18);

pjMenores.forEach(element => {
    console.log(element.nombre);
});

//Ejercicio 2

const sumaEdades = personajesSimpsons.reduce((acumulador, personaje) => acumulador + personaje.edad, 0);
console.log(sumaEdades);

//Ejercicio 3
const nombres = personajesSimpsons.map(personaje => personaje.nombre);
console.log('Ejercicio 3 ' + nombres);

//Ejercicio 4
const personajesActualizados = personajesSimpsons.map(personaje =>
    personaje.edad < 18
        ? { ...personaje, rol: "Estudiante" }
        : personaje
);

console.log('Ejercicio 4');
personajesActualizados.forEach(personaje => {
    console.log(personaje);
})

//Version Larga
/*const personajesActualizados = personajesSimpsons.map(personaje => {

    if (personaje.edad < 18) {

        return {
            ...personaje,
            rol: "Estudiante"
        };
    }

    return personaje;
});*/

//Ejercicio 5

const personajesExtra = [
    { nombre: "Apu", edad: 45, rol: "Dueño de la tienda" },
    { nombre: "Skinner", edad: 42, rol: "Director de la escuela" },
    { nombre: "Barney", edad: 38, rol: "Ebrio" }
];
const todosLosPersonajes = [
    ...personajesSimpsons,
    ...personajesExtra
];
console.log('Ejercicio 5');
todosLosPersonajes.forEach(personaje => {
    console.log(personaje.nombre);
});
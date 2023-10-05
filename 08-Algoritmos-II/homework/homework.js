'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if(array.length <= 1) return array; // caso de corte.

  let pivot = array[0];
  let menores = [];
  let mayores = [];

  for (let i = 1; i < array.length; i++){
      if(array[i] < pivot) menores.push(array[i]);
      else mayores.push(array[i]);
    }; 

  return [...quickSort(menores), pivot,...quickSort(mayores)];
};

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if(array.length <= 1) return array; // caso de corte.

  let half = Math.floor(array.length / 2);

  let firstHalf = array.slice(0, half);
  let lastHalf = array.slice(half); 

  firstHalf = mergeSort(firstHalf); 
  lastHalf = mergeSort(lastHalf);

  array = [];

  while(firstHalf.length && lastHalf.length){ 
    if (firstHalf[0] < lastHalf[0]) array.push(firstHalf.shift());
    else array.push(lastHalf.shift());
};

return array.concat(firstHalf, lastHalf);

};

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};

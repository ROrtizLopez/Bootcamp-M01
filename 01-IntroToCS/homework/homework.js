'use strict';

function BinarioADecimal(num) {
   num = num.split('').reverse();
   let suma = 0;
   for (let i = 0; i < num.length; i++){
      suma += Math.pow(2, i) * num[i];
   }
   return suma;
}

function DecimalABinario(num) {
   let binario = [];
   while (num !== 0){
      binario.unshift(num % 2);
      num = Math.floor(num / 2);
   }
   return binario.join('');
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};

//es.1  Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.
/*
let lista = [];

let somma = 0;
for (let i = 0; somma < 50; i++) {
  let numeroUtente = prompt("Scrivi un numero");
  lista.push(numeroUtente);
  let element = lista[i];
  somma += Number(element);
  if (somma >= 50) {
    alert("Troppo alto");
    console.log(lista);
  }
}
*/

//es.2 Fai inserire un numero, che chiameremo N, all’utente.Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.

let N=prompt("numero liste");
Number(N);
let listaArray=[];
let array=[listaArray];

for(let i=0;i<N;i++){
alert(i+1 + ' lista');
    console.log(i+1+ ' lista');
    array[i];

for(let u=0;u<10;u++){
    let C=Math.floor(Math.random() * 100)+1;
    array[u]=C;
    console.log(array[u]);

}



}

//es.1
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

//es.2


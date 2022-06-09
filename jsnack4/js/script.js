// - Crea un array vuoto.
let emptyArray = [];
let userNumbers = 0;
// Chiedi per 6 volte all’utente di inserire un numero,
for(let i = 0; i < 6; i++) {
    userNumbers = prompt('Dammi un numero')
    // seleziono i dispari
    if(userNumbers % 2 != 0) {
        // inserisco numeri dispari nell array
        emptyArray.push(userNumbers)
    }
    
}
// stampo in console l'array con gli elementi che ho aggiunto
console.log(emptyArray)

// buoni questi snack :)

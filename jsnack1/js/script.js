const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
// scorro tutti i numeri
for(let i = 0; i < numbers.length; i++) {
    const thisNumber = numbers[i]
    // se sono pari
    if(thisNumber % 2 === 0) {
        // li metto nel div verde
        document.getElementById('green').innerHTML += thisNumber + ' ';
        // tutti gli altri
    } else {
        // li metto nel div rosso
        document.getElementById('red').innerHTML += thisNumber + ' ' ;
    }
}







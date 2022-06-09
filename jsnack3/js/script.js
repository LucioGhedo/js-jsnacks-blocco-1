let sum = 0
// chiedo 10 volte un numero
for(let i = 0; i < 10; i++) {
    let userNums = prompt('Dammi un numero')
    // trasformo stringa in numero
    let realNum = parseInt(userNums)
    // calcolo tutti i numeri assieme
    sum += realNum
    // stampo in console
    console.log(sum)
}
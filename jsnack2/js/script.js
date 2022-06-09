// CHIEDO NUMERO ALL UTENTE
let userNum = prompt('dammi un numero da 4 cifre')
let sum = 0
// SCORRO IL NUMERO COME FOSSE UN ARRAY
for(let i = 0; i < userNum.length; i++) {
    let splitNum = userNum[i]
    // trasformo stringa in numero
    let realNum = parseInt(splitNum)
    // sommo i vari numeri
    sum += realNum
    // output
    console.log(sum)
}
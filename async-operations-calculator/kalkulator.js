const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function metoda_callback(a, b, operacja){
        var wynik = 0
        if(operacja === "1"){
            wynik = a + b
        }
        else if(operacja === "2"){
            wynik = a * b
        } else{
            return console.log("błąd"), rl.close()
        }
        console.log(wynik)
        rl.close()
}

rl.question("podaj pierwszą liczbę: ", (input_a) => {
    rl.question("podaj drugą liczbę: ", (input_b) => {
        const a = parseInt(input_a)
        const b = parseInt(input_b)
        rl.question("Dodawanie - 1, Mnożenie - 2: ", (operacja) =>{
            metoda_callback(a, b, operacja)
        })
    })
})
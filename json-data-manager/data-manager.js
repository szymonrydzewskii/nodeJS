const fs = require("fs")
const readline = require("readline")
const rl = readline.createInterface({
    process: stdin,
    process: stdout
})

rl.question("Podaj nazwe pliku z ktorym chcesz pracowac: ", (sciezka) => {
    rl.question("Dodanie nowego obiektu - 1, Wyswietlenie danych - 2: ", (wybor) => {
        if(wybor === "1"){

        }
        else if(wybor === "2"){

        }else{
            console.error("błąd")
        }
    })
})
const fs = require("fs")
const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Podaj nazwe pliku z ktorym chcesz pracowac: ", (sciezka) => {
    rl.question("Dodanie nowego obiektu - 1, Wyswietlenie danych - 2: ", (wybor) => {
        if(wybor === "1"){
            rl.question("Podaj imie: ", (name) => {
                rl.question("Podaj wiek: ", (age) => {
                    rl.question("Podaj maila: ", (email) =>{
                        const daneWpisane = {
                            name: name,
                            age: age,
                            email: email
                        }
                        console.log(daneWpisane)
                        rl.close()
                    })
                })
            })
        }
        else if(wybor === "2"){

        }else{
            console.error("błąd")
        }
    })
})
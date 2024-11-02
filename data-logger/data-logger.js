const fs = require("fs")
const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Podaj swoje imie: ", (name) => {
    rl.question("Podaj swoje nazwisko: ", (surname) => {
        rl.question("Podaj swój wiek: ", (age) => {
            const daneWpisane = {
                name: name,
                surname: surname,
                age: age
            }
            fs.writeFileSync("data-logger/dane.json", JSON.stringify(daneWpisane))
            const dane = fs.readFileSync("data-logger/dane.json", "utf8")
            console.log("Odczytane dane: ", JSON.parse(dane))
            rl.close()
        })
    })
})
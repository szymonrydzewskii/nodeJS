const fs = require("fs")
const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Podaj swoje imie: ", (name) => {
    rl.question("Podaj swoje nazwisko: ", (surname) => {
        rl.question("Podaj swój wiek: ", (age) => {
            
        })
    })
})
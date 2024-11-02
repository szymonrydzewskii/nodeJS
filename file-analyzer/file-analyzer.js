const fs = require("fs")
const path = require("path")
const EventEmitter = require("events")

const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const emitter = new EventEmitter()

emitter.on('plikStart', (plik) => console.log(`Rozpoczęto analizę pliku: ${plik}`))
emitter.on('plikKoniec', (plik) => console.log(`Zakończono analizę pliku: ${plik}`))

rl.question("Podaj ścieżkę do katalogu: ", (sciezka) => {

})
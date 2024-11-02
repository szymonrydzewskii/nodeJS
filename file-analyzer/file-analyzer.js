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
    fs.readdir(`./${sciezka}`, (err, items) => {
        if(err){
            console.error("Błąd")
            return
        }
        items.forEach((item) => {
            const pelnaSciezka = path.join(`./${sciezka}`, item)
            fs.stat(pelnaSciezka, (err, stats) => {
                if(err){
                    console.error("Błąd")
                    return
                }
                if(stats.isDirectory()){
                    console.log(`Folder: ${item}`)
                }
                else{
                    console.log(`Plik: ${item}\nRozmiar: ${stats.size}\nRozszerzenie: ${path.extname(item)}\nData ostatniej modyfikacji: ${stats.mtime}\n`)
                }
            })
        })
    })
    rl.close()
    }
)
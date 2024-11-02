const fs = require("fs")
const path = require("path")

const logSciezka = path.join('./file-watcher', "plikWatcher.log");

function logEvent(tresc) {
    const logTresc = `${new Date().toString()}: ${tresc}\n`;
    fs.appendFileSync(logSciezka, logTresc);
    console.log(logTresc.trim());
}

fs.watch("./file-watcher", (eventType, filename) => {
    var event
    if (eventType === "rename"){
        event = (`Dodano lub usunieto plik: ${filename}`)
        logEvent(event)
        console.log(event)
    }
    else if(eventType == "change"){
        event = (`Zmiana w pliku: ${filename}`)
        logEvent(event)
        console.log(event)
    }
})
console.log('Dzialam w folderze ./file-watcher')
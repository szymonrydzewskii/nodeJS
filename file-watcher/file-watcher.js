const fs = require("fs")
const path = require("path")

const logSciezka = path.join('./file-watcher', "plikWatcher.log");

function logEvent(tresc) {
    const logTresc = `${new Date().toString()}: ${tresc}\n`;
    fs.appendFileSync(logSciezka, logTresc);
    console.log(logTresc.trim());
}
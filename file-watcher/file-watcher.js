const fs = require("fs")
const path = require("path")

const sciezkaWatcher = './file-watcher';
const logSciezka = path.join(sciezkaWatcher, "plikWatcher.log");

function logEvent(tresc) {
    const logTresc = `${new Date().toString()}: ${tresc}\n`;
    fs.appendFileSync(logSciezka, logTresc);
    console.log(logTresc.trim());
}
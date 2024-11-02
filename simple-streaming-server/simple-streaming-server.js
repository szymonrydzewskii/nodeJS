const fs = require("fs")
const http = require("http")
const path = require('path')

const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost:3000')
    const filename = url.searchParams.get('file')

    if(!filename){
        res.writeHead(400, {'content-type': 'text/plain'})
        res.end("Podaj nazwe pliku w linku np. (http://localhost:3000?file=plikWatcher.txt)")
        return
    }
    const sciezka = path.join('./file-watcher', filename)

    const stream = fs.createReadStream(sciezka)

    stream.on('error', ()=>{
        res.writeHead(404, {'content-type': 'text/plain'})
        res.end("Plik nie istnieje")
    })
    stream.pipe(res)
    });

server.listen(3000, ()=>{
    console.log('Serwer działa na porcie 3000')
    })

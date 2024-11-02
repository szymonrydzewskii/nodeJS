const fs = require("fs")
const http = require("http")
const path = require('path')

const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost:3000')
    const filename = url.searchParams.get('file');
})
server.listen(3000, ()=>{
    console.log('Serwer działa na porcie 3000')
    })

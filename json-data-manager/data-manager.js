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
                        try{
                        const data = fs.readFileSync(`json-data-manager/${sciezka}.json`, 'utf8')
                        var tablica = []
                        dataParse = JSON.parse(data)
                        tablica = dataParse
                        tablica.push(daneWpisane)
                        fs.writeFileSync(`json-data-manager/${sciezka}.json`, JSON.stringify(tablica, null, 2))
                        }
                        catch(err){
                            fs.writeFileSync(`json-data-manager/${sciezka}.json`, JSON.stringify(daneWpisane))
                        }
                        console.log("Zapisano dane")
                        rl.close()
                    })
                })
            })
        }
        else if(wybor === "2"){
            try{
            const data = fs.readFileSync(`json-data-manager/${sciezka}.json`, 'utf8')
            console.log(JSON.parse(data))
            }
            catch{
                console.error("Nie ma takiego pliku")
            }finally{
                rl.close()
            }
        }else{
            console.error("błąd")
        }
    })
})
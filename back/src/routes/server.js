// const http = require('http');
// const characters = require('../utils/data');

// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*')

//     if(req.url.includes('rickandmorty/character')){
//         let id = req.url.split('/').at(-1);

//         let characterFilter = characters.filter(char => char.id === Number(id))

//         let characterFilter = characters.find(char => char.id === Number(id))

//         res
//         .writeHead(200, {"Content-type": "application/json"})
//         .end(JSON.stringify(characterFilter))
//     }


// }).listen(3001, 'localhost')

const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

app.use(cors())
app.use(express.json)

app.get("/`rickandmorty`/character/:id" , async(req, res) =>{
    try {
        const{id} = req.params
        const response = await axios (`https://rickandmortyapi.com/api/character/${id}`)
        const data = response.data
     
        const infoCharacter ={
         id: data.id,
         name: data.name,
         species:data.species,
         gender: data.gender
        }
        res.status(200).json(infoCharacter);
        
    } catch (error) {
        res.status(400).send(error.messege)
    }
 
})
app.get("/`rickandmorty`/detail/:detailId", async(req,res) =>{
    try {
        const {detilId} = req.params

        const {data} = await axios(`https://rickandmortyapi.com/api/character/${detailId}`)

        const infoCharacterDetail={
            id: data.id,
            name: data.name,
            species:data.species,
            gender: data.gender,
            origin:data.origin
        }
        res.status(200).json(infoCharacterDetail)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

let fav = []

app.get("/rickandmorty/fav", (req,res)=>{
    res.status(200).json(fav)
})
app.post("/rickandmorty/fav", (req,res) =>{
   fav.push(req.body)

   res.status(200).send('Se guardaron correctamente los datos')
})
app.delete("/rickandmorty/fav/:id", (req,res) =>{
    const {id} = req.params
    const favFiltered = fav.filter(c => c.id !==(id));
    fav = favFiltered

    res.status(200).send('Se eliminó correctamente')
})
module.exports = app
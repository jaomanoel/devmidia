const express = require('express');
const DataBase = require('./db/config');
const cors = require('cors');

const app = express();


app.use(cors());
app.use(express.json());

app.post('/register', (req, res) => {
    const { title }  = req.body
    const { category } = req.body
    const { content } = req.body

    if(title != '' && category != '' && content != ""){
        async function regis(){
            const db = await DataBase();

            await db.exec(`INSERT INTO anuncios (titulo, categoria, assunto) VALUES ("${title}", "${category}", "${content}")`)
        }

        regis();    
    }else{
        console.log('nao tem valor')
    }
})

app.get('/', (req, res) => {
    async function hiddenAnuncio(){
        const db = await DataBase();

        const sql =  await db.all(`SELECT * FROM anuncios`);

        res.send(sql)
    }
    hiddenAnuncio();
})


app.get('/pesquisa/:search', (req, res) => {
    const pesquisa = req.params['search']

    async function veriPesquisa(){
        const db = await DataBase()

        const like = await db.all(`SELECT * FROM anuncios WHERE titulo  LIKE '%${pesquisa}%'`)
        res.send(like)
    }

    veriPesquisa();
})

app.listen(3001, () => console.log("rodando..."));


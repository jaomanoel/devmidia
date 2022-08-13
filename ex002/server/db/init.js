const Database = require("./config")

const initDb =  {
    async init(){
        const db = await Database()

        await db.exec(`CREATE TABLE anuncios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT,
            categoria TEXT,
            assunto TEXT
        )`)

        await db.close()
    }
}

initDb.init()
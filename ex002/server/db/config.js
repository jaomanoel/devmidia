const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

module.exports = () => 
    open({
        filename: "./db/anuncios.sqlite",
        driver: sqlite3.Database,
    });
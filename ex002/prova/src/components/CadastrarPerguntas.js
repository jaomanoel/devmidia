import React, {useState, useEffect} from "react";
import axios from 'axios';

const  CadastrarPerguntas = () => {

    const [anuncio, setAnuncio] = useState({
        title: "",
        category: "",
        content: ""
    })

    const valueInput = e => setAnuncio({...anuncio, [e.target.name]: e.target.value})

    const registerAnuncio = (e) => {
        e.preventDefault();

        axios.post("https://quiet-crag-18542.herokuapp.com/register", {
            title: anuncio.title,
            category: anuncio.category,
            content: anuncio.content
        })
    }   

    return(
        <div className="Cadastro">
            <form onSubmit={registerAnuncio}>
                <label htmlFor="title" className="sr-only">Titulo do anuncio</label>
                <input name="title"  type="text" placeholder="Titulo:" onChange={valueInput}></input>

                <label htmlFor="category" className="sr-only">Categoria do anuncio</label>
                <input name="category" type="text" placeholder="Categoria:" onChange={valueInput}></input>

                <label htmlFor="content" className="sr-only">Conteudo do anuncio</label>
                <textarea name="content" type="text" placeholder="Conteudo:" onChange={valueInput}></textarea>

                <button type="Submit">
                    Cadastrar
                </button>
            </form>
        </div>
    )
}

export default CadastrarPerguntas;
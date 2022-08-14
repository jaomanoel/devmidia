import {React, useState} from "react";
import Axios from "axios";
import Main from "./Main";

const Header = () => {
    const [search, setSearch] = useState({
        pesquisa: ""
    })

    const [listSearch, setListSearch] = useState()
    
    const valueInput = (e) => setSearch({...search, [e.target.name]: e.target.value})
    
    const handleSearch = (e) => {
        e.preventDefault();
        
        Axios.get("https://quiet-crag-18542.herokuapp.com/pesquisa/" + search.pesquisa
        ).then((response) => {
            setListSearch(response.data)
        }
        ).catch((response) => {console.log(response)})
        
    }
    return (
        <div>
            <div>
                <h1>LOGO</h1>
            </div>

            <div className="header-nav">
                <div>
                <a href="/cadastrar">CADASTRAR ANUNCIO</a>
                <a href="/">EXIBIR ANUNCIOS</a>
                </div>

                <div>
                    <form>
                        <label htmlFor="pesquisa" className="sr-only">Procurar anuncios</label>
                        <input type="text" name="pesquisa" onChange={valueInput}></input>

                        <button type="Submit" onClick={handleSearch}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>
                        </button>
                    </form>
                </div>
            </div>

            {typeof listSearch === "undefined" &&  typeof listSearch !== "undefined" && listSearch.map((val) => {
                return (
                    <Main 
                        key={val.id}
                        listSearch={listSearch}
                        setListSearch={setListSearch}
                        id={val.id}
                        title={val.titulo}
                        category={val.categoria}
                        content={val.assunto}
                    />
                )
            })}
        </div>
    )
}

export default Header;
import Header from '../../components/Header';
import CadastrarPerguntas from '../../components/CadastrarPerguntas';

const Cadastrar = () => {
    return(
        <div className="Cadastrar">
            <header className="App-header">
                <Header />
            </header>

            <main>
                <CadastrarPerguntas />
            </main>

            <footer>
                <h2>DESENVOLVIDO POR JOAO MANOEL</h2>
            </footer>
        </div>
    )

}

export default Cadastrar;
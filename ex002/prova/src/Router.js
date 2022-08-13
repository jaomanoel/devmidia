import Cadastrar from "./pages/cadastrar/Cadastrar"
import {Switch, Route} from 'react-router-dom';
import Home from "./pages/home/Home";

export default () => {
    return(
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>

            <Route exact path='/cadastrar'>
                <Cadastrar />
            </Route>
        </Switch>
    )
}
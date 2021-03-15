import "./App.css";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Footer from "./components/Footer/Footer";
import Home from "./paginas/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Escola from "./paginas/Escola/Escola";
import Cia from "./paginas/Cia/Cia";
import Cursos from "./paginas/Cursos/Cursos";
import Contato from "./paginas/Contato/Contato";
import Privado from "./paginas/Privado/Privado";

function App() {
  return (
    <Router>
      <Cabecalho />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/escola'>
          <Escola/>
        </Route>
        <Route exact path='/cia'>
          <Cia/>
        </Route>
        <Route path='/cursos'>
          <Cursos/>
        </Route>
        <Route exact path='/contato'>
          <Contato/>
        </Route>
        <Route path='/privado'>
          <Privado/>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

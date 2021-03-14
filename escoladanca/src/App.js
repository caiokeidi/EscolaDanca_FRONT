import "./App.css";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Footer from "./components/Footer/Footer";
import Home from "./paginas/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Cabecalho />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

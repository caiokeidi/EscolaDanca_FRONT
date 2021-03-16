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
import { useEffect, useState } from "react";

function App() {
  const [estado, setEstado] = useState({
    displayed_form: "",
    logged_in: haveToken(),
    username: "",
  });

  function haveToken() {
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("token") != "undefined"
    ) {
      return true;
    } else {
      return false;
    }
  }

  console.log('estado' , estado)

  useEffect(() => {
    if (estado.logged_in) {
      fetch("http://localhost:8000/aluno/current_user/", {
        headers: {
          Authorization: `JWT ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((json) => {
          setEstado({
            username: json.username,
            displayed_form: "",
            logged_in: true,
          });
        });
    }
  }, []);

  return (
    <Router>
      <Cabecalho />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/escola">
          <Escola />
        </Route>
        <Route exact path="/cia">
          <Cia />
        </Route>
        <Route path="/cursos">
          <Cursos />
        </Route>
        <Route exact path="/contato">
          <Contato />
        </Route>
        <Route path="/privado">
          <Privado estado={estado} setEstado={setEstado} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

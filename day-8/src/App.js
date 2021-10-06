import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/mainstyle.css";
import Navbar from "./components/Navbar";
import MovieListWithSearch from "./components/MovieListWithSearch";

import MovieDetails from "./components/MovieDetails";

import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Container fluid>
          <Switch>
            <Route exact path="/">
              <h4 class="pt-4">Search a movie</h4>
              <MovieListWithSearch />
            
            </Route>
            <Route  path="/details/:imdbID">

              <MovieDetails/>
            </Route>
          </Switch>
        </Container>
      </Router>

     
    </>
  );
}

export default App;

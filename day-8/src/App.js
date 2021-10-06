import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/mainstyle.css'
import Navbar from './components/Navbar'
import MovieListWithSearch from './components/MovieListWithSearch'
import Footer from './components/Footer'
import MovieList from './components/MovieList'

import { Container } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";





function App() {
  return (

   <>
    <Router>

<Navbar/>

<Container fluid>

  
<Switch>
        
          <Route path="/topics">
         
          </Route>
          <Route path="/details/:imdbID">
            <div>sdasdas</div>
          </Route>
  </Switch>


<h4 class="pt-4">Search a movie</h4>
<MovieListWithSearch/>
<h4 class="pt-4">Scary Movie</h4>
<MovieList query = "scary%20movie" / >
<h4 class="pt-4">Harry Potter</h4>
<MovieList  query = "harry%20potter" />

</Container>


</Router>
   
   <Footer/>
   </>
  )
}

export default App;

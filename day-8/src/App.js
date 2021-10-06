import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import BookList from './components/BookList';
import './components/singleBook.css'




function App() {
  return (
    <Router>
 
   
 
    <Switch>
          <Route path="">
          <BookList/>
          </Route>
          <Route path="/details/:asin">
           
          </Route>
          <Route path="/">
         
          </Route>
        </Switch>
    
    </Router>
  )
}

export default App;

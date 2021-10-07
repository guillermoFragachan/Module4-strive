import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import BookList from './components/BookList';
import './components/singleBook.css'
import { Container, Row } from 'react-bootstrap';
import Registration from './components/Registration';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <Router>
    <Container className='mt-5' fluid>
      
    <Row>
      
  
          <Switch>
            <Route exact path="/">
            
              
            
            </Route>
            <Route
            path="/registration"
            exact
            render={() => (
           
                <Registration/>
              
            )}
          />
          </Switch>

   
  
  
    {/* <MyCard book={FantasyBooks[1]} /> */}
    <BookList/>
   
  
     
   
    </Row>
    </Container>
    </Router>
  )
}

export default App;

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';
import BookList from './components/BookList';
import './components/singleBook.css'
import { Container, Row, Column } from 'react-bootstrap';
// import MyCard from './components/SingleBook';
// import FantasyBooks from './data/fantasy.json'




function App() {
  return (
    <Container>
        <WarningSign text='whatever'/>
    <MyBadge text='MyBadge' color='primary'/>
      <Row>
  
    {/* <MyCard book={FantasyBooks[1]} /> */}
    <BookList/>
    </Row>
    </Container>
  )
}

export default App;

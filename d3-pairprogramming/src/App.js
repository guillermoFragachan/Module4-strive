import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';
import BookList from './components/BookList';
import './components/singleBook.css'
import { Container, Row, Col } from 'react-bootstrap';
import Comments from './components/Comments';
// import MyCard from './components/SingleBook';
// import FantasyBooks from './data/fantasy.json'




function App() {
  return (
    <Container className='mt-5' fluid>
      
      <Row>
        <Col xs={8}>
  
    {/* <MyCard book={FantasyBooks[1]} /> */}
    <BookList/>
    </Col>
    <Col xs={4}>
      <Comments/>
    </Col>
    </Row>
    </Container>
  )
}

export default App;

import { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import HistoryBooks from '../data/history.json'
import FantasyBooks from '../data/fantasy.json'
import HorrorBooks from '../data/horror.json'
import RomanceBooks from '../data/romance.json'
import ScifiBooks from '../data/scifi.json'




class LatestRelease extends Component {
    state = {
        selectedBookCategory: null
    }



    render() {
        return(

            

        <Container>
            <Row>
                
           
                            {
                                HistoryBooks.map(book => (
                                    <Col key={book.asin}>
                                        <img
                                            className="d-block w-100"
                                            src={book.img}
                                            alt={book.title}
                                            
                                        />
                                        </Col>
                                       
                                   
                                ))
                            }
                       


                
            </Row>
        </Container>
        
        
    )
    
    }
}






export default LatestRelease
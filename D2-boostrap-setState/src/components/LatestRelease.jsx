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


const books = [HistoryBooks, FantasyBooks, HorrorBooks, RomanceBooks, ScifiBooks]

let value = 0
class LatestRelease extends Component {
    state = {
        selectedBookCategory: 0
    }



    render() {
        return(
           
            
            
        <Container>
             <Button  variant="primary"  onClick={()=>{
                 if(value<4){value ++
                 console.log(value)
                 
                 this.setState({selectedBookCategory: value})}
                 else{
                     value = 0
                 }
                 
                 }} >Next category</Button>
                
            <Row>

                            {
                                books[this.state.selectedBookCategory].map(book => (
                                    <Col xs={2}  key={book.asin}>
                                        <img
                                            className="img-fluid "
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
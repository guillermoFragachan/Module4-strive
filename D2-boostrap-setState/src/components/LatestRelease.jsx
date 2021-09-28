import { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import HistoryBooks from '../data/history.json'


class LatestRelease extends Component {
    state = {

    }



    render() {
        return(
        <Container>
            <Row>
                
           
                            {
                                HistoryBooks.map(book => (
                                    <Col >
                                        <img
                                            className="d-block w-100"
                                            src={book.img}
                                            alt="First slide"
                                            
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
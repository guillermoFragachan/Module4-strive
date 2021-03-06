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
//how to bring everything in one inmport?
//import books from "../data"

const books = [HistoryBooks, FantasyBooks, HorrorBooks, RomanceBooks, ScifiBooks]
const categoryNames = ['History', 'Fantasy', 'Horror', 'Romance', 'SciFi']

let value = 0
class LatestRelease extends Component {
    state = {
        selectedBookCategory: 0
    }



    render() {
        return (



            <Container >
                <Button variant="primary" className="mb-3" onClick={() => {
                    if (value < books.length -1) {
                        value++
                        console.log(value)

                        this.setState({ selectedBookCategory: value })
                    }
                    else {
                        value = 0
                    }

                }} >Next category</Button>


                {
                    <h1>{categoryNames[this.state.selectedBookCategory]}</h1>

                }



                <Row>

                    {
                        books[this.state.selectedBookCategory].map(book => (
                            <Col xs={2} key={book.asin}>
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
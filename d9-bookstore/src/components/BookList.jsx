import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Comments from "./Comments";

import MyCard from "./SingleBook";

import FantasyBooks from "../data/fantasy.json";

import FormControl from "react-bootstrap/FormControl";


class BookList extends Component {
  state = {
    title: "",
    filteredBooks: FantasyBooks,
    selectedBook: null
  };

  filtreBooksList = (query) => {
    let filteredBooks = FantasyBooks.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );

    this.setState({ filteredBooks });
  };


  

  render() {
    return (
      <Container>
        <Row>
          <Col md={8}>
        <Row>
          <FormControl
            placeholder="Book Title"
            aria-label="Book Title"
            value={this.state.title}
            onChange={
              // this will happen every time I input a keystroke
              (e) => {
                this.setState({
                  // with the ... your making a copy of all the properties
                  // already existing into this.state.reservation
                  title: e.target.value,
                  // and then you're just overwriting ONE property
                });
                this.filtreBooksList(e.target.value)
              }
            }
          />

          {this.state.filteredBooks.map((book) => (
            <Col key={book.asin} xs={2}>
              <MyCard changeSelectedBook={(asin)=>{
                this.setState({
                  selectedBook:asin
                })
              }} book={book} />
            </Col>
          ))} 
        </Row>

        </Col>
        <Col md={4}>
          
       
              <Comments query={this.state.selectedBook}/> 
           
          
          </Col>

        </Row>
      </Container>
    );
  }
}

export default BookList;

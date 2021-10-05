import { useState } from 'react'

import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import MyCard from "./SingleBook";

import FantasyBooks from "../data/fantasy.json";

import FormControl from "react-bootstrap/FormControl";

const BookList =() => {
  // state = {
  //   title: "",
  //   filteredBooks: FantasyBooks,
  // };

  const [title, setTitle] = useState('')
  const [filteredBooks, setFilteredBooks] = useState(FantasyBooks)

  const filtreBooksList=  (query) => {
    let filteredBooks = FantasyBooks.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );

    // this.setState({ filteredBooks });
    setFilteredBooks(filteredBooks)
  };




  // render() {
    return (
      <Container>
        <Row>
          <FormControl
            placeholder="Book Title"
            aria-label="Book Title"
            // value={this.state.title}
            onChange={
              // this will happen every time I input a keystroke
              (e) => {
                setTitle(e.target.value)
                // this.setState({
                //   // with the ... your making a copy of all the properties
                //   // already existing into this.state.reservation
                //   title: e.target.value,
                //   // and then you're just overwriting ONE property
                // });
                // this.filtreBooksList(e.target.value)
                setFilteredBooks(e.target.value)
              }
            }
          />

          {filteredBooks.map((book) => (
            <Col key={book.asin} xs={2}>
              <MyCard book={book} />
            </Col>
          ))} 
        </Row>
      </Container>
    );
  // }
}

export default BookList;

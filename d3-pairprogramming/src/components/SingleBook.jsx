import Card from 'react-bootstrap/Card'
import { Component } from 'react'
import Comments from './Comments'




/*





8.Convert your SingleBook component to a class, and create its state containing a selected 
boolean property.
Clicking on a SingleBook should toggle its selected state property. If the selected property
is true, the SingleBook should have some styling that reflects that state change, visually.




*/


class MyCard extends Component {

 

  render() {

    return (

      

      <>
      <Card
          // onClick={() => this.setState({ selected: !this.state.selected })}
          onClick={() => this.props.changeSelectedBook(this.props.book.asin)}
          
      >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
              <Card.Title style={{ color: 'black' }}>{this.props.book.title}</Card.Title>
          </Card.Body>
      </Card>
      {/* {
          this.state.selected && <CommentArea asin={this.props.book.asin} />
      } */}
  </>



    )

  }

}




export default MyCard
import Card from 'react-bootstrap/Card'
import { Component } from 'react'
import { Link } from 'react-router-dom'




/*





8.Convert your SingleBook component to a class, and create its state containing a selected 
boolean property.
Clicking on a SingleBook should toggle its selected state property. If the selected property
is true, the SingleBook should have some styling that reflects that state change, visually.




*/


class MyCard extends Component {
  state = {
    selected: false

  }

  handleToggle = () => {
    this.setState({ selected: !this.state.selected });
  }

  render() {

    return (

      


        <Card  onClick={this.handleToggle} className={this.state.selected ? "selected" : null} key={this.props.book.asin} >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
          <Link to={'details/'+ this.props.book.asin}>
              <Card.Title>{this.props.book.title}</Card.Title>
              </Link>

          </Card.Body>
        </Card>



    )

  }

}




export default MyCard
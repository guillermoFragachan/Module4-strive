

import Card from 'react-bootstrap/Card'
import { Component, useState } from 'react'





/*





8.Convert your SingleBook component to a class, and create its state containing a selected 
boolean property.
Clicking on a SingleBook should toggle its selected state property. If the selected property
is true, the SingleBook should have some styling that reflects that state change, visually.




*/

const MyCard = (props) => {
  // state = {
  //   selected: false

  // }


  const [selected, setSelected] = useState(false)


  const handleToggle = () => {
    setSelected(!selected)
  }

  // render() {

    return (

      


        <Card  onClick={handleToggle} className={selected ? "selected" : null} key={props.book.asin} >
          <Card.Img variant="top" src={props.book.img} />
          <Card.Body>
            <Card.Title>{props.book.title}</Card.Title>

          </Card.Body>
        </Card>



    )

  // }

}




export default MyCard
import  Jumbotron  from 'react-bootstrap/Jumbotron'
import  Container  from 'react-bootstrap/Container'


const MyJumbotron = (props) =>(
<Jumbotron fluid>
  <Container>
    <h1>{props.title}</h1>
    <p>
     {props.subtitle}
    </p>
  </Container>
</Jumbotron>
)


export default MyJumbotron
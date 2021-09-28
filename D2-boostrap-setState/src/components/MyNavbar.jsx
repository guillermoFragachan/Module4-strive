import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const MyNavbar = (props) => (
    <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
        <Navbar.Brand href="#home">{props.name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
           
        </Navbar.Collapse>
    </Navbar>
)

export default MyNavbar
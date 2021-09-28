import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const MyFooter = (props) => (
    <Navbar collapseOnSelect  bg="light" variant="light">
                <Navbar.Brand href="#home">{props.name}</Navbar.Brand>

        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="#">Social media</Nav.Link>
                <Nav.Link href="#">About us</Nav.Link>
                <Nav.Link href="#">Address</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default MyFooter
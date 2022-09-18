import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Navigation() {
  return (
    <div className="navigation">
      <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="">
            <Nav.Link href="/weatherApp">WeatherApp</Nav.Link>
            <Nav.Link href="/toDoApp">ToDoApp</Nav.Link>
          </Nav>
      </Navbar>
    </div>
  );
}

export default Navigation;
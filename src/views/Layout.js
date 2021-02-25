import {
  Nav,
  Navbar,
} from "react-bootstrap";

const Layout = (props) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          {'Conbingo'.toUpperCase()}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/nintendo">Nintendo Direct</Nav.Link>
            <Nav.Link href="/playstation">State of Play</Nav.Link>
            <Nav.Link href="/blizzard">Blizzcon</Nav.Link>
            <Nav.Link href="/custom">Custom</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {props.children}
    </div>
  );
};

export default Layout;

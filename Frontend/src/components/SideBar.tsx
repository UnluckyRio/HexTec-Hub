import Nav from "react-bootstrap/Nav";

function SideBar() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">
        <i className="bi bi-house me-2" aria-hidden="true"></i>
        Home
      </Nav.Link>
      <Nav.Link eventKey="link-1">
        <i className="bi bi-person me-2" aria-hidden="true"></i>
        Profile
      </Nav.Link>
      <Nav.Link eventKey="link-2">
        <i className="bi bi-trophy me-2" aria-hidden="true"></i>
        Tier List
      </Nav.Link>
      <Nav.Link eventKey="link-3">
        <i className="bi bi-journal-text me-2" aria-hidden="true"></i>
        Article
      </Nav.Link>
      <Nav.Link eventKey="link-4">
        <i className="bi bi-people me-2" aria-hidden="true"></i>
        Champions
      </Nav.Link>
    </Nav>
  );
}

export default SideBar;

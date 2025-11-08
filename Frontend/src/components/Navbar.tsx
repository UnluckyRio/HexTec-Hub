import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from "react-router-dom";
import logoSrc from "../assets/img/Icon.png";
import avatarSrc from "../assets/img/ProfileIcon.png";
import "../css/Navbar.scss";
export type NavbarProps = {
  titleText?: string;
  onNavSelect?: (eventKey: string | null) => void;
};
const Navbar: React.FC<NavbarProps> = ({
  titleText = "HexTech Hub",
  onNavSelect,
}) => {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="navbar-container">
      {}
      <header className="navbar-header d-flex align-items-center justify-content-between p-3">
        {}
        <div className="d-flex align-items-center gap-2">
          <img
            src={logoSrc}
            alt="HexTech Hub Icon"
            className="img-fluid navbar-logo"
            width={100}
            height={100}
          />
          <h1 className="navbar-title m-0">{titleText}</h1>
        </div>

        {}
        <div className="navbar-account">
          <Dropdown autoClose="outside">
            <Dropdown.Toggle
              id="navbar-account-toggle"
              className="navbar-account-btn"
              aria-label="Apri menu account"
              aria-haspopup="menu"
            >
              {imgError ? (
                <i
                  className="bi bi-person-fill navbar-account-fallback"
                  aria-hidden="true"
                ></i>
              ) : (
                <img
                  src={avatarSrc}
                  alt="Immagine profilo utente"
                  onError={() => setImgError(true)}
                />
              )}
            </Dropdown.Toggle>
            <Dropdown.Menu
              align="end"
              className="navbar-account-dropdown"
              role="menu"
              aria-label="Menu account"
            >
              <Dropdown.Item href="#/profile">
                <i className="bi bi-person me-2" aria-hidden="true"></i>
                Profilo
              </Dropdown.Item>
              <Dropdown.Item href="#/settings">
                <i className="bi bi-gear me-2" aria-hidden="true"></i>
                Impostazioni
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/logout">
                <i
                  className="bi bi-box-arrow-right me-2"
                  aria-hidden="true"
                ></i>
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </header>

      {}
      <aside className="navbar-sidebar">
        <Nav className="flex-column" onSelect={onNavSelect}>
          {/** Link a Home: uso NavLink per attivare la classe .active in base alla route */}
          <Nav.Link as={NavLink} to="/home">
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

          <Nav.Link as={NavLink} to="/Champions">
            <i className="bi bi-people me-2" aria-hidden="true"></i>
            Champions
          </Nav.Link>
          <Nav.Link eventKey="link-3">
            <i className="bi bi-journal-text me-2" aria-hidden="true"></i>
            Article
          </Nav.Link>
        </Nav>
      </aside>
    </div>
  );
};
export default Navbar;

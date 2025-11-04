import Dropdown from "react-bootstrap/Dropdown";
import React, { useState } from "react";
import "../css/AccountPic.scss";
import avatarSrc from "../assets/img/ProfileIcon.png";

function AccountPic() {
  const [imgError, setImgError] = useState(false);

  return (
    <Dropdown autoClose="outside">
      <Dropdown.Toggle
        id="account-pic-toggle"
        className="account-pic-btn"
        aria-label="Apri menu account"
        aria-haspopup="menu"
      >
        {imgError ? (
          <i
            className="bi bi-person-fill account-pic-fallback"
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
        className="account-dropdown"
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
          <i className="bi bi-box-arrow-right me-2" aria-hidden="true"></i>
          Logout
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default AccountPic;

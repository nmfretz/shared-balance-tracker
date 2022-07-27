import { Navbar, Image, OverlayTrigger, Popover } from "react-bootstrap";

import logo from "../assets/logo-black.png";
import SignOut from "./SignOut";
import defaultUserImage from "../assets/user-icons/icons8-clown-fish-100.png";
import { FAMILY_TO_EMAIL } from "../data/userEmails";

const Nav = ({ user }) => {
  const { displayName, email, photoURL } = user;

  let family = null;
  for (const [fam, emails] of Object.entries(FAMILY_TO_EMAIL)) {
    if (emails.includes(email)) {
      family = fam;
    }
  }

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body className="d-flex flex-column align-items-center">
        <Image src={photoURL} onError={showDefaultImage} roundedCircle="true" width="75" />
        <p className="fw-semibold fs-6 mt-2 mb-0">{displayName}</p>
        <p>{email}</p>
        <SignOut />
      </Popover.Body>
    </Popover>
  );

  function showDefaultImage(e) {
    e.onerror = null; // prevents looping
    e.target.src = defaultUserImage;
  }

  return (
    <Navbar className="px-4 bg-white">
      <Navbar.Brand className="d-flex align-items-center">
        <img alt="" src={logo} className="d-inline-block align-top" width="100" />{" "}
        {`Welcome ${family ? `${family} Family` : "Stranger"}!`}
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        {user && (
          <Navbar.Text>
            <OverlayTrigger trigger="click" placement="bottom-end" rootClose="true" overlay={popover}>
              <Image
                src={photoURL}
                onError={showDefaultImage}
                roundedCircle="true"
                width="50"
                className="custom-pointer"
              />
            </OverlayTrigger>
          </Navbar.Text>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;

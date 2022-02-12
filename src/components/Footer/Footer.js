import LinkedInIcon from "./linkedin.svg";
import LocationIcon from "./location.svg";
import MailIcon from "./mail.svg";
import PhoneIcon from "./phone.svg";

import "./footer.css";

const Footer = () => (
  <footer className="siteFooter" data-menu-title="Contact me">
    <div className="contentInnerWrapper">
      <h3>Contact me</h3>
      <ul className="contactList">
        <li>
          <span className="icon">
            <img src={MailIcon} alt="" />
          </span>
          <span className="value">
            <a href="mailto:a@b.cd" target="_blank" rel="noopener noreferrer">
              a@b.cd
            </a>
          </span>
        </li>
        <li>
          <span className="icon">
            <img src={PhoneIcon} alt="" />
          </span>
          <span className="value">+45 123123123</span>
        </li>
        <li>
          <span className="icon">
            <img src={LinkedInIcon} alt="" />
          </span>
          <span className="value">
            <a
              href="https://www.linkedin.com/in/xxx/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </span>
        </li>
        <li>
          <span className="icon">
            <img src={LocationIcon} alt="" />
          </span>
          <span className="value">Copenhagen, Denmark</span>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;

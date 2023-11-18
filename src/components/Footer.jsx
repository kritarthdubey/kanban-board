import React from "react";
import "../styles.css";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // To get the current year

  return (
    <footer className="footer">
      <div className="footer-left">
        <a
          href="https://drive.google.com/file/d/1B9g_XCkn8t-YzJmdeZTi9689lmjZkhFX/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg?size=626&ext=jpg"
            alt="Kritarth dubey"
            className="profile-pic"
          />
        </a>
      </div>
      <div className="footer-right">
        <div className="information-section">
          <p>Kritarth dubey</p>
          <p>IMS Engineering College</p>
          <p className="copyright-section">
            © {currentYear} Kritarth dubbey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

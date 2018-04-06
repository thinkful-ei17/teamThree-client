import React from "react";
import './footer.css';

export default function Footer(props) {
  return (
    <footer className="footer">
      <div className="content-grid">
        <div>
          <h4 className='footer-heading'>Made in 2018 by:</h4>
          <ul className='footer-ul'>
            <li>
              <a
                href="https://github.com/lindafoodev"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-li-a"
              >
                Linda
              </a>
              <span role="img">🧠</span>
            </li>
            <li>
              <a
                href="https://github.com/JohnLCastillo"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-li-a"
              >
                John
              </a>
              <span role="img">👨‍💻</span>
            </li>
            <li>
              <a
                href="https://github.com/samuelgould"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-li-a"
              >
                Sam
              </a>
              <span role="img">🕵</span>
            </li>
            <li>
              <a
                href="https://github.com/ASTribble"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-li-a"
              >
                Scott
              </a>
              <span role="img">😎</span>
            </li>
            <li>
              <a
                href="https://github.com/TriciaF"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-li-a"
              >
                Tricia
              </a>
              <span role="img">🤗</span>
            </li>
          </ul>{" "}
        </div>
      </div>
    </footer>
  );
}

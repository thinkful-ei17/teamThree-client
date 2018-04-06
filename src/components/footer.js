import React from "react";
import './footer.css';

export default function Footer(props) {
  return (
    <footer className="background-darkest">
      <div className="content-grid">
        <div>
          Made by:
          <ul>
            <li>
              <a
                href="https://github.com/lindafoodev"
                target="_blank"
                rel="noopener noreferrer"
                
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

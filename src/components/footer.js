import React from "react";
import './footer.css';

export default function Footer(props) {
  return (
    <footer>
      <div className="content-grid">
        <div>
          Made by:
          <ul>
            <ls>
              <a
                href="https://github.com/lindafoodev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linda
              </a>
              <span role="img">🧠</span>
            </ls>
            <ls>
              <a
                href="https://github.com/JohnLCastillo"
                target="_blank"
                rel="noopener noreferrer"
              >
                John
              </a>
              <span role="img">👨‍💻</span>
            </ls>
            <ls>
              <a
                href="https://github.com/samuelgould"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sam
              </a>
              <span role="img">🕵</span>
            </ls>
            <ls>
              <a
                href="https://github.com/ASTribble"
                target="_blank"
                rel="noopener noreferrer"
              >
                Scott
              </a>
              <span role="img">😎</span>
            </ls>
            <ls>
              <a
                href="https://github.com/TriciaF"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tricia
              </a>
              <span role="img">🤗</span>
            </ls>
          </ul>{" "}
        </div>
      </div>
    </footer>
  );
}

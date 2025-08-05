import React from "react";

// PUBLIC_INTERFACE
function ReadMePage() {
  /** Standalone static page: Read Me, as a dark themed flex layout */
  return (
    <div className="readme-root">
      <div className="readme-container">
        <h1 className="readme-title">Read Me</h1>
        <div className="readme-message-block">
          Share and spread the love! If you have any suggestions, inputs, ideas, please feel free to reach out to me.
        </div>
        <div className="readme-social-row">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-btn twitter">
            <span className="social-icon"></span>
            <span className="social-label">Twitter</span>
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="social-btn instagram">
            <span className="social-icon"></span>
            <span className="social-label">Instagram</span>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
            <span className="social-icon"></span>
            <span className="social-label">LinkedIn</span>
          </a>
          <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer" className="social-btn dribbble">
            <span className="social-icon"></span>
            <span className="social-label">Dribbble</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ReadMePage;

import React from "react";

// PUBLIC_INTERFACE
function Header({ onNav, isAuthenticated }) {
  /** Header navigation component, persistent across app screens */
  return (
    <header className="header">
      <div className="header-logo" tabIndex="0">
        <span className="logo-dot"></span>
        <span className="logo-text">KAVIA.AI</span>
      </div>
      <nav className="header-nav">
        {isAuthenticated && (
          <>
            <button onClick={() => onNav("notes")}>Notes</button>
            <button onClick={() => onNav("readme")}>ReadMe</button>
            <button onClick={() => onNav("logout")}>Logout</button>
          </>
        )}
        {!isAuthenticated && (
          <button onClick={() => onNav("login")}>Sign In</button>
        )}
      </nav>
    </header>
  );
}

export default Header;

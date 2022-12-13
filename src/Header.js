import React from "react";
import Login from "./Login"
import Logout from "./Logout"

function Header() {
  
  const isLoggedIn = false;

  return (
    <header>
      <h1>3rd party Apple Store</h1>
      <nav> 
        { isLoggedIn ? <Logout /> : <Login />}
      </nav>
    </header>
  );
}

export default Header;

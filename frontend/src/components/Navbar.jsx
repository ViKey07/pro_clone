import React from "react";
import YBC from "../assets/Asset 212.png";


function Navbar() {
    return (
<nav>
  <div class="navbar-left">
    <a href="#"><img className="nav-logo" src={YBC} alt="Logo"/></a>
  </div>
  <div className="navbar-right">
    <button className="log-in">Log In</button>
    <button className="sign-up">Sign Up</button>
  </div>
</nav>

    )
}


export default Navbar;



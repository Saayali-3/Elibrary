import React from "react";
import { Link } from "react-router-dom";
//import PropTypes from "prop-types";
import './styles/membership.css';
const NavBarView = (props) => {
  let LoginDisplay;
  if (props.user.id) {
    LoginDisplay = (
      <li className="nav-item">
        <Link to={`/users/${props.user.id}`} className="nav-link">
          Hi,{props.user.username}
        </Link>
      </li>
    );
  } else {
    LoginDisplay = (
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>
    );
  }

  return (
    <nav className="navbar navbar-expand-md  fixed-top bg-light">
      <Link to="/home" className="navbar-brand">
        Book Store
      </Link>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
          <Link to="/approve" className="nav-link">
              Approve Users
            </Link>
            </li>
          <li className="nav-item">
            <Link to="/books" className="nav-link">
              Books
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              Cart
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Checkout" className="nav-link">
              Checkout
            </Link>
          </li>
          <li className="usernameDisplay">{LoginDisplay}</li>
        </ul>
        </div>
    </nav>
  );
};
NavBarView.propTypes = {
 
};
export default NavBarView;
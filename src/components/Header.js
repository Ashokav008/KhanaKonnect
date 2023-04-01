import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div className="navbar">
        <a href="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTweev2cNZCgecH7BJbsS2WxVkVCOWIDj6M3Q&usqp=CAU"
            alt="logo"
            className="logo"
          />
        </a>
        <div>
          <ul className="nav-items">
            <li>
              <Link to="/"> Home</Link>
            </li>

            <li>
              <Link to="about"> About</Link>
            </li>

            <li>Contact</li>
          </ul>
        </div>
        {isLoggedIn ? (
          <button
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => {
              setIsLoggedIn(true);
            }}
          >
            Login
          </button>
        )}
      </div>
    </>
  );
};

export default Header;

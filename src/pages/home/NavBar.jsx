import React from "react";
import "./NavBar.css";
import ObjectLiNavItem from "../../data/navBar.json";
const NavBar = (props) => {
  //navBar.json
  const NavbarItem = ObjectLiNavItem;

  return (
    <nav className="nav__header container text-white">
      {/* phần đầu tiên */}
      <div className="flex">
        <div>Booking Website</div>
        <div className="btn__account">
          <button>Register</button>
          <button>Login</button>
        </div>
      </div>
      {/* phần 2 các navbar và icon */}
      <ul className="my-8">
        {NavbarItem.map((e) => {
          return (
            <li key={e.type} className={e.active ? "border_active" : ""}>
              <a href="/">
                <i className={`pr-2 fa-solid ${e.icon}`}></i>
                {e.type}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;

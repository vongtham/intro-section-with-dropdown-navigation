import { useState } from "react";
import "./HeaderNav.css";

function HeaderNAv() {
  const [btnMenu, setBtnMenu] = useState(false);

  const checkMenu = () => {
    setBtnMenu(!btnMenu);
  };

  return (
    <>
      <nav>
        <div className="nav-bar">
          <img src="./images/logo.svg" alt="logo" />
          <div className={btnMenu ? "overlay" : ""}></div>
          <div className= {btnMenu ? "active" : "hidden flex"}>
            <div className="dropdown menu">
              Features
              <img src="./images/icon-arrow-down.svg" alt="arrow" />
              <div className="dropdown-content">
                <div className="drop-item">
                  <img src="./images/icon-todo.svg" alt="todo" />
                  <p>Todo List</p>
                </div>
                <div className="drop-item">
                  <img src="./images/icon-calendar.svg" alt="calendar" />
                  <p>Calendar</p>
                </div>
                <div className="drop-item">
                  <img src="./images/icon-reminders.svg" alt="reminders" />
                  <p>Reminders</p>
                </div>
                <div className="drop-item">
                  <img src="./images/icon-planning.svg" alt="planning" />
                  <p>Planning</p>
                </div>
              </div>
            </div>
            <div className="dropdown menu">
              Company
              <img src="./images/icon-arrow-down.svg" alt="" />
              <div className="dropdown-content">
                <div className="drop-item">
                  <p>History</p>
                </div>
                <div className="drop-item">
                  <p>Our Team</p>
                </div>
                <div className="drop-item">
                  <p>Blog</p>
                </div>
              </div>
            </div>
            <div className="menu">Careers</div>
            <div className="menu">About</div>
            <div className="nav-btn">
              <button className="btn-login">Login</button>
              <button className="btn-register">Register</button>
            </div>
          </div>
          {/* mobile nav */}
          <div className="mobile-menu" onClick={checkMenu}>
            {btnMenu ? (
              <img src="./images/icon-close-menu.svg" alt="" />
            ) : (
              <img src="./images/icon-menu.svg" alt="open menu" />
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default HeaderNAv;

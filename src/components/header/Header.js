import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import * as Icons from "react-icons/fa";
import { navItems } from "../../data.js";
import { BsSun, BsMoon } from "react-icons/bs";

const Header = ({ myTheme, onToggleTheme, onSwitch }) => {

  const [mobile, setMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);


  useEffect(() => {
    if (window.innerWidth < 1065) {
      setMobile(true);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1065) {
        setMobile(true);
      } else {
        setMobile(false);
        setSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header data-theme={myTheme}>
      <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={() => setSidebar(false)}>
          Logo
        </Link>
        {!mobile && (
          <ul className="nav-items">
            {navItems.map((item) => {
              return (
                <li key={item.id} className={item.nName}>
                  <Link to={item.path}>
                  <i> {item.icon}</i>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
        {!mobile && (
         <div className="toggle-btn" onClick={onToggleTheme}>
         {myTheme === "dark" ? (
            <BsSun color="yellow" size={16} />
          ) : (
            <BsMoon className="dark" size={16} />
          )}
        </div>
      

        )}

        {mobile && (
          <div className="sidebar-toggle">
            {sidebar ? (
              <Icons.FaTimes
                className="sidebar-toggle-logo"
                onClick={() => setSidebar(!sidebar)}
              />
            ) : (
              <Icons.FaBars
                className="sidebar-toggle-logo"
                onClick={() => setSidebar(!sidebar)}
              />
            )}
          </div>
        )}
        
      </nav>

      <div className={ sidebar ? "sidebar active" : "sidebar"}>
          <ul className="sidebar-items">
            {navItems.map((item) => {
              return (
                <li  onClick={() => setSidebar(!sidebar)} key={item.id} className={item.sName}>
                  <Link to={item.path}>
                   <i> {item.icon}</i>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="toggle-btn" onClick={onToggleTheme}>
           {myTheme === "dark" ? (
              <BsSun color="yellow" size={16} />
            ) : (
              <BsMoon className="dark" size={16} />
            )}
          </div>
       </div>
     
    </header>
  );
};

export default Header;

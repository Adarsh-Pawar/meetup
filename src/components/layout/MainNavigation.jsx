import React, { useState } from "react";
import { useClickAway } from "@uidotdev/usehooks";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import logo from "../../assets/logo.png";
import { Squash as Hamburger } from "hamburger-react";

const MainNavigation = () => {
  const [isOpen, setOpen] = useState(false);

  const ref = useClickAway(() => {
    setOpen(false);
  });
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>
          <img src={logo} alt="Logo" />
          Meet-Up
        </div>
      </Link>

      <nav className={classes.desktopNav}>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
        </ul>
      </nav>

      <nav className={classes.hamburgerNav} ref={ref}>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          rounded
          color="white"
          size={36}
        />
        
        <div 
    className={classes.hamburgerLinks}
    style={{
      transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform 0.3s ease-out',
      overflow: 'hidden',
    }}
  >
    <ul>
      <li onClick={() => setOpen(false)}>
        <Link to="/">All Meetups</Link>
      </li>
      <li onClick={() => setOpen(false)}>
        <Link to="/new-meetup">New Meetup</Link>
      </li>
      <li onClick={() => setOpen(false)}>
        <Link to="/favourites">Favourites</Link>
      </li>
    </ul>
  </div>
        
      </nav>
    </header>
  );
};

export default MainNavigation;

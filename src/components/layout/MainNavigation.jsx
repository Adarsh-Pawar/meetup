import React, { useContext, useState } from "react";
import { useClickAway } from "@uidotdev/usehooks";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import logo from "../../assets/logo.png";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { MeetupContext } from "../../context/main";

const MainNavigation = () => {
  const { totalFavourites } = useContext(MeetupContext);
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
            <Link to="/favourites">Favourites<span className={classes.badge}>{totalFavourites}</span></Link>
            
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
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={classes.hamburgerLinks}
            >
              <ul>
                <motion.li
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1,
                  }}
                  onClick={() => setOpen(false)}
                >
                  <Link to="/">All Meetups</Link>
                </motion.li>
                <motion.li
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.2,
                  }}
                  onClick={() => setOpen(false)}
                >
                  <Link to="/new-meetup">New Meetup</Link>
                </motion.li>
                <motion.li
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.3,
                  }}
                  onClick={() => setOpen(false)}
                >
                  <Link to="/favourites">Favourites</Link>
                  <span className={classes.badge}>{totalFavourites}</span>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default MainNavigation;

import React from 'react'
import classes from './Layout.module.css'
import MainNavigation from './MainNavigation'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Layout = (props) => {
  return (
    <div>
        <MainNavigation />    
        <ToastContainer />
        <main className={classes.main}>
        
            {props.children}
        </main>
    </div>
  )
}

export default Layout
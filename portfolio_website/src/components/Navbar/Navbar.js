import React from 'react'
import cvlogo from './../../img/cvlogo.png'

import classes from './Navbar.module.css'

export default function Navbar() {
    return (

        <div className={classes.Navbar} >
           
         

                
        
        <nav >
        
            <ul>
            <img className={classes.cvlogo1} src={cvlogo} alt="logo"></img>
              
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/#about">About me</a>
                </li>
                <li>
                    <a href="/#skills">Skills</a>
                </li>
                <li>
                    <a href="/#skills">Education</a>
                </li>
                
                <li>
                    <a href="/#contact">Contact</a>
                </li>
            </ul>
        </nav>
        </div>
       
    )
}

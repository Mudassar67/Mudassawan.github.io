import React from 'react'
import pre1 from './../../img/pre1.png';
import Pageheader from '../Pageheader/Pageheader';
import classes from './About.module.css';


export default function About() {
    return (
    
            <div className={classes.AboutMe} id="about">
            <Pageheader title={'About me'}/>
            <div className={classes.Container}>
                <div className={classes.text}>
                <img className={classes.pers} src={pre1} alt="info"/>
                    <p>
                    
                      Name  :    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    Mudassar Awan <br/>
                      CNIC No :  &nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;    61101-7434091-5<br/>
                      E-mail:    &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       awanmudassar962@gmail.com<br/>
                      Phone_no:    &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;  &nbsp;&nbsp;   +923427705644<br/>
                      

                    </p>
                </div>


            </div>
        </div>
    )
}

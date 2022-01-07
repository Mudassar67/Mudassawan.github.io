import React from 'react';
import classes from  './Home.module.css';
import Typical from 'react-typical';
import mypic from './../../img/mypic.png';





export default function Home() {
    return (
        <div className={classes.Home}>
          <div className={classes.Container}>
              <div className="row">
                  <div className="col-6">
                  <h1 className={classes.name}> Mudassar Awan </h1>
                  <div className={classes.display}>
                               
            <Typical
        steps={['Hii', 3000, 'I am Web Developer!', 5000]}
        loop={10} wrapper="p"/>
        
            </div>
                  </div>
                  <div className="col-6">
                  <img className={classes.pic} src={mypic} alt="pic"></img>

              
                  </div>
              </div>
            </div>  
        
            
              

             




        </div>
    )
}

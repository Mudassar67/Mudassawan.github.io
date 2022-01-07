import React from 'react'
import Pageheader from '../Pageheader/Pageheader'
import classes from './Skills.module.css'
import codethink from './../../img/codethink.png'

const listtitlestyle={fontWeight:900,color:'#9b1FE8',marginBottom:'4px'}

const banckendskils=
<ul>
    <li style={listtitlestyle}>BACKEND</li>
    <li>JAVA -PHP -SQL </li>
</ul>
const frontendskils=
<ul>
    <li style={listtitlestyle}>FRONTEND</li>
    <li>React- HTML - CSS -Bootstrap</li>
</ul>
const othersskils=
<ul>
    <li style={listtitlestyle}>OTHERSKILLS</li>
    <li>Android App Development</li>
    <li>C#/C++/OOP</li>
    
  
</ul>



const totalskills=[banckendskils,frontendskils,othersskils,]

export default function Skills() {
    return (
        <div className={classes.skills} id="skills"> 
        <Pageheader title={'What about the skills ? '}/> 
          <div className={classes.info}>
            <p>
            Seeking a position in the field of Computer Science where I can utilize my 
            skills to further work towards personal and professional development 
            and contribute towards the prosperity of the organization.
                
            </p>
            <img className={classes.codethink} src={codethink} alt="thinking"/>
            </div>
            
            <div className={classes.Container}>
            
                {totalskills.map(skills=>{
                        return(
                            <div className={classes.List}>
                                {skills}
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

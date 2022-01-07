import React from 'react'
import { AiFillFacebook ,AiOutlineWhatsApp ,AiFillTwitterCircle ,AiFillInstagram } from "react-icons/ai";
import classes from './Contact.module.css'


const handleURL=(url)=>
{
    return ()=>window.open(url,"_blank")
}
export default function Contact() {
    return (
        <div className={classes.Contact} id="contact">
            <div className={classes.Contacticon}>
            <AiFillFacebook  color="white" size="50px" style={{padding:'1%'}} onClick={handleURL('http://www.facebook.com')}/>
            <AiOutlineWhatsApp  color="white" size="50px" style={{padding:'1%'}} onClick={handleURL('https://www.whatsapp.com/')}/>
            <AiFillTwitterCircle  color="white" size="50px" style={{padding:'1%'}} onClick={handleURL('http://www.twitter.com')}/>
            <AiFillInstagram  color="white" size="50px" style={{padding:'1%'}} onClick={handleURL('http://www.instagram.com')}/>
            </div>

            <div className={classes.Contactform}>
                    


            <form> 
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div class="form-group">
  <label for="exampleFormControlInput1">Phone Number</label>
    <input type="number" class="form-control" />  
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" ></textarea>
  </div>
</form>


                </div>
        </div>
    )
}






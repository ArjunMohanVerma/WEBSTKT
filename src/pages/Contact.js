import React, { useState } from "react";
import Navbar from "./Navbar";
import img2 from"../Assets/img2.jpg"
import { useRef } from "react";
import contact1 from "../Assets/contact1.jpg";
import Footer from "./Footer";
import vyleeqr from"../Assets/vyleeqr.png";
import emailjs from '@emailjs/browser';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn
  
} from 'mdb-react-ui-kit';



export default function Contact(){

  function handleClick(){
    
    document.getElementById("name").innerHTML="";
    document.getElementById("mob").innerHTML="";
    document.getElementById("mail").innerHTML="";
    document.getElementById("msg").innerHTML="";
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_476web2', 'template_eraysr9', form.current, {
        publicKey: 'CxAgOyvdjPRMfCtC8',
      })
      .then(
        () => {
          alert('Message Sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  const cont={
    display:"inline-block",
    height:"40vh",
    width:"35vw",
    marginLeft:"3vw",
    float:'left',
    fontSize:"2vw",
  }
  const cont1={
    backgroundImage: `url(${contact1})`,
    boxShadow: '8px 8px 8px 8px black',
    display:"inline-block",
    overflow:"hidden",
    width:'40%',
    height:'75vh',
    marginRight:"3vw",
    marginTop:"3vw",
    borderRadius:"20px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

  }
  const lbl={
    fontSize:'25px',
    color:'black',
    padding:'2vw',
    width:"3vw"
  }
  const btn={
    width:"120px",
    height:"50px",
    borderRadius:"5px",
    fontSize:"25px",
    backgroundColor:"blue",
    color:"white",
    boxShadow: '2px 2px 2px 2px black',
    marginRight:"30px"

  }
  return(
    <>
    <div style={{backgroundColor:'rgb(90, 0, 90)' ,marginTop:"0px",overflow: "hidden"}}>
      <h2 style={{fontSize:'4vw'}}><u>Contact Us</u></h2>
      <div style={{display:"flex",overflow: "hidden"}}>
        <div style={{width:"60%",paddingRight:"2vw"}}>
        <p style={{fontSize:'2vw'}}> 
        We are dedicated to transforming the salon industry by seamlessly connecting salon owners with customers through innovative and convenient solutions.
        Our platform acts as a bridge, offering exceptional salon services to discerning customers who seek high-quality experiences.
        </p>
        <div>
          <p style={{fontSize:"2vw"}}>Connect with us on Instagram</p><br/>
          <img src={vyleeqr} style={{height:"15vw", width:"15vw",boxShadow: '5px 5px 5px 5px black',borderRadius:"5px"}}/>
    
        <h2 style={{fontSize:"2vw"}}><u>Address:</u></h2>
        <p style={{fontSize:"1vw"}}>
        STKT BEAUTY AND TECHNOLOGY PVT LTD<br/>
        FF-229, FIRST FLOOR, TOWER A ANSAL API, PALAM<br/>
        CORPORATEPLAZA, GURUGRAM, HARYANA 122017<br/>
        PHONE:9311220116, EMAIL: SUPPORT@VYLEESALON.IN<br/>
        CIN No.:U96905HR2024PTC119569
        </p>
        </div>
        </div>
        
        <div style={cont1}><br/>
         <p style={{ fontSize:"3vw",color:"black",width:"16vw",margin: "0 auto",marginTop:"20px",}}><u>Contact Us</u></p>
          <br/><br/>
          <div style={{overflow: "hidden"}}>
   

            <form ref={form} onSubmit={sendEmail}>
              <table style={{marginLeft:"5vw"}}>
              <tr>
              <td><label style={{fontSize:"1.5vw"}}>Name : <br/></label></td>
              <td><input style={{boxShadow:"1px 1px 1px black"}} type="text" placeholder="Enter Name" id="name" name="user_name"></input></td>
              </tr><br/><br/>
              <tr>
              <td><label style={{fontSize:"1.5vw"}}>Mobile : <br/></label></td>
              <td><input style={{boxShadow:"1px 1px 1px black"}} type="number" placeholder="Enter Mobile" id="mob" name="user_mobile"></input></td>
              </tr><br/><br/>
              <tr>
              <td><label style={{fontSize:"1.5vw"}}>Email : </label></td>
              <td><input style={{boxShadow:"1px 1px 1px black"}} type="email" placeholder="Enter Mail" id="mail" name="user_email"></input></td>
              </tr><br/><br/>
              <tr>
              <td><label style={{fontSize:"1.5vw"}}>Message : <br/></label></td>
              <td><textarea style={{boxShadow:"1px 1px 1px black", resize:"none"}}name="message" rows="5" cols="30" id="msg" placeholder="Enter Your Message Here" ></textarea></td>
              </tr><br/>
              </table>
              <input type="submit" onClick={handleClick}  value="Send" style={{boxShadow:"1px 1px 1px black",marginLeft:"3vw",width:"8vw", height:"4vw",color:"white", backgroundColor:"blueviolet",fontSize:"1.5vw",marginTop:"3vw",borderRadius:"1.5vw"}}/>
            </form>
       
            
            </div>
            </div>


        </div>
        </div>
</>
)};



import React from 'react';
import './Footer.css';
import facebook from"../Assets/facebook.png";
import instagram from"../Assets/instagram.png";
import youtube from"../Assets/youtube.png";
import {Link} from 'react-router-dom';



function Footer(){
    const images={
        height:"2vw",
        width:"3vw",
        paddingLeft:"1vw",
    }
    return(
        <>
        <div className='container' style={{ width:'97vw' ,height:"5vw", marginLeft:'0vw'}}>

            <div style={{marginBottom:"1vw"}}>
            
            <p style={{float:"left",fontSize:"2vw",marginTop:"0.1vw",marginLeft:"1vw",display:"inline-block",textShadow:"2px 2px purple"}}>
                STKT<br/>
            <span style={{fontSize:"0.9vw",float:"left",textShadow:"3px 3px purple"}}>Beauty and Technology</span>
            </p>


            <p>
            <p style={{display:"inline-block",fontSize:"0.9vw"}}>STKT BEAUTY AND TECHNOLOGY PVT LTD<br/>
            PHONE:9311220116, EMAIL:<Link to="support@vyleesalon.in" target='"_blank' style={{color:"white",fontSize:"1vw",textDecoration:"none"}}> &nbsp;support@vyleesalon.in</Link></p>
            
            <div style={{display:"inline-block",float:"right",marginRight:"1vw",marginTop:"1vw"}}>
            
            <Link to="https://www.facebook.com/profile.php?id=61561414439963" target='"_blank'>
            <img src={facebook} style={images}/> 
            </Link>
            <Link to="https://www.youtube.com/@STKTBeautyandTechnology" target='"_blank'>
            <img src={youtube} style={images}/>
            </Link>
            <Link to="https://www.instagram.com/vylee.in/" target='"_blank'>
            <img src={instagram} style={images}/>
            </Link>
            </div>

            </p >
            </div>
           
        </div>
        </>
    )

}

export default Footer;
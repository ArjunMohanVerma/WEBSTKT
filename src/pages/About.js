import Navbar from "./Navbar"
import "./About.css";
import video from './video.mp4';
import Footer from "./Footer";
import {ReactTyped} from "react-typed";

export default function About() {
  const stl={
    width:"50%",
    background:"white",
    color:"black",
    borderRadius:"10px",
    boxShadow: '8px 8px 8px 8px black',
    height:"25vh"
  }
 return (
 <>

 <div className="about" >
      <h1 style={{fontSize:"3vw",marginTop:"0px"}}>About Us</h1>
      <p style={{fontSize:"2vw"}}>Find Top-Rated{" "}
      <ReactTyped strings={["Salons and Exclusive Deals with VYLEE"]} typeSpeed={50} loop backSpeed={30}/></p>
      <br/>
      <div style={{display:"flex"}}>
      <p style={{fontSize:"22px",width:"100%"}}>At STKT Beauty and Technology, we’re passionate about revolutionizing the salon industry with our innovative platform, VYLEE. VYLEE connects salon owners with customers, making it easier for everyone to access and enjoy highly qualified salon services. VYLEE serves as a seamless bridge between exceptional salon services and customers seeking an empowering and luxurious beauty experience.
      For clients, VYLEE offers an opportunity to showcase their exquisite services to a broader audience, attracting customers who appreciate and seek the highest standards of beauty care. Our platform provides a seamless interface for salons to manage appointments, promote special offers, and engage with a clientele that values luxury and refinement.
      For customers, VYLEE is the ultimate destination to explore a curated selection of luxury salons renowned for their vibrant, youthful, luminous, elegant, and exotic beauty services.</p><br/>
      </div><br/>
      <div style={{display:"flex",gap:"15vw"}} >
        <div className="content" style={stl}> 
        <h2 style={{fontSize:"25px"}}>Our Vision</h2>
        <p style={{fontSize:"20px"}}>To be the leading digital platform that transforms
            the salon industry by empowering salon owners
                and providing customers with exceptional beauty
            experiences.</p>

        </div>
        <div className="content" style={stl}>
        <h2 style={{fontSize:"25px"}}>Our Mission</h2>
        <p style={{fontSize:"20px"}}>To revolutionize the salon industry by seamlessly
            connecting salon owners with discerning
            customers through innovative, convenient, and
            high-quality digital solutions, ensuring access to
            top-notch salon services for everyone.</p>

        </div>

      </div>
    
      <br />
      {/* <p>
        <h2 style={{fontSize:"30px"}}>Our Vision</h2>
        <p style={{fontSize:"22px"}}>To be the leading digital platform that transforms
            the salon industry by empowering salon owners
                and providing customers with exceptional beauty
            experiences.</p>
      </p>
      <br />
      <p>
        <h2 style={{fontSize:"30px"}}>Our Mission</h2>
        <p style={{fontSize:"22px"}}>To revolutionize the salon industry by seamlessly
            connecting salon owners with discerning
            customers through innovative, convenient, and
            high-quality digital solutions, ensuring access to
            top-notch salon services for everyone</p>
      </p> */}
      <br />

      {/*video section here */}
      <h3 style={{fontSize:"22px"}}>Browse through some of our videos</h3>
      <br />
      <div className="videos" style={{width:'97vw'}}>
      <video
          width="560"
          height="315"
          src={video}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen controls
        ></video>
        <video
          width="560"
          height="315"
          src={video}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen controls
        ></video>
        <video
          width="560"
          height="315"
          src={video}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen controls
        ></video>
        <video
          width="560"
          height="315"
          src={video}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen controls
        ></video>
        {/*<iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/DFRdZZYwljc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pfECwILwlrg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/3pzKY6tqf9c"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>*/}
      </div>
    </div>
 </>
 )
}

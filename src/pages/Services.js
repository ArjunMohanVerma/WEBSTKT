import Navbar from "./Navbar"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from "./Product";
import { productData, responsive } from "./Data";
import React from "react";


export default function Services() {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <>
    
    <div className="App" style={{backgroundColor:"grey", overflow:"hidden"}}>
      <h1 style={{fontSize:"3vw"}}>Our Services</h1>
      <div>
      <Carousel style={{width:"50vw",height:"10vh",backgroundColor:"black"}} showDots={true} responsive={responsive}>
        {product}
      </Carousel>
      </div><br/>
      
      <div style={{height:"15vh",width:"92vw",marginLeft:"2.8vw",marginTop:"2vw",backgroundColor:"rgba(255, 255, 255, .5)",borderRadius:"2vw"}}>
      
      <h1 style={{float:"center",marginTop:"2vw",color:"black", fontSize:"2vw"}}>Additional Infromation</h1>
      
        
        <p style={{color:"black",fontSize:"1vw"}}>Effortless onboarding lets you showcase your salon's strengths quickly.
            Dedicated support ensures you get the most out of VYLEE.
            VYLEE equips salons for success in the digital age, bringing new clients, streamlining operations, and enhancing client engagement.
        </p>
      
      </div>
      <br/><br/><br/>
      </div>
      
    
    </>
  );
  
    
  }

// import Navbar from "./Navbar"
// import Footer from"./Footer";
// import img2 from "../Assets/img2.jpg";
// import CardContent from '@mui/material/CardContent';
// import Button from 'react-bootstrap/Button';
// import { Card } from "../pages/Card";
// import SO from "../Assets/SO.jpg"
// import CE from "../Assets/CE.jpg"
// import apt from "../Assets/apt.jpg"
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import Product from "./Product";
// import { productData, responsive } from "./Data";
// import CA from "../Assets/CA.jpg"



// export default function Services() {
//   const product = productData.map((item) => (
//     <Product
//       name={item.name}
//       url={item.imageurl}
//       price={item.price}
//       description={item.description}
//     />
//   ));

//   return (
//     <>
//     <Navbar/>
//     <div className="App" style={{height:"100vh",backgroundColor:"grey", overflow:"hidden"}}>
//       <h1 style={{fontSize:"3vw"}}>Our Services</h1>
//       <Carousel style={{width:"50vw",height:"10vw",backgroundColor:"black"}} showDots={true} responsive={responsive}>
//         {product}
//       </Carousel>
//       <div style={{height:"8vw",width:"92vw",marginLeft:"2.8vw",marginBottom:"1vw",backgroundColor:"rgba(255, 255, 255, .5)",borderRadius:"2vw"}}>
      
//       <h1 style={{float:"center",marginTop:"2vw",color:"black", fontSize:"2vw"}}>Additional Infromation</h1>
      
        
//         <p style={{color:"black",fontSize:"1vw"}}>Effortless onboarding lets you showcase your salon's strengths quickly.
//             Dedicated support ensures you get the most out of VYLEE.
//             VYLEE equips salons for success in the digital age, bringing new clients, streamlining operations, and enhancing client engagement.
//         </p>
      
//       </div>
//     </div>
    
//     </>
//   );
  
    
//   }



// {/*export default function Services() {
//   const stl=
//       {
//           height: '100%',
//           display: 'inline-block',
//           flexDirection: 'column',
//           alignItems: 'flex-start',
//         }
//         const stl2={
//           height: '100vh',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           backgroundColor: '#faf9f6',
//         }
//         var settings = {
//           dots: true,
//           infinite: true,
//           speed: 500,
//           slidesToShow: 1,
//           slidesToScroll: 1
//         };
//     return (
//     <>
//     <Navbar/>
//     <div style={{backgroundColor: "rgba(128, 0, 128, 0.5)", marginTop:"0vw"}}>
//     <h1 style={{fontSize:"45px"}}><u>Our Services!</u></h1>
//     <div className="App">
//       <div className="col" style={stl}>
      
//       <div style={{display:"inline-block"}}>
//       <Card
//         imgSrc={CA}
//         imgAlt="Clien Acquisition"
//         title="Client Acquisition"
//         description="Gain visibility to a pre-qualified audience actively seeking top-tier services. Leverage targeted marketing tools to attract new customers and incentivize existing ones. Build brand recognition with a customizable salon profile."
//         buttonText="Learn More"
//         link="card2"
//       /></div>
//       <div style={{display:"inline-block"}}>
//       <Card
//         imgSrc={CE}
//         imgAlt="Client Engagement"
//         title="Costumer Engagement"
//         description="Foster trust through a transparent review system and facilitate positive interaction with clients, building loyalty and repeat business.  insights to optimize business strategies.Build brand recognition with a customizable salon profile."
//         buttonText="Learn More"
//         link="card2"
//       /></div>
//       <div style={{display:"inline-block"}}>
//       <Card
//         imgSrc={apt}
//         imgAlt="Appointment Schedule"
//         title="Schedule Appointment"
//         description="Adopting us lets your salon business connect with the digital world. As a result, it brings an automated booking system that lets your clients book appointments right from the phone without any middleman. "
//         buttonText="Learn More"
//         link="card2"
//       /></div>
//       <div style={{display:"inline-block"}}>
//       <Card
//         imgSrc={apt}
//         imgAlt="Appointment Schedule"
//         title="Costumer Services"
//         description="Adopting us lets your salon business connect with the digital world. As a result, it brings an automated booking system that lets your clients book appointments right from the phone without any middleman. "
//         buttonText="Learn More"
//         link="card2"
//       /></div>
      
      
//     </div>
//     </div>
//     </div>
//     </>
    
//     );
//   }*/}
  
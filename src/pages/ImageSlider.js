import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: '100% 100%',
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
   height:"60vh",
}
const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1675034743339-0b0747047727?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    
  },
  {
    url: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    url: 'https://images.unsplash.com/photo-1633681122703-3ce20f1e978d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    url: 'https://img.freepik.com/free-photo/interior-latino-hair-salon_23-2150555185.jpg?t=st=1722849263~exp=1722852863~hmac=fe73ea6232db341e49294fe62137939fe0b105440e0ba2e02e1edb1a809893a2&w=1060',
  },
  {
    url: 'https://images.unsplash.com/photo-1675034743433-bdc9aee1cafc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

 const ImageSlider = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default ImageSlider;

// import { useState } from "react";

// const slideStyles = {
//   width: "100%",
//   height: "100%",
//   borderRadius: "10px",
//   backgroundSize: "cover",
//   backgroundPosition: "center",
// };

// const rightArrowStyles = {
//   position: "absolute",
//   top: "50%",
//   transform: "translate(0, -50%)",
//   right: "32px",
//   fontSize: "45px",
//   color: "#fff",
//   zIndex: 1,
//   cursor: "pointer",
//   color:"black",
// };

// const leftArrowStyles = {
//   position: "absolute",
//   top: "50%",
//   transform: "translate(0, -50%)",
//   left: "32px",
//   fontSize: "45px",
//   color: "#fff",
//   zIndex: 1,
//   cursor: "pointer",
//   color: "black",
// };

// const sliderStyles = {
//   position: "relative",
//   height: "100%",
// };

// const dotsContainerStyles = {
//   display: "flex",
//   justifyContent: "center",
// };

// const dotStyle = {
//   margin: "0 3px",
//   cursor: "pointer",
//   fontSize: "20px",
// };

// const ImageSlider = ({ slides }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const goToPrevious = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };
//   const goToNext = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };
//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };
//   const slideStylesWidthBackground = {
//     ...slideStyles,
//     backgroundImage: `url(${slides[currentIndex].url})`,
//   };

//   return (
//     <div style={sliderStyles}>
//       <div>
//         <div onClick={goToPrevious} style={leftArrowStyles}>
//           ❰
//         </div>
//         <div onClick={goToNext} style={rightArrowStyles}>
//           ❱
//         </div>
//       </div>
//       <div style={slideStylesWidthBackground}></div>
//       <div style={dotsContainerStyles}>
//         {slides.map((slide, slideIndex) => (
//           <div
//             style={dotStyle}
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//           >
//             ●
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;

import React from "react";


export default function Product(props) {
  const desk1={
    display:"none",
    height:"45vh",
  }

  function handleClick(){
    
    var elms = document.getElementsByClassName("desk");
    Array.from(elms).forEach((x) => {
      if (x.style.display === "none") {
        x.style.display = "block";

      } else {
        x.style.display = "none";
      }
    })

  }



  return (
    <div className="card">
      <img className="product--image" style={{height:"15vw", width:"15vw"}} src={props.url} alt="product image" />
      <h2>{props.name}</h2>
      <p className="desk" style={desk1}>{props.description}</p>
      <p>
        <button id="btn" style={{backgroundColor:"blue", color:"white"}} onClick={handleClick}>Explore More!</button>
      </p>
    </div>
  );
}

// import React from "react";

// export default function Product(props) {
//   return (
//     <div className="card">
//       <img className="product--image" style={{height:"15vw", width:"15vw"}} src={props.url} alt="product image" />
//       <h2>{props.name}</h2>
      
//       <p>{props.description}</p>
//       <p>
//         <button style={{backgroundColor:"blue", color:"white"}}>Explore More!</button>
//       </p>
//     </div>
//   );
// }
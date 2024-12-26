import { useEffect, useState } from "react";

const data = [
  "https://images.unsplash.com/photo-1480618757544-81c31930008e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hyaXN0bWFzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1545048702-79362596cdc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNocmlzdG1hc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1511268011861-691ed210aae8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hyaXN0bWFzfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1483373018724-770a096812ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNocmlzdG1hc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1522448746354-da4936934201?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNocmlzdG1hc3xlbnwwfHwwfHx8MA%3D%3D",
];
const ImageSlider = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  useEffect(()=>{
    const timer =setTimeout(()=>{
        handleNext();
    },5000)
    return (
        ()=>{
        clearTimeout(timer)
        }
    )
  } ,[activeImageIndex])
  
  const handleNext = () => {
    if(activeImageIndex ===4 ){
        setActiveImageIndex((activeImageIndex + 1 )%data.length)
    }else{
        setActiveImageIndex(activeImageIndex + 1);
    }
    
  };
  const handlePrev = () => {
    if(activeImageIndex === 0){
        setActiveImageIndex(data.length-1)
    }else{
    setActiveImageIndex(activeImageIndex-1)
    }
  }
  return (
    <div
      style={{
        textAlign: "center",
        position: "relative",
        width: "300px",
        margin: "0 auto",
      }}
    >
      <h1>Image Carousel</h1>
      <div style={{ position: "relative", display: "inline-block" }}>
        <button
          style={{
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translate(-100%, -50%)",
          }}
          onClick={handlePrev}
        >
          Previous
        </button>
        <img
          src={data[activeImageIndex]}
          alt="carousel"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
        <button
          style={{
            position: "absolute",
            top: "50%",
            right: "0",
            transform: "translate(110%, -50%)",
          }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;

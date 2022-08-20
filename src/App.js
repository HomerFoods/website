import React from "react";
import Support from "./Components/Support";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Services from "./Components/Services";
import Slider from "./Components/SliderComponent";
import Testimonial from "./Components/Testimonial";
import Reviews from "./Components/Reviews";
import Newsletter from "./Components/Newsletter";
import Waitlist from "./Components/Waitlist";
import WaitlistHeader from "./Components/WaitlistHeader";

function App() {
  return (
    <div className='mt-0 font-poppins'>
      <WaitlistHeader/>
      <Waitlist/>
  {/* 
  <NavBar/>
   <Header/>
    <Support/>
    <Services/>
    <Slider/>
    <Testimonial/>
    <Reviews/>
    <Newsletter/>*/}
    <Footer/>
    </div>
  );
}

export default App;

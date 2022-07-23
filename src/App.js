import React from "react";
import About from "./Components/About";
import Chef from "./Components/Chef";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import UsersSection from "./Components/UsersSection";
import Video from "./Components/Video";

function App() {
  return (
    <div className='mt-0'>
    <Header/>
    <UsersSection/>
    <Chef/>
   <About/>
   <Video/>
   <Footer/>
    </div>
  );
}

export default App;

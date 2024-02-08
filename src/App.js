import React from 'react';
import Navbar from './components/Navbar'
import image01 from './components/assets/image01.png'
import  Hero from './components/Hero'



function App() {
  return (
    <div>
    
    <div style= {{
      width:'1440px',
      height: '900px',
      top:'78px',
      left: '554px',
      object: 'cover',
      backgroundColor: '#347890',
      backgroundImage: `url(${image01})`,
      backgroundSize: 'cover',   
    }}>  <Navbar/> </div>

    <Hero/>

    
    
      
    </div>
  );
}

export default App;

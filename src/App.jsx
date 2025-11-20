import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import TrustedBy from './TrustedBy'
import Services from './Components/Services'
import OurWork from './Components/OurWork'
import Teams from './Components/Teams'
import ContactUs from './Components/ContactUs'

function App() {

  const[theme,setTheme]= useState(localStorage.getItem('theme')? localStorage.getItem('theme'):'light')

  return (
    <div className=' dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero/>
      <TrustedBy/>
      <Services/>
      <OurWork/>
      <Teams/>
      <ContactUs/>
    </div>
  )
}

export default App

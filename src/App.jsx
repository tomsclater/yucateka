import React from 'react'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Navbar from './Components/Navbar/Navbar'
import Title from './Components/Title/Title'
import About from './Components/About/About'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <div className="container">
          <Title subTitle='Our Gallery' title='What We Offer'/>
          <Programs/>
          <About/>
        </div>
    </div>
  )
}

export default App
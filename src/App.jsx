import React from 'react'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Navbar from './Components/Navbar/Navbar'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <div className="container">
          <Title subTitle='Our Services' title='What We Offer'/>
          <Programs/>
          <About/>
          <Title subTitle='Gallery' title='View Our Collection'/>
          <Gallery/>
        </div>
    </div>
  )
}

export default App
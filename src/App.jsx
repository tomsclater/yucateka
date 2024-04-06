import React from 'react'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <div className="container">
          <Programs/>
        </div>
    </div>
  )
}

export default App
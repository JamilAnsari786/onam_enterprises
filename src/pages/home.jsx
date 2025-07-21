import React from 'react'
import Home from '../components/Homepage/homepage'
import Footer from '../components/common/footer/footer'
import Navbar from '../components/common/navbar/navbar'

const home = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default home

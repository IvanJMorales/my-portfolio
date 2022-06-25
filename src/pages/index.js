import * as React from 'react'

//css
import '../styles/index.css'

//Components
import Header from '../components/Header'
import Footer from '../components/Footer'
import Particle from '../components/Particle.js'

const IndexPage = () => {
  return (
    <div className="home">
      <Header />
      <Particle />
      <Footer />

    </div>
  )
}
export default IndexPage

import * as React from 'react'

//css
import '../styles/index.css'

//Components
import Header from '../components/header'
import Footer from '../components/Footer'
import Particle from '../components/Particle.js'
import ProjectsGrid from '../components/projectsGrid'
import CompaniesGrid from '../components/CompaniesGrid.js'

const IndexPage = () => {
  return (
    <div className="home">
      <Header />
      <Particle />
      <CompaniesGrid />
      <ProjectsGrid />
      <Footer />

    </div>
  )
}
export default IndexPage

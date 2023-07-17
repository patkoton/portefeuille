import React from 'react'
import Layout from '../layout/Layout2'
import About from '../components/About2'
import Work from '../components/Work'
import Skills from '../components/Skills'
import Contact from '../components/Contact2'
import Projects from '../components/Projects2'

const Home2 = () => {
  return (
    <div className='font-preahvihear bg-darkBlue'>
      <Layout>
        <About />
        <Work />
        <Skills />
        <Projects />
        <Contact />
      </Layout>
    </div>
  )
}

export default Home2

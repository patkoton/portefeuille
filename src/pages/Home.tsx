import About from '../components/About'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Testimonial from '../components/Testimonial'
import Layout from '../layout/Layout'

const Home = () => {
  return (
    <div>
      <Layout>
        <About />
        <Services />
        <Projects />
        <Testimonial />
      </Layout>
    </div>
  )
}

export default Home

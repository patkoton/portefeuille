import About from '../components/About'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Layout from '../layout/Layout'

const Home = () => {
  return (
    <div>
      <Layout>
        <About />
        <Services />
        <Projects />
      </Layout>
    </div>
  )
}

export default Home

import About from '../components/About'
import Services from '../components/Services'
import Layout from '../layout/Layout'

const Home = () => {
  return (
    <div>
      <Layout>
        <About />
        <Services />
      </Layout>
    </div>
  )
}

export default Home

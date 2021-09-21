import Layout from '../components/Layout'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../styles/globals.scss'
import '../pages/_document'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      {/* <Footer /> */}
    </Layout>
  )
}

export default MyApp

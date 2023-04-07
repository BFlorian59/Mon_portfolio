import '@/styles/globals.css'
import Navbar from '@/components/nav-bar'

export default function App({ Component, pageProps }) {
  return(
    <>
      <Navbar/>
      <Component {...pageProps} />
    </> 
  ) 
}

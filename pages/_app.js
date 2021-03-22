import '../styles/globals.css'
import '../styles/slider.css'
//import { useEffect } from 'react'
//import { useRouter } from 'next/router'

//import * as gtag from '../lib/gtag'

//const router = useRouter()

function MyApp({ Component, pageProps }) {
  // GoogleAnalytics
  // useEffect(() => {
  //   if (!gtag.existsGaId) {
  //     return
  //   }

  //   const handleRouteChange = (path) => {
  //     gtag.pageview(path)
  //   }

  //   router.events.on('routeChangeComplete', handleRouteChange)
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }, [router.events])

  return <Component {...pageProps} />
}

export default MyApp

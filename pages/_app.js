import '../styles/globals.css'
import '../styles/slider.css'

import React from 'react'
import Router from 'next/router'
import { useEffect } from 'react'

import * as gtag from '../lib/gtag'

function MyApp({ Component, pageProps }) {
  // GoogleAnalytics
  useEffect(() => {
    if (!gtag.existsGaId) {
      return
    }

    const handleRouteChange = (path) => {
      gtag.pageview(path)
    }

    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [Router.events])

  return <Component {...pageProps} />
}

export default MyApp

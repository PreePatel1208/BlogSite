// import '../styles/globals.css'
import '../styles/mainStyle.css'
import 'draft-js/dist/Draft.css';


import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

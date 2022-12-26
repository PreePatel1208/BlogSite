import '../styles/mainStyle.css'
import type { AppProps } from 'next/app'
// import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import './../assets/css/singlepost.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min';


function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}><Component {...pageProps} /></Provider>
   
}

export default MyApp

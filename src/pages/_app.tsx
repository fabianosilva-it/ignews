
import {AppProps} from 'next/App'

import '../styles/global.scss'

export default function App({ Component, pageProps }:AppProps) {
  return <Component {...pageProps} />
}

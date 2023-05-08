
import {AppProps} from 'next/App'

export default function App({ Component, pageProps }:AppProps) {
  return <Component {...pageProps} />
}

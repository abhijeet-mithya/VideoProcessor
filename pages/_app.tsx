import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:9000";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

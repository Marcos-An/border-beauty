import '../../styles/globals.scss'
import Header from '../Components/Header'
import { SquareContextProvider } from '../Contexts/SquareContext'

function MyApp({ Component, pageProps }) {
  return (
    <SquareContextProvider>
      <div>
        <Header />
        <Component {...pageProps} />
      </div>
    </SquareContextProvider>
  )
}

export default MyApp

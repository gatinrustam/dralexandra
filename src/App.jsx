import { BunnerSection } from './components/BunnerSection/BunnerSection'
import { Header } from './components/Header/Header'

function App() {
  return (
    <>
      <Header />

      <div className="container container--main">
        <BunnerSection />
      </div>
    </>
  )
}

export default App

import './App.css'
import Hero from './components/hero.tsx'
import Header from './components/navbar.tsx'
import HowSection from './components/how-section.tsx'


function App() {

  return (
    <div className='landing-page'>

      <Header/>
      <Hero/>
      <HowSection/>

    </div>
  )
}

export default App

import './App.css'
import Hero from './components/hero.tsx'
import Header from './components/navbar.tsx'
import HowSection from './components/how-section.tsx'
import Different from './components/different.tsx'
import Mentors from './components/mentors.tsx'

function App() {

  return (
    <div className='landing-page'>

      <Header/>
      <Hero/>
      <HowSection/>
      <Different/>
      <Mentors/>

    </div>
  )
}

export default App

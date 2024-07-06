
import './App.css'
import AboutPage from './component/About'
import Home from './component/HomePage'

import Menubar from './component/menu'

function App() {
  return (
    <>
    <section>
    <header> <Menubar/> </header>
    </section>

    <section className='mt-24'>
    <Home/>
    </section>

    <section>
    <AboutPage/>
    </section>

    <section></section>
    <section></section>
    
    
    
    
    
  </>
  )
}

export default App

import './App.css'
import { Navbar } from './components/Navbar'
import { Header } from './components/Header'
import { Contact } from './components/Contact'
import { Products } from './components/Products'
import { Brands } from './components/Brands'
import { About } from './components/About'
import { Footer } from './components/Footer'

export default function App() {
  return(
    <div className='absolute top-0 bg-Blue'>
      <Navbar/>
      <Header/>
      <Contact/>
      <Products/>
      <Brands/>
      <About/>
      <Footer/>
    </div>
  )
}
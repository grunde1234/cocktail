import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CockTails from './components/CockTails'
import About from './components/About';
import Art from './components/Art';
import Menu from './components/Menu';
import Contact from './components/Contact';

gsap.registerPlugin(ScrollTrigger, SplitText);//not automatically active so needs to be registered

//* ScrollTrigger - lets us animate elements based on its scroll position
//* SplitText - split texts into individual entities for more details

const App = () => {
  return (
   <main>
    <Navbar />
    <Hero />
    <CockTails />
    <About />
    <Art />
    <Menu />
    <Contact />
   </main>
  )
}

export default App

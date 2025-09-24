import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CockTails from './components/CockTails'
import About from './components/About';

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
   {/*  <div className='h-dvh bg-black'></div> */}
   </main>
  )
}

export default App

import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

gsap.registerPlugin(ScrollTrigger, SplitText);//not automatically active so needs to be registered

//* ScrollTrigger - lets us animate elements based on its scroll position
//* SplitText - split texts into individual entities for more details

const App = () => {
  return (
   <main>
    <Navbar />
    <Hero />
    <div className='h-dvh bg-black'></div>
   </main>
  )
}

export default App

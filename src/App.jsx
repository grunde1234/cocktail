import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger, SplitText);//not automatically active so needs to be registered

//* ScrollTrigger - lets us animate elements based on its scroll position
//* SplitText - split texts into individual entities for more details

const App = () => {
  return (
    <div className='flex-center h-[100vh]'>
    <h1 className='text-3xl font-bold text-indigo-300'>
        Hello GSAP
    </h1>
    </div>
  )
}

export default App

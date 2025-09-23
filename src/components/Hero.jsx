 import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { useRef } from "react"
import {useMediaQuery} from "react-responsive"
const Hero = () => {
    const videoRef = useRef();

    const isMobile = useMediaQuery({maxWidth: 767})

    useGSAP(()=>{
        //* SPLITTEXT
        const heroSplit = new SplitText('.title', {
            type: 'chars, words' 
        });
        const paragraphSplit = new SplitText('.subtitle', {
            type: 'lines' 
        });

        heroSplit.chars.forEach((chars) => chars.classList.add('text-gradient'))

         gsap.from(heroSplit.chars,{
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',/* smooth */
            stagger: 0.05
         });

         gsap.from(paragraphSplit.lines,{
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1,//stat one second after the headline animation finishes
         })

         gsap.timeline({
            scrollTrigger:{
                trigger: '#hero',/* WATCH */
                start: 'top top',
                end: 'bottom top',
                scrub: true,/* SMOOTH */
            }
         })
         .to('.right-leaf',{
            y: 200
         }, 0)
         .to('.left-leaf',{
            y: -200
         }, 0)

         const startValue = isMobile ? 'top 50%' : 'center 60%';
         const endValue = isMobile ? '120% top' : 'bottom top'

        const tl = gsap.timeline({
             scrollTrigger:{
               trigger: 'video',
               start: startValue,
               end: endValue,
               scrub: true,
               pin: true,
            }
         })
         /* .fromTo(videoRef.current,{
            currentTime: 0,
            scale: isMobile ? 1.2 : 1.5,
            opacity: 0.5
         },{
            currentTime: 10,
            scale: 1,
            opacity: 1,
            ease: 'none'
         }) */

            videoRef.current.onloadedmetadata = ()=>{
               tl.to(videoRef.current,{
                  currentTime: videoRef.current.duration
               })
            }
    },[])

  return (
    <>
    <section id='hero' className='noisy'>
    {/* TITLE */}
     <h1 className='title'>MOJITO</h1>
     {/* IMAGE */}
     <img src="/images/hero-left-leaf.png" alt="left-leaf" className='left-leaf'/>
     <img src="/images/hero-right-leaf.png" alt="right-leaf" className='right-leaf'/>

     <div className='body'>
        <div className='content'>
        <div className='space-y-5 hidden md:block'>
        <p>Cool. Crisp. Classic.</p>
        <p className='subtitle'>
            Sip the Spirit <br/> of Summer 
        </p>
        </div>
        <div className='view-cocktails'>
           <p className='subtitle'>
             Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipies - designed to delight your senses.
           </p>
           <a href="#cocktails">View Cocktails</a>
        </div>
        </div>
     </div>
    </section>
    <div className="video absolute inset-0">{/* ABSOLUTE dont interact with other components on the screen- */}
        <video ref={videoRef} src="/videos/output.mp4" playsInline preload="auto"></video>
    </div>
    </>
  )
}

export default Hero
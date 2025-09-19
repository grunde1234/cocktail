## ANIMATION
* spliteText
```js
const Hero = () => {
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
    },[])
```
## gsap.fromTo()

Also can be used to animate texts as well (not for the split)
```js
gsap.fromTo('.para',{
      opacity: 0,
      y: 20
    },{
      opacity: 1,
      y: 0,
      delay: 1,
      stagger:0.1
    })
```

"use client"
import Image from 'next/image'
import { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../container'
import Header from '../components/Header'

import { useRouter } from 'next/navigation'
import {useAnimation,motion, AnimatePresence} from 'framer-motion'
import { shakeAndVibrate, shakeAndVibrateX, shakeAndVibrateY } from '../utils'






export default function Page() {
  const {appState,setAppState,isLoggedIn}=useContext(AppContext)
  const controls =useAnimation()
  const route =useRouter()
  const texts=["Finance at your finger tips",
  " forex trading ",
    "Crypto trading"]

const animationDuration=2000
const delayBetweenTexts = 500;

const [index, setIndex] = useState(0);
const textRef=useRef(null)

useEffect(() => {
  const animateText = (index:number) => {
    //@ts-ignore
    textRef.current.innerHTML = texts[index];
     //@ts-ignore
    textRef.current.classList.add("slide-in");

    setTimeout(() => {
       //@ts-ignore
      textRef.current.classList.remove("slide-in");
    }, animationDuration);
  };

  let currentIndex = 0;

  const animateLoop = () => {
    animateText(currentIndex);
    currentIndex = (currentIndex + 1) % texts.length;
    setTimeout(animateLoop, animationDuration + delayBetweenTexts);
  };

  animateLoop();
}, [texts]);


useEffect(()=>{

},[])

 
  return (
    <>
    <Header/>
    <div className='w-[100%] min-h-screen   font-rubik  bg-primary-blue  mt-14 pt-14'>




<motion.h1
 initial={
  {
    x:-10,opacity:0,scale:0
  }
 }
 whileInView={{
  x:0,opacity:1,scale:1
  
 }}
 viewport={{
  once:true
 }}
 transition={{
  delay:0.2,duration:0.5
 }}
className='text-white text-6xl text-center mx-auto my-auto font-extrabold max-md:text-2xl max-lg:mt-8 lg:mt-[10rem]'>
Welcome to  <br /> Estech Global Resources

</motion.h1>

<div className=" text-container text-white text-center font-semibold max-lg:text-sm text-[1.3rem] mt-7 min-w-full font-poppins">
<div className="text-slide-up-u flex flex-col relative mx-auto min-w-full">

        <span ref={textRef} key={index} className="text1 animation">
        
        </span>

    </div>
</div>
<motion.div className='text-center '
 initial={
  {
    x:-10,opacity:0,scale:0
  }
 }
 whileInView={{
  x:0,opacity:1,scale:1
  
 }}
 viewport={{
  once:true
 }}
 transition={{
  delay:0.5,duration:0.5
 }}
 
>
<motion.button
              type="button"

              onClick={()=>{
             isLoggedIn?
                 window.location.href="/dashboard":
       
                  setAppState({
                    ...appState,showModal:true

                  })
              }}
              className="text-white mt-5 lg:font-normal lg: text-2xl hover:bg-primary-success bg-primary-success focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold font-rubik  px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-[1.3rem] "
              whileHover="hover"
              variants={shakeAndVibrate}
            >
              Get started
            </motion.button>
</motion.div>



    </div>


    </>
  )
}
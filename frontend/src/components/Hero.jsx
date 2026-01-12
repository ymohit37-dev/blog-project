import React from 'react'
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div className='my-6 flex justify-center items-center'>
        <img src={hero} alt="hero"className='w-[80%] h-[550px]'/>

    </div>
  )
}

export default Hero

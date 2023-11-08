import React from 'react'
import profile from '../assets/images/profile_me.png'
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <div className='mt-10'>
      <div className='flex flex-col md:flex-row'>
            <div className='w-full md:w-[385px] h-[300px] md:h-[430px] bg-gradImage bg-contain bg-center bg-no-repeat flex justify-center items-center'>
                <img src={profile} alt="Profile" className='' />
            </div>
            <div className='md:-ml-8 md:mt-20 lg:mt-16 font-normal text-white md:text-start'>
                <h1 className='text-md md:text-2xl'>Hello! I Am <span className='text-active'>Patience Orukotan</span></h1>
                <p className='text-sm md:text-base mt-2 md:mt-16 lg:mt-20'>A Developer who</p>
                {/* Medium Sreens */}
                <p className='hidden md:block text-4xl lg:text-5xl mt-1'>Judges a book <br /> by its <span className='text-active'>cover</span>...</p>
                {/* Small Screens */}
                <p className='md:hidden text-lg leading-6'>Judges a book by its <span className='text-active'>cover</span>...</p>
                <p className='text-xs md:mt-1.5'>Because if the cover does not impress you what else can?</p>
            </div>
      </div>
      <div className='text-white mt-5 md:mt-2.5 md:text-start'>
        <p className='text-lg md:text-4xl lg:text-5xl'> 
        <Typewriter onInit={(typewriter) => {
                    typewriter
                        .typeString("I'm a Software Engineer")
                        .pauseFor(100)
                        .deleteAll()
                        .typeString("I'm a Web Design Tutor")
                        .pauseFor(100)
                        .deleteAll()
                        .typeString("I'm a Software Engineer")
                        .start();
                }}
                />
        </p>
        <p className='hidden md:block md:text-lg'>Currently, I'm a <span className='text-blue2'>Freelance</span> Software Engineer.</p>
        {/* Medium Sreens */}
        <p className='hidden md:block text-xl mt-10 md:leading-normal'>A self-taught front-end developer, functioning in the industry for 2+ years now. <br /> I can develop responsive websites from scratch and raise them into modern <br /> user-friendly web experiences. <br /> I make meaningful and delightful digital products that create an equilibrium <br /> between user needs and business goals.</p>
        {/* Small Sreens */}
        <p className='md:hidden text-sm md:mt-10'>Currently, I'm a <span className='text-blue2'>Freelance</span> Software Engineer. A self-taught front-end developer, functioning in the industry for 3+ years now. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. I make meaningful and delightful digital products that create an equilibrium between user needs and business goals.</p>
      </div>
    </div>
  )
}

export default About


// bg-gradient-radial from-gradInn from-0% via-gradMid via-50% to-darkBlue to-70% rounded-full
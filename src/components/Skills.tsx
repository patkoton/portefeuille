import React from 'react'
import skillImg from '../assets/images/skill_me.png'

const Skills = () => {
  return (
    <div className='font-normal text-white text-center pt-10 md:pt-20'>
      <h1 className='text-lg md:text-2xl leading-6 md:leading-none'>I'm currently looking to join a <span className='text-active'>cross-sectional</span> team</h1>
      <p className='text-sm md:text-base'>that values improving people's lives through accessible design</p>
      <div className='flex justify-center'>
        <div className=''>
            <img src={skillImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Skills

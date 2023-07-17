import React from 'react'
import { Link } from 'react-router-dom'
import GitHub from '../assets/images/github_icon.png'
import Linkedin from '../assets/images/linkedin_icon.png'
import Figma from '../assets/images/figma_icon.png'

const Contact = () => {
  return (
    <div className='font-normal text-white py-20'>
      <h1 className='text-lg md:text-2xl'>Contact</h1>
      <p className='hidden md:block md:text-sm mt-10 mb-5'>I'm currently looking to join a cross-functional team that values improving people's lives <br />
         through accessible design. or have a project in mind? Let's connect.
      </p>
      <p className='md:hidden text-xs mt-5 mb-3'>I'm currently looking to join a cross-functional team that values improving people's lives
         through accessible design. or have a project in mind? Let's connect.
      </p>
      <Link to='mailto:patkoton@yahoo.com' className='text-xs md:text-sm'>patkoton@yahoo.com</Link>
      <div className='flex items-center mt-5 md:mt-10 space-x-2 md:space-x-5'>
        <Link to='https://github.com/patkoton'>
            <img src={GitHub} alt="" />
        </Link>
        <Link to='https://www.linkedin.com/in/patience-orukotan-03a778ba/'>
            <img src={Linkedin} alt="" />
        </Link>
        <Link to='/'>
            <img src={Figma} alt="" />
        </Link>
      </div>
    </div>
  )
}

export default Contact

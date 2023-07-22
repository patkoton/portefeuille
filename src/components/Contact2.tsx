import React from 'react'
import { Link } from 'react-router-dom'
import GitHub from '../assets/images/github_icon.png'
import Linkedin from '../assets/images/linkedin_icon.png'
import Figma from '../assets/images/figma_icon.png'

const Contact = () => {
  return (
    <div className='font-normal text-white py-20' id='contact'>
      <h1 className='text-lg md:text-2xl'>Contact</h1>
      <p className='hidden md:block md:text-sm mt-5 mb-5'>I'm currently looking to join a cross-functional team that values improving people's lives <br />
         through accessible design. or have a project in mind? Let's connect.
      </p>
      <p className='md:hidden text-xs mt-3 mb-3'>I'm currently looking to join a cross-functional team that values improving people's lives
         through accessible design. or have a project in mind? Let's connect.
      </p>
      <Link to='mailto:patkoton@yahoo.com' className='text-xs md:text-sm'>patkoton@yahoo.com</Link>
      <div className='flex items-center mt-5 md:mt-10 space-x-2 md:space-x-5'>
        <Link to='https://github.com/patkoton'>
          <div className='w-4 md:w-5'>
            <img src={GitHub} alt="" className='w-full' />
          </div>
        </Link>
        <Link to='https://www.linkedin.com/in/patience-orukotan-03a778ba/'>
          <div className='w-4 md:w-5'>
            <img src={Linkedin} alt="" className='w-full' />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Contact

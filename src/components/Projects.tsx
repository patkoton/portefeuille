import { Headers } from './Headers'
import { projectContent } from '../data'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import Button from '../elements/Button'
import 'animate.css';

const Projects = () => {
  return (
    <div className='border-t border-borderColor px-5 md:px-10 font-roboto' id='about'>
      <Headers title='Case Studies' description='Some of my best projects so far.........' />
      <div className='flex flex-wrap md:flex-nowrap md:flex-row md:space-x-6'>
        {projectContent.map((item) => {
            return (
                <div className='flex w-1/2 md:w-1/4 animate__animated animate__zoomIn animate__delay-1s animate__repeat'>
                    <div className='w-full border border-borderColor'>
                        <div className='w-full h-40 md:h-52'>
                          <img src={item.image} alt={item.section} className='w-full' />
                        </div>
                        <div className='my-6 mx-4'>
                            <h3 className='font-semibold text-sm md:text-base'>{item.section}</h3>
                            <h5 className='font-bold text-base md:text-xl mt-1'>{item.activity}</h5>
                            <p className='font-normal text-sm md:text-base mt-4 mb-7 md:mb-10'>{item.description}</p>
                            <Link   key={item.link} 
                                    to={item.href} 
                                    className='font-medium text-lightBlue text-base md:text-lg'>
                                        <div className='flex items-center space-x-2 md:space-x-6'>
                                            <span>{item.link}</span> 
                                            <span className='mt-1'><BsArrowRight /></span>
                                        </div>
                            </Link>
                        </div>
                    </div>
                </div>
            )
        })}
      </div>
      
      <div className='flex justify-center my-10 md:my-20'>
        <Button children='Contact Me' />
      </div>
    </div>
  )
}

export default Projects

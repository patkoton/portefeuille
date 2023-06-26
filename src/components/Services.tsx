import { servicesContent } from '../data'
import { Headers } from './Headers'

const Services = () => {
  return (
    <div className='font-roboto px-5 md:px-10'>
      <Headers title='Proficiency' description='What Services I provide for you.' />
      <div className='flex flex-col md:flex-row my-16'>
        {servicesContent.map((item) => {
            return (
                <div className='flex-col md:flex md:w-1/4 text-center mb-10 md:mb-0'>
                    <div className='flex justify-center'>
                        <div className='w-12'>
                            <img src={item.image} alt="" className='w-full' />
                        </div>
                    </div>
                    <h4 className='font-bold text-base md:text-lg mt-2 md:mt-4'>{item.activity}</h4>
                    <p className='font-normal text-sm md:text-base leading-4 mt-1'>{item.description}</p>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Services

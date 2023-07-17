import React from 'react'
import Clogo from '../assets/images/company_logo.png'

const Work = () => {
  return (
    <div>
      <div className='pt-20 text-white'>
        <div className=''>
            <div className='bg-gradImage bg-no-repeat bg-contain bg-center'>
                <h1 className='text-2xl md:text-4xl lg:text-5xl'>Work Experience</h1>
                <div className='flex flex-col md:flex-row md:space-x-5'>
                    <div className='w-full md:w-1/2 border-t-4 border-gradBorder shadow-md rounded-2xl from-grad1 via-grad2 to-grad5 bg-gradient-[163deg] mt-5 md:mt-8'>
                        <div className='flex items-center my-5'>
                            <div className='w-[100px] md:w-[115px] h-[100px] md:h-[115px]'>
                                <img src={Clogo} alt="" className='w-full' />
                            </div>
                            <div className='font-poppins'>
                                <p className='text-lg md:text-2xl font-semibold'>SKYWAY AVIATION (SAHCO)</p>
                                <p className='text-xs font-medium mt-1 pe-5 md:pe-20'>Take your client onboard seamlessly by our amazing tool of digital onboard process.</p>
                                <p className='bg-gradMid border border-gradOut font-medium text-xs w-11/12 md:w-10/12 p-1 rounded-md mt-2'>Hand-on using React Hooks (State Hook, Effect Hook, Ref Hook, and so on) to use state and lifecycle
methods inside functional components.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 border-t-4 border-gradBorder shadow-md rounded-2xl from-grad1 via-grad3 to-grad5 bg-gradient-[163deg] mt-5 md:mt-8'>
                        <div className='flex items-center my-5'>
                            <div className='w-[100px] md:w-[115px] h-[100px] md:h-[115px]'>
                                <img src={Clogo} alt="" className='w-full' />
                            </div>
                            <div className='font-poppins'>
                                <p className='text-lg md:text-2xl font-semibold'>NYERERE BOLANLE (NBJ)</p>
                                <p className='text-xs font-medium mt-1 pe-5 md:pe-20'>Take your client onboard seamlessly by our amazing tool of digital onboard process.</p>
                                <p className='bg-gradMid border border-gradOut font-medium text-xs w-11/12 md:w-10/12 p-1 rounded-md mt-2'>Revamped and optimized responsive web application design of UI, and UX with HTML5, CSS3, and UI
libraries including Bootstrap and Material UI.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row md:space-x-5'>
                    <div className='w-full md:w-1/2 border-t-4 border-gradBorder shadow-md rounded-2xl from-grad3 via-grad2 to-grad5 bg-gradient-[163deg] mt-5 md:mt-8'>
                        <div className='flex items-center my-5'>
                            <div className='w-[100px] md:w-[115px] h-[100px] md:h-[115px]'>
                                <img src={Clogo} alt="" className='w-full' />
                            </div>
                            <div className='font-poppins'>
                                <p className='text-lg md:text-2xl font-semibold'>PROVEHUB</p>
                                <p className='text-xs font-medium mt-1 pe-5 md:pe-20'>Take your client onboard seamlessly by our amazing tool of digital onboard process.</p>
                                <p className='bg-gradMid border border-gradOut font-medium text-xs w-11/12 md:w-10/12 p-1 rounded-md mt-2'>Utilized Bootstrap5, Tailwind CSS, and jQuery in rendering various UI mock-ups for responsive landing
pages and Admin Dashboards.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 border-t-4 border-gradBorder shadow-md rounded-2xl from-grad1 via-grad2 to-grad3 bg-gradient-[163deg] mt-5 md:mt-8'>
                        <div className='flex items-center my-5'>
                            <div className='w-[100px] md:w-[115px] h-[100px] md:h-[115px]'>
                                <img src={Clogo} alt="" className='w-full' />
                            </div>
                            <div className='font-poppins'>
                                <p className='text-lg md:text-2xl font-semibold'>PHD TECH SOLUTIONS</p>
                                <p className='text-xs font-medium mt-1 pe-5 md:pe-20'>Take your client onboard seamlessly by our amazing tool of digital onboard process.</p>
                                <p className='bg-gradMid border border-gradOut font-medium text-xs w-11/12 md:w-10/12 p-1 rounded-md mt-2'>Utilize Typescript and JavaScript in React.js platform to build front-end framework, Git for source control and NPM for JavaScript package management.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Work

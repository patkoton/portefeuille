import React from 'react'
import { Carousel, IconButton } from "@material-tailwind/react";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Clogo from '../assets/images/company_logo.png'

const Work = () => {
  return (
    <div>
      <div className='pt-20 text-white'>
        <div className=''>
            <div className='bg-gradImage bg-no-repeat bg-contain bg-center'>
                <h1 className='text-2xl md:text-4xl lg:text-5xl'>Work Experience</h1>
                {/* Medium Screens */}
                <div className='hidden md:block'>
                    {/* FIRST MIX */}
                    <div className='flex flex-row space-x-5'>
                        <div className='flex w-1/2 border-t-4 border-gradBorder shadow-md rounded-2xl bg-gradient-[163deg] from-grad1 via-grad2 to-grad5 hover:bg-gradient-to-tl mt-8'>
                            <div className='flex items-center my-5'>
                                <div className='w-[115px] h-[115px]'>
                                    <img src={Clogo} alt="" className='w-full' />
                                </div>
                                <div className='font-poppins'>
                                    <p className='text-2xl font-semibold'>SKYWAY AVIATION (SAHCO)</p>
                                    <p className='text-xs font-medium mt-1 pe-20'></p>
                                    <p className='bg-gradMid border border-gradOut font-medium text-xs w-10/12 p-1 rounded-md mt-2'>Experience in using HTML5 and CSS3 to build & beautify the
layout of the webpage & using React UI libraries such as Material UI and Bootstrap in developing web more efficiently with high-quality and responsive components.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:flex flex-col md:w-1/2 border-t-4 border-gradBorder shadow-md rounded-2xl bg-gradient-[163deg] from-grad1 via-grad3 to-grad5 hover:bg-gradient-to-tl mt-8'>
                            <div className='flex items-center my-5'>
                                <div className='w-[115px] h-[115px]'>
                                    <img src={Clogo} alt="" className='w-full' />
                                </div>
                                <div className='font-poppins'>
                                    <p className='text-2xl font-semibold'>NYERERE BOLANLE (NBJ)</p>
                                    <p className='text-xs font-medium mt-1 pe-20'></p>
                                    <p className='bg-gradMid border border-gradOut font-medium text-xs w-10/12 p-1 rounded-md mt-2'>Revamped and optimized responsive website design of UI, and UX with HTML5, CSS3, UI
            libraries including Bootstrap and Material UI & designed reusable components and major pages with a navigation bar using React.js</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SECOND MIX */}
                    <div className='flex flex-row space-x-5'>
                        <div className='flex flex-col w-1/2 border-t-4 border-gradBorder shadow-md rounded-2xl bg-gradient-[163deg] from-grad3 via-grad2 to-grad5 hover:bg-gradient-to-tl mt-8'>
                            <div className='flex items-center my-5'>
                                <div className='w-[115px] h-[115px]'>
                                    <img src={Clogo} alt="" className='w-full' />
                                </div>
                                <div className='font-poppins'>
                                    <p className='text-2xl font-semibold'>PROVEHUB</p>
                                    <p className='text-xs font-medium mt-1 pe-20'></p>
                                    <p className='bg-gradMid border border-gradOut font-medium text-xs w-10/12 p-1 rounded-md mt-2'>Utilized Bootstrap5, Tailwind CSS, and jQuery in rendering various UI mock-ups for responsive landing
    pages and Admin Dashboards. Designed and structured layout using flexbox and grid.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:flex flex-col md:w-1/2 border-t-4 border-gradBorder shadow-md rounded-2xl bg-gradient-[163deg] from-grad1 via-grad2 to-grad3 hover:bg-gradient-to-tl mt-8'>
                            <div className='flex items-center my-5'>
                                <div className='w-[115px] h-[115px]'>
                                    <img src={Clogo} alt="" className='w-full' />
                                </div>
                                <div className='font-poppins'>
                                    <p className='text-2xl font-semibold'>PHD TECH SOLUTIONS</p>
                                    <p className='text-xs font-medium mt-1 pe-20'></p>
                                    <p className='bg-gradMid border border-gradOut font-medium text-xs w-10/12 p-1 rounded-md mt-2'>Utilize WordPress, Typescript and JavaScript in React.js platform to build front-end framework following SCRUM. Customize and adapt WordPress templates. Installed, maintained and troubleshooted WordPress themes.</p>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>

                {/* Small Screens */}
                <div className='md:hidden'>
                    <Carousel
                        className=""
                        prevArrow={({ handlePrev }) => (
                            <IconButton
                            variant="text"
                            size="lg"
                            onClick={handlePrev}
                            className="!absolute top-2/4 -translate-y-2/4 -left-5 text-active"
                            >
                            <IoIosArrowBack strokeWidth={2} className="w-4 md:w-6 h-4 md:h-6" />
                            </IconButton>
                        )}
                        nextArrow={({ handleNext }) => (
                            <IconButton
                            variant="text"
                            size="lg"
                            onClick={handleNext}
                            className="!absolute top-2/4 -translate-y-2/4 !-right-5 text-active"
                            >
                            <IoIosArrowForward strokeWidth={2} className="w-4 md:w-6 h-4 md:h-6" />
                            </IconButton>
                        )}
                        navigation={({ setActiveIndex, activeIndex, length }) => (
                        <div className="absolute bottom-0 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                            {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                activeIndex === i ? "bg-active w-3" : "bg-active/50 w-2"
                                }`}
                                onClick={() => setActiveIndex(i)}
                            />
                            ))}
                        </div>
                        )}
            >
                        <div className='px-3'>
                            <div className='w-full flex-col border-t-4 border-gradBorder shadow-md rounded-2xl bg-gradient-[163deg] from-grad1 via-grad2 to-grad5 hover:bg-gradient-to-tl mt-5'>
                                <div className='flex items-center my-5 pb-5'>
                                    <div className='w-[100px] h-[100px]'>
                                        <img src={Clogo} alt="" className='w-full' />
                                    </div>
                                    <div className='font-poppins'>
                                        <p className='text-lg font-semibold'>SKYWAY AVIATION (SAHCO)</p>
                                        <p className='text-xs font-medium mt-1 pe-5'></p>
                                        <p className='bg-gradMid border border-gradOut font-medium text-xs w-11/12 p-1 rounded-md mt-2'>Experience in using HTML5 and CSS3 to build & beautify the
layout of the webpage & using React UI libraries such as Material UI and Bootstrap in developing web more efficiently with high-quality and responsive components.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-3'>
                            <div className='w-full md:flex flex-col border-t-4 border-gradBorder shadow-md rounded-2xl bg-gradient-[163deg] from-grad1 via-grad3 to-grad5 hover:bg-gradient-to-tl mt-5'>
                                <div className='flex items-center my-5 pb-5'>
                                    <div className='w-[100px] h-[100px]'>
                                        <img src={Clogo} alt="" className='w-full' />
                                    </div>
                                    <div className='font-poppins'>
                                        <p className='text-lg font-semibold'>NYERERE BOLANLE (NBJ)</p>
                                        <p className='text-xs font-medium mt-1 pe-5'></p>
                                        <p className='bg-gradMid border border-gradOut font-medium text-xs w-11/12 p-1 rounded-md mt-2'>Revamped and optimized responsive website design of UI, and UX with HTML5, CSS3, UI
            libraries including Bootstrap and Material UI & designed reusable components and major pages with a navigation bar using React.js</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-3'>
                            <div className='w-full flex-col border-t-4 border-gradBorder shadow-md rounded-2xl bg-gradient-[163deg] from-grad3 via-grad2 to-grad5 hover:bg-gradient-to-tl mt-5'>
                                <div className='flex items-center my-5 pb-5'>
                                    <div className='w-[100px] h-[100px]'>
                                        <img src={Clogo} alt="" className='w-full' />
                                    </div>
                                    <div className='font-poppins'>
                                        <p className='text-lg font-semibold'>PROVEHUB</p>
                                        <p className='text-xs font-medium mt-1 pe-5'></p>
                                        <p className='bg-gradMid border border-gradOut font-medium text-xs w-11/12 p-1 rounded-md mt-2'>Utilized Bootstrap5, Tailwind CSS, and jQuery in rendering various UI mock-ups for responsive landing pages and Admin Dashboards. Designed and structured layout using flexbox and grid.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-3'>
                            <div className='w-full flex-col border-t-4 border-gradBorder shadow-md rounded-2xl bg-gradient-[163deg] from-grad1 via-grad2 to-grad3 hover:bg-gradient-to-tl mt-5'>
                                <div className='flex items-center my-5 pb-5'>
                                    <div className='w-[100px] h-[100px]'>
                                        <img src={Clogo} alt="" className='w-full' />
                                    </div>
                                    <div className='font-poppins'>
                                        <p className='text-lg font-semibold'>PHD TECH SOLUTIONS</p>
                                        <p className='text-xs font-medium mt-1 pe-5'></p>
                                        <p className='bg-gradMid border border-gradOut font-medium text-xs w-11/12 p-1 rounded-md mt-2'>Utilize Typescript and JavaScript in React.js platform to build front-end framework following SCRUM. Using Git for source control and NPM for JavaScript package management.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Work

import React from 'react'
import { Link } from 'react-router-dom'
import GitHub from '../assets/images/github_icon.png'
import PLink from '../assets/images/other_icon.png'
import Website from '../assets/images/landing_page.png'
import Dashboard from '../assets/images/admin_dashboard.png'

const Projects = () => {
  return (
    <div className='pt-20'>
        {/* FIRST MIX */}
        <div>
            <div className='flex flex-col md:flex-row md:items-center text-clayWhite font-poppins' id='work'>
                <div className='md:flex flex-col md:w-1/2'>
                    <h1 className='text-active font-semibold text-xs md:text-base'>Featured Project</h1>
                    <h2 className='font-semibold text-xl md:text-3xl'>Budget Management App.</h2>
                    <div className='mt-5 -mb-6 md:mb-0 md:-mr-16 bg-gradient-to-r from-grad7 from-0% via-grad8 via-50% to-grad8 to-70% rounded-xl rounded-b-none md:rounded-xl bg-blend-overlay backdrop-blur-2xl'>
                        <p className='pt-2 pb-3 px-5 font-normal text-sm md:text-base'>A Web Application for uploading budgets in which pre-registered Departments are able to upload and send their Budgets for the year to the Management which will either be approved or not. It’s been automated for approvals or rejections by the Admin which make it more better than the traditional process of sending Excel file formats to the Management for budgets.</p>
                    </div>
                    {/* Medium Screens */}
                    <div className='hidden md:flex items-center md:mt-7 md:space-x-5'>
                        <Link to='https://github.com/patkoton'>
                            <div className='w-4 md:w-5'>
                                <img src={GitHub} alt="" className='w-full' />
                            </div>
                        </Link>
                        <Link to='/'>
                            <div className='w-4 md:w-5'>
                                <img src={PLink} alt="" className='w-full' />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='md:flex flex-col md:w-1/2 bg-gradImage bg-no-repeat bg-contain bg-center md:mt-0 md:py-20 md:px-5'>
                    <div className='bg-deepBlue2 pl-6 md:pl-8 pt-5 rounded-xl'>
                        <div className=''>
                            <img src={Website} alt="" className='' />
                        </div>
                    </div>
                </div>
            </div>
            {/* Small Screens */}
            <div className='md:hidden flex items-center mt-4 space-x-2'>
                <Link to='https://github.com/patkoton'>
                    <div className='w-4 md:w-5'>
                        <img src={GitHub} alt="" className='w-full' />
                    </div>
                </Link>
                <Link to='/'>
                    <div className='w-4 md:w-5'>
                        <img src={PLink} alt="" className='w-full' />
                    </div>
                </Link>
            </div>
        </div>

        {/* SECOND MIX */}
        <div className='mt-5 md:-mt-16'>
            <div className='flex flex-col-reverse md:flex-row md:items-center text-clayWhite font-poppins' id='work'>
                <div className='md:flex flex-col md:w-1/2 bg-gradImage bg-no-repeat bg-contain bg-center md:mt-0 md:py-20 md:px-5'>
                    <div className='bg-deepBlue2 pl-6 md:pl-0 md:pr-8 pt-5 rounded-xl'>
                        <div className=''>
                            <img src={Dashboard} alt="" className='' />
                        </div>
                    </div>
                </div>
                <div className='md:flex flex-col md:w-1/2'>
                    <h1 className='text-active font-semibold text-xs md:text-base text-end'>Featured Project</h1>
                    <h2 className='font-semibold text-xl md:text-3xl text-end'>Online Assessment App.</h2>
                    <div className='mt-5 -mb-6 md:mb-0 md:-ml-16 bg-gradient-to-r from-grad7 from-0% via-grad8 via-50% to-grad8 to-70% rounded-xl rounded-b-none md:rounded-xl bg-blend-overlay backdrop-blur-2xl'>
                        <p className='pt-2 pb-3 px-5 font-normal text-sm md:text-base'>A web application for online assessment to automate employment processes. The selected Applicants registers and login to access the Company’s scheduled assessment within the scheduled time. This also allows the Admin to view the automated results with the percentages of both successful & unsuccessful applicants.</p>
                    </div>
                    {/* Medium Screens */}
                    <div className='hidden md:flex justify-end items-center md:mt-7 md:space-x-5'>
                        <Link to='https://github.com/patkoton'>
                            <div className='w-4 md:w-5'>
                                <img src={GitHub} alt="" className='w-full' />
                            </div>
                        </Link>
                        <Link to='/'>
                            <div className='w-4 md:w-5'>
                                <img src={PLink} alt="" className='w-full' />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Small Screens */}
            <div className='md:hidden flex justify-end items-center mt-4 space-x-2'>
                <Link to='https://github.com/patkoton'>
                    <div className='w-4 md:w-5'>
                        <img src={GitHub} alt="" className='w-full' />
                    </div>
                </Link>
                <Link to='/'>
                    <div className='w-4 md:w-5'>
                        <img src={PLink} alt="" className='w-full' />
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Projects

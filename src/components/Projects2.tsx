import { Link } from 'react-router-dom'
import GitHub from '../assets/images/github_icon.png'
import PLink from '../assets/images/other_icon.png'
import SAHCO from '../assets/images/sahco_budget.png'
import NBJ from '../assets/images/nbjvip.png'
import ProveHub from '../assets/images/aiki.png'
import WordPress from '../assets/images/wordpress_site.png'

const Projects = () => {
  return (
    <div className='pt-20'>
        {/* FIRST MIX */}
        <div>
            <div className='flex flex-col md:flex-row md:items-center text-clayWhite font-poppins' id='work'>
                <div className='md:flex flex-col md:w-1/2'>
                    <h1 className='text-active font-semibold text-xs md:text-base'>Featured Project</h1>
                    <h2 className='font-semibold text-xl md:text-3xl'>Budget App.</h2>
                    <div className='mt-5 -mb-6 md:mb-0 md:-mr-16 bg-gradient-to-r from-grad7 from-0% via-grad8 via-50% to-grad8 to-70% rounded-xl rounded-b-none md:rounded-xl bg-blend-overlay backdrop-blur-2xl'>
                        <p className='pt-2 pb-3 px-5 font-normal text-xs md:text-sm'>A Web Application for uploading budgets by pre-registered users for approvals by the Audit Department Head. <br /><span><b>Tools used: </b>ReactJS</span> </p>
                    </div>
                    {/* Medium Screens for Links */}
                    <div className='hidden md:flex items-center md:mt-7 md:space-x-5'>
                        <Link to='https://github.com/Sahcoplc/sahcoplc-budget-react'>
                            <div className='w-4 md:w-5'>
                                <img src={GitHub} alt="" className='w-full' />
                            </div>
                        </Link>
                        <Link to='https://sahcoplc.com.ng/'>
                            <div className='w-4 md:w-5'>
                                <img src={PLink} alt="" className='w-full' />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='md:flex flex-col md:w-1/2 bg-gradImage bg-no-repeat bg-contain bg-center md:mt-0 md:py-20 md:px-5'>
                    <div className='bg-deepBlue2 pl-6 md:pl-8 pt-5 rounded-xl'>
                        <div className=''>
                            <img src={SAHCO} alt="" className='' />
                        </div>
                    </div>
                </div>
            </div>
            {/* Small Screens for Links */}
            <div className='md:hidden flex items-center mt-4 space-x-2'>
                <Link to='https://github.com/Sahcoplc/sahcoplc-budget-react'>
                    <div className='w-4 md:w-5'>
                        <img src={GitHub} alt="" className='w-full' />
                    </div>
                </Link>
                <Link to='https://sahcoplc.com.ng/'>
                    <div className='w-4 md:w-5'>
                        <img src={PLink} alt="" className='w-full' />
                    </div>
                </Link>
            </div>
        </div>

        {/* SECOND MIX */}
        <div className='mt-5 md:-mt-10'>
            <div className='flex flex-col-reverse md:flex-row md:items-center text-clayWhite font-poppins' id='work'>
                <div className='md:flex flex-col md:w-1/2 bg-gradImage bg-no-repeat bg-contain bg-center md:mt-0 md:py-20 md:px-5'>
                    <div className='bg-deepBlue2 pl-6 md:pl-0 md:pr-8 pt-5 rounded-xl'>
                        <div className=''>
                            <img src={NBJ} alt="" className='' />
                        </div>
                    </div>
                </div>
                <div className='md:flex flex-col md:w-1/2'>
                    <h1 className='text-active font-semibold text-xs md:text-base text-end'>Featured Project</h1>
                    <h2 className='font-semibold text-xl md:text-3xl text-end'>Website</h2>
                    <div className='mt-5 -mb-6 md:mb-0 md:-ml-16 bg-gradient-to-r from-grad7 from-0% via-grad8 via-50% to-grad8 to-70% rounded-xl rounded-b-none md:rounded-xl bg-blend-overlay backdrop-blur-2xl'>
                        <p className='pt-2 pb-3 px-5 font-normal text-xs md:text-sm'><b>Tools used: </b>ReactJS, Material UI</p>
                    </div>
                    {/* Medium Screens for Links */}
                    <div className='hidden md:flex justify-end items-center md:mt-7 md:space-x-5'>
                        <Link to='https://github.com/NBJ-Developer/nbj-client'>
                            <div className='w-4 md:w-5'>
                                <img src={GitHub} alt="" className='w-full' />
                            </div>
                        </Link>
                        <Link to='https://nbjvip.com/'>
                            <div className='w-4 md:w-5'>
                                <img src={PLink} alt="" className='w-full' />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Small Screens for Links */}
            <div className='md:hidden flex justify-end items-center mt-4 space-x-2'>
                <Link to='https://github.com/NBJ-Developer/nbj-client'>
                    <div className='w-4 md:w-5'>
                        <img src={GitHub} alt="" className='w-full' />
                    </div>
                </Link>
                <Link to='https://nbjvip.com/'>
                    <div className='w-4 md:w-5'>
                        <img src={PLink} alt="" className='w-full' />
                    </div>
                </Link>
            </div>
        </div>

         {/* THIRD MIX */}
         <div className='mt-5 md:-mt-10'>
            <div className='flex flex-col md:flex-row md:items-center text-clayWhite font-poppins' id='work'>
                <div className='md:flex flex-col md:w-1/2'>
                    <h1 className='text-active font-semibold text-xs md:text-base'>Featured Project</h1>
                    <h2 className='font-semibold text-xl md:text-3xl'>Landing Page</h2>
                    <div className='mt-5 -mb-6 md:mb-0 md:-mr-16 bg-gradient-to-r from-grad7 from-0% via-grad8 via-50% to-grad8 to-70% rounded-xl rounded-b-none md:rounded-xl bg-blend-overlay backdrop-blur-2xl'>
                        <p className='pt-2 pb-3 px-5 font-normal text-xs md:text-sm'><b>Tools used: </b>HTML, CSS, Bootstrap5</p>
                    </div>
                    {/* Medium Screens for Links */}
                    <div className='hidden md:flex items-center md:mt-7 md:space-x-5'>
                        <Link to='https://github.com/patkoton/aiki_landing_page'>
                            <div className='w-4 md:w-5'>
                                <img src={GitHub} alt="" className='w-full' />
                            </div>
                        </Link>
                        <Link to='https://aiki-landing-page.netlify.app/'>
                            <div className='w-4 md:w-5'>
                                <img src={PLink} alt="" className='w-full' />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='md:flex flex-col md:w-1/2 bg-gradImage bg-no-repeat bg-contain bg-center md:mt-0 md:py-20 md:px-5'>
                    <div className='bg-deepBlue2 pl-6 md:pl-8 pt-5 rounded-xl'>
                        <div className=''>
                            <img src={ProveHub} alt="" className='' />
                        </div>
                    </div>
                </div>
            </div>
            {/* Small Screens for Links */}
            <div className='md:hidden flex items-center mt-4 space-x-2'>
                <Link to='https://github.com/patkoton/aiki_landing_page'>
                    <div className='w-4 md:w-5'>
                        <img src={GitHub} alt="" className='w-full' />
                    </div>
                </Link>
                <Link to='https://aiki-landing-page.netlify.app/'>
                    <div className='w-4 md:w-5'>
                        <img src={PLink} alt="" className='w-full' />
                    </div>
                </Link>
            </div>
        </div>

        {/* FOURTH MIX */}
        <div className='mt-5 md:-mt-10'>
            <div className='flex flex-col-reverse md:flex-row md:items-center text-clayWhite font-poppins' id='work'>
                <div className='md:flex flex-col md:w-1/2 bg-gradImage bg-no-repeat bg-contain bg-center md:mt-0 md:py-20 md:px-5'>
                    <div className='bg-deepBlue2 pl-6 md:pl-0 md:pr-8 pt-5 rounded-xl'>
                        <div className=''>
                            <img src={WordPress} alt="" className='' />
                        </div>
                    </div>
                </div>
                <div className='md:flex flex-col md:w-1/2'>
                    <h1 className='text-active font-semibold text-xs md:text-base text-end'>Featured Project</h1>
                    <h2 className='font-semibold text-xl md:text-3xl text-end'>Blogsite</h2>
                    <div className='mt-5 -mb-6 md:mb-0 md:-ml-16 bg-gradient-to-r from-grad7 from-0% via-grad8 via-50% to-grad8 to-70% rounded-xl rounded-b-none md:rounded-xl bg-blend-overlay backdrop-blur-2xl'>
                        <p className='pt-2 pb-3 px-5 font-normal text-xs md:text-sm'><b>Tools used: </b>WordPress</p>
                    </div>
                    {/* Medium Screens for Links */}
                    <div className='hidden md:flex justify-end items-center md:mt-7 md:space-x-5'>
                        <Link to='https://github.com/patkoton'>
                            <div className='w-4 md:w-5'>
                                <img src={GitHub} alt="" className='w-full' />
                            </div>
                        </Link>
                        <Link to='https://dev-learningwordp.pantheonsite.io/'>
                            <div className='w-4 md:w-5'>
                                <img src={PLink} alt="" className='w-full' />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Small Screens for Links */}
            <div className='md:hidden flex justify-end items-center mt-4 space-x-2'>
                <Link to='https://github.com/patkoton'>
                    <div className='w-4 md:w-5'>
                        <img src={GitHub} alt="" className='w-full' />
                    </div>
                </Link>
                <Link to='https://dev-learningwordp.pantheonsite.io/'>
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

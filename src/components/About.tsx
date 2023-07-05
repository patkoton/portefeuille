import { aboutContent, aboutImage } from "../data"
import Hero from '../assets/images/profile_pix.png'
import '../App.css';
import Button from "../elements/Button";
import Typewriter from "typewriter-effect";

const About = () => {
    
  return (
    <div className="py-5 px-5 md:px-12 bg-lightGray font-roboto">
        <div className='flex flex-col md:flex-row md:space-x-20 py-5 md:py-10'>
            <div className='md:flex flex-col md:w-1/2 -mt-10 md:-mt-20'>
                <img src={Hero} alt="profile pix" className="w-full" />
            </div>
            
            <div className='md:flex flex-col md:w-1/2 text-center md:text-left'>
                <h1 className="text-blue font-bold text-xl uppercase mt-6">{aboutContent.heading}</h1>
                <h4 className="text-black font-bold text-3xl md:text-5xl mt-2 md:uppercase">{aboutContent.name}</h4>
                <h6 className="text-blue font-bold text-2xl md:text-3xl mt-2">
                <Typewriter onInit={(typewriter) => {
                    typewriter
                        .typeString("A Frontend Developer")
                        .pauseFor(100)
                        .deleteAll()
                        .typeString("A Web Design Tutor")
                        .pauseFor(100)
                        .deleteAll()
                        .typeString("A Freelancer")
                        .pauseFor(100)
                        .deleteAll()
                        .typeString("A Frontend Developer")
                        .start();
                }}
                /></h6>
                <p className="text-black font-normal text-base md:text-lg leading-6 mt-6 md:mt-12 mb-12">{aboutContent.summary}</p>
                <Button children="Contact Me" />
            </div>      
        </div>
        <div className="flex flex-wrap md:flex-row justify-center items-center space-x-2 md:space-x-0 my-10 md:my-20">
            {aboutImage.map((item) => {
                return <div className="md:flex md:w-1/5 justify-center">
                            <div className="w-24">
                                <img src={item.image} alt=""  className='w-full'/>
                            </div>
                        </div>
            })}
        </div>
    </div>
  )
}

export default About

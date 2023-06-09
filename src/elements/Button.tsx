import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';

export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onClick functions
  children?: 'Contact Me' | 'Send Message' | string; // make the component able to receive children elements
  className?: string
}

export default function Button({children, className}: ButtonProps) {
  const navigate = useNavigate();

  function handleClick() {
    if (children === 'Contact Me') {
      navigate('/#contact', {replace: true});
    } else {
      navigate('', {replace: true});
    }
  }

  return (
    <button onClick={handleClick} type='submit' className='w-44 h-14 bg-lightBlue cursor-pointer border border-lightBlue outline-none transition-all ease-out duration-300'>
      <p className={`font-medium font-roboto text-white + ${children === 'Contact Me' ? 'text-lg md:text-xl' : 'text-sm md:text-base'}`}>{children}</p>
    </button>
  )
}






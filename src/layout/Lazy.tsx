import Logo from '../assets/images/blue_logo.png'

const Lazy = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <img alt='Lazy Loader Logo' src={Logo} className='w-80' />
    </div>
  )
}

export default Lazy

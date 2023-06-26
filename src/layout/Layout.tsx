import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'
import '../App.css'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Works', href: '/work' },
  { name: 'Contact', href: '/contact' },
]


export default function Layout(props: any) {
  return (
    <>
    {/* NAVBAR */}
    <Disclosure as="nav" className="bg-white border-b border-borderColor sticky top-0 z-10 py-5 md:py-0">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 font-roboto">
            <div className="relative flex h-6 md:h-20 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <NavLink to='/'>
                    <h4 className='font-bold text-lg md:text-2xl text-gray'>PatPortfolio</h4>
                  </NavLink>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex justify-center items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Medium Device NavLinks */}
                <div className="hidden sm:ml-6 sm:block md:px-5 lg:px-6 xl:px-20">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({isActive}) => {
                          return 'px-1 xl:px-2 py-2 rounded-md text-base' +
                          (isActive ? 'bg-white text-gray font-semibold' : 'text-black font-medium hover:bg-white hover:text-gray')
                        }}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            {/* Small Device NavLinks */}
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <NavLink
                    key={item.name}
                    to={item.href}
                    className={({isActive}) => {
                        return 'block px-3 py-1 rounded-md text-base font-medium' +
                        (isActive ? 'bg-white text-orange' : 'text-black hover:bg-white hover:text-orange')
                    }}
                    >
                        {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    <div className='bg-gray-300'>
        <div className='max-w-7xl min-h-screen mx-auto'>
          {props.children}
        </div>
    </div>



    {/* FOOTER */}
    <footer>
      <div className='bg-gray h-16 flex flex-wrap justify-center items-center text-roboto'>
        <p className='text-white font-medium text-xs md:text-sm'>PatPortfolio @ 2023. All rights reserved.</p>
      </div>
    </footer>
    </>
  )
};
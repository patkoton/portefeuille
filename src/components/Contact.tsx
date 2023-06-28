import React, { useState } from 'react'
import { Headers } from './Headers'
import Button from '../elements/Button'


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const showMessage= () => {
        console.log(name);
        console.log(email);
        console.log(phone);
        console.log(message);
    };

    function handleSubmit(e: any) {
        e.preventDefault();
        fetch('http://localhost:3002/send', {
            method: "POST",
            body: JSON.stringify(''),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          }).then(
          (response) => (response.json())
            ).then((response)=> {
          if (response.status === 'success') {
            alert("Message Sent.");
            resetForm()
          } else if(response.status === 'fail') {
            alert("Message failed to send.")
          }
        })
    }
      function resetForm(){
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
    }
  return (
    <div className='font-roboto px-5 md:px-20' id='contact'>
        <Headers title='Contact Me' description='Let’s work together.' />
        <form action="#" method="POST" onSubmit={handleSubmit} className="mx-auto mt-10 mb-10 max-w-xl sm:mt-10 py-5">
            <div className="">
                <div>
                    <label htmlFor="name" className="block text-xs md:text-sm lg:text-lg font-normal leading-6 text-black">
                    Name
                    </label>
                    <div className="mt-2.5">
                    <input
                        type="text"
                        name="name"
                        onChange={(e) => {setName(e.target.value)}}
                        value={name}
                        id="name"
                        placeholder='Name'
                        autoComplete="given-name"
                        className="block w-full bg-lightGray border-0 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>
                <div className="">
                    <label htmlFor="email" className="block text-xs md:text-sm lg:text-lg font-normal leading-6 text-black mt-3">
                    Email
                    </label>
                    <div className="mt-2.5">
                    <input
                        type="email"
                        name="email"
                        onChange={(e) => {setEmail(e.target.value)}}
                        value={email}
                        id="email"
                        placeholder='bobs@yahoo.com'
                        autoComplete="email"
                        className="block w-full bg-lightGray border-0 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>
                <div className="">
                    <label htmlFor="phone" className="block text-xs md:text-sm lg:text-lg font-normal leading-6 text-black mt-3">
                    Phone Number
                    </label>
                    <div className="mt-2.5">
                    <input
                        type="text"
                        name="phone"
                        onChange={(e) => {setPhone(e.target.value)}}
                        value={phone}
                        id="phone"
                        placeholder='+2348130000000'
                        autoComplete="phone"
                        className="block w-full bg-lightGray border-0 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-xs md:text-sm lg:text-lg font-normal leading-6 text-black mt-3">
                    Message
                    </label>
                    <div className="mt-2.5">
                    <textarea
                        name="message"
                        onChange={(e) => {setMessage(e.target.value)}}
                        value={message}
                        id="message"
                        placeholder='Message'
                        rows={6}
                        className="block w-full bg-lightGray border-0 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        defaultValue={''}
                    />
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <Button children='Send Message'></Button>
            </div>
        </form>
    </div>
  )
}

export default Contact
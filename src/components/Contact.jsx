import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
        <div className='pb-8'>
            <div>
               <p>Contact</p> 
               <p>Submit the form below to get in touch with me</p>
            </div>
            <div>
                <form action="">
                    <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    <input type="Email" name='name' placeholder='Enter your email' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    <textarea name="message" rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

                    <button className='text-white w-fit px-6 py-3 my-8 flex items-center rounded-md cursor-pointer bg-gradient-to-br from-purple-600 to-blue-500 mx-auto hover:scale-110 duration-300'>Let's talk</button>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact;
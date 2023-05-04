import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className=' p-4  max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi ratione reprehenderit iste qui magnam nemo, provident atque commodi distinctio tempora ex pariatur fugit impedit nulla hic! Ad reprehenderit accusantium aperiam!</p>

            <br />
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cupiditate placeat dolore, velit id, laudantium, suscipit nobis accusantium odio itaque nihil? Quo, fugit. Quia quos, hic aliquam sit eum nostrum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio at dolorem explicabo eum officiis. Delectus repellat ut magnam autem recusandae illum assumenda non tempora animi, deserunt deleniti soluta cum! Consequatur.
            </p>
        </div>
    </div>
  )
}

export default About;
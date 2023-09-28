import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-20 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl'>
                I received my Bachelor's degree from Cal Poly San Luis Obispo in 2019 where I shortly after worked in Real Estate and Sales. I wanted to change career paths into software engineering, where I graduated from Flatiron School's full stack software engineering boot camp. Shortly after, I joined Pycube, Inc. as a software engineer intern, where shrotly after I was hired for a full time position.</p>
                <p className='text-xl mt-10'>
                I have experience using a wide array of languages and technologies such as Javascript, React, Node, Bootstrap, CSS (Tailwind, Material UI, & Bootstrap), Ruby on Rails, Sinatra, Active Record, and PostgreSQL.
                </p>
                <br />

               </div>
    </div>
  )
}

export default About
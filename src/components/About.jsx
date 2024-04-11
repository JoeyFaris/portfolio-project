import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-20 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl'>
            I graduated from Cal Poly San Luis Obispo in 2019, then transitioned from Real Estate and Sales to software engineering. After completing Flatiron School's full-stack software engineering boot camp, I joined Pycube, Inc. as a software engineer intern and quickly secured a full-time position.</p>
            <p className='text-xl mt-10'>
           In my current role at Pycube, my primary focus revolves around the development of advanced solutions tailored specifically for the healthcare industry. This involves designing and implementing software that enable healthcare workers to effectively track and manage their diverse range of assets, ranging from medical equipment and facility resources, to invoice processing.</p>
                <p className='text-xl mt-10'>
I have proficiency in various languages and technologies, including: JavaScript, React, Redux, Toolkit, Node, Bootstrap, CSS (Tailwind, Material UI, & Bootstrap), Ruby, SQL, PostgreSQL Sinatra, REST APIs, Unit Teesting, Docker, JIRA, Figma, AWS (EC2, S3, Lambda), and pgAdmin.
                </p>
                <br />

               </div>
    </div>
  )
}

export default About
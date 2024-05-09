import React from 'react'
import HeroImage from "../assets/heroImage.png";
import {HiArrowNarrowRight} from 'react-icons/hi'
import Link from 'react-scroll/modules/components/Link';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full pl-60 bg-gradient-to-b from-black via-black to-gray-800 '>
       <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-10 md:flex-row'>
           <div className='flex flex-col justify-center h-full'>
               <h2 className='text-3xl sm:text-7xl font-bold text-white'>
                   Software Engineer
               </h2>
               <p className='text-gray-500 py-4 '>
                   Experienced software engineeer with two years of hands-on development experience, proficient in a range of programming languages and technologies. Throughout my career, I've successfully executed numerous projects, overseeing the entire software engineering life cycle from inception through deployment. Continuously seeking to expand technical knowledge and skills to improve as a software engineer. 
               </p>
               <div>
                   <Link
                   to='portfolio'
                   smooth
                   duration={500}
                   className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                       Portfolio 
                       <span className='group-hover:rotate-90 duration-300'>
                       <HiArrowNarrowRight size={25} className="ml-2" style={{cursor: 'pointer'}}/>
                       </span>
                   </Link>
               </div>
           </div>
           <div>
               <img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
           </div>
       </div>
    </div>
  )
}

export default Home
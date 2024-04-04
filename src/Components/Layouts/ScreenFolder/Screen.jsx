import React, { useState } from 'react'
import ScreenCard from './ScreenCard'
import Heading from '../../Heading'
import Scr1 from '../../../assets/scr-1.png'
import Scr2 from '../../../assets/scr-2.png'
import Scr3 from '../../../assets/scr-3.png'
import Scr4 from '../../../assets/scr-4.png'
import Scr5 from '../../../assets/scr-5.png'
import Scr6 from '../../../assets/scr-6.png'
import Scr7 from '../../../assets/scr-7.png'
import Scr8 from '../../../assets/scr-8.png'
import Scr9 from '../../../assets/scr-9.png'
import Scr10 from '../../../assets/scr-10.png'
import Flex from '../../Flex'
import { Link } from 'react-router-dom'
import Button from '../../Button'
import { FaArrowRightLong } from "react-icons/fa6";
import Filter from '../../../assets/filter.png'
import Image from '../../Image'
const Screen = () => {
    const [scr,setscr] = useState ([
        {
         img1:Scr1,

        },
        {
          img1:Scr2,

         },
         {
          img1:Scr3,

         },
         {
          img1:Scr4,

         },
         {
          img1:Scr5,

         },

        
    ]);

    const [scrn,setscrn] = useState ([
      {
        img2:Scr6,

       },
       {
        img2:Scr7,

       },
       {
        img2:Scr8,

       },
       {
        img2:Scr9,

       },
       {
        img2:Scr10,

       },

    ]);
  return (
    <>
    
    <div className="pt-16 pl-7 pb-7">
    <Flex className='items-center justify-between'>
    {/* Screen Heading Part */}
    <Heading as='h4' text='Screens' className='!text-[24px] !font-normal'/>
    {/* Screen Heading Part */}

    {/* See All Button Part */}
    <Link to="/" className="font-open text-bass  font-bold text-paraColor hover:text-black inline">See All</Link>
    {/* See All Button Part */}
    </Flex>
    </div>
  {/* Screen All Button Part Start */}
    
  <Flex className='pl-7 pt-4 relative'>
      {/* Before After */}
      <div className=" relative after:content-[''] after:absolute after:h-9 after:w-[2px] after:bg-gray-300 after:top-[-5px] after:right-[-15px]">
       <Link><Image src={Filter} alt={Filter} className='absolute pl-3 pt-1'/></Link> 
      <Link to="/" className="font-open text-bass border bg-sColor py-2.5 pl-8 pr-5 rounded-2xl font-bold inline">Filter</Link>
        </div>
        <div className="pl-7">
        <Button text='All' />
        <Button text='New' />
        <Button text='populer' />
        <Button text='Onboarding' />
        <Button text='Auth' />
        <Button text='Shop' />
        <Button text='Chat' />
        <Button text='TOP Verification' />
        <Button text='Dashboard' />
        <Button text='Food' />
        <Button text='Restaurent'/>
        <Button text='Fitness' />
        </div>
        <Link><FaArrowRightLong className='mx-2 text-xl'/></Link>
        
        </Flex>
 

    {/* Screen All Button Part End */}

    {/* Screen Image part one loop */}
    <div className="flex">
    {scr.map((el, index) =>(
        <div className="" key={index}>
        <ScreenCard
            img1={el.img1}
        />
        </div>
    ))}    
    </div>
    {/* Screen Image part one loop */}

    {/* Screen Image part two loop */}
    <div className="flex">
      {scrn.map((el, index) =>(
        <div className="" key={index}>
        <ScreenCard
            img2={el.img2}
        />
        </div>
    ))}    
    </div>
    {/* Screen Image part two loop */}
    </>
  )
}

export default Screen
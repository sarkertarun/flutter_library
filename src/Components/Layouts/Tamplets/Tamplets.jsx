import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TampletsCard from './TampletsCard'
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { CiSaveDown1 } from "react-icons/ci";
import Tem1 from '../../../assets/tem-1.png'
import Tem2 from '../../../assets/tem-2.png'
import Tem3 from '../../../assets/tem-3.png'
import Tem4 from '../../../assets/tem-4.png'
import Tem5 from '../../../assets/tem-5.png'
import Tem6 from '../../../assets/tem-6.png'
import Heading from '../../Heading'
import Flex from '../../Flex';

const Tamplets = () => {
    const [tem,settem] = useState ([
        {
            imgOne:Tem1,
            title:"Foodly Restaurent App Templets",
            iconOne:<HiMiniDevicePhoneMobile/> ,
            numOne:'28',
            iconTwo:<CiSaveDown1/>,
            numTwo:'546',

          },
          {
            imgOne:Tem2,
            title:"Flutter Animation Templets",
            iconOne:<HiMiniDevicePhoneMobile/> ,
            numOne:'28',
            iconTwo:<CiSaveDown1/>,
            numTwo:'546',

          },
          {
            imgOne:Tem3,
            title:"Flutter Animation Templets",
            iconOne:<HiMiniDevicePhoneMobile/> ,
            numOne:'28',
            iconTwo:<CiSaveDown1/>,
            numTwo:'546',

          },

          
    ]);
    const [temp,settemp] = useState ([
        {
            imgTwo:Tem4,
            title:"Foodly Restaurent App Templets",
            iconOne:<HiMiniDevicePhoneMobile/> ,
            numOne:'28',
            iconTwo:<CiSaveDown1/>,
            numTwo:'546',

          },
          {
            imgTwo:Tem5,
            title:"Flutter Animation Templets",
            iconOne:<HiMiniDevicePhoneMobile/> ,
            numOne:'28',
            iconTwo:<CiSaveDown1/>,
            numTwo:'546',

          },
          {
            imgTwo:Tem6,
            title:"Flutter Animation Templets",
            iconOne:<HiMiniDevicePhoneMobile/> ,
            numOne:'28',
            iconTwo:<CiSaveDown1/>,
            numTwo:'546',

          },

          
    ]);
  return (
    <>
   
    <div className="pt-24 pl-7 pb-7">
    <Flex className='items-center justify-between'>
    {/* Templets Heading */}
    <Heading as='h4' text='Tamplets' className='!text-[24px] !font-normal'/>
    {/* Templets Heading */}

    {/* See All Button Part */}
    <Link to="/" className="font-open text-bass  font-bold text-paraColor hover:text-black inline">See All</Link>
    {/* See All Button Part */}
    </Flex>
    </div>

    {/* Templets Part One loop */}
    <div className="flex ">
    {tem.map((el, index) =>(
        <div className="" key={index}>
        <TampletsCard
            imgOne={el.imgOne}
            title={el.title}
            iconOne={el.iconOne}
            numOne={el.numOne}
            iconTwo={el.iconTwo}
            numTwo={el.numTwo}
        />
        </div>
        
    ))}    
    </div>
    {/* Templets Part One loop */}

    {/* Templets Part Two loop */}
    <div className="flex mt-8 ">
    {temp.map((el, index) =>(
        <div className="" key={index}>
        <TampletsCard
            imgTwo={el.imgTwo}
            title={el.title}
            iconOne={el.iconOne}
            numOne={el.numOne}
            iconTwo={el.iconTwo}
            numTwo={el.numTwo}
        />
        </div>
        
    ))}    
    </div>
    {/* Templets Part Two loop */}
    </>
    
  )
}

export default Tamplets
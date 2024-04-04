import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ArticleCard from '../ArticleFolder/ArticleCard';
import Flex from '../../Flex'
import Heading from '../../Heading'
import Art1 from '../../../assets/art-1.png'
import Art2 from '../../../assets/art-2.png'
import Art3 from '../../../assets/art-3.png'
const Articles = () => {
    const [art,setart] = useState ([
        {
            img:Art1,
            date:'Mar 24, 2024',
            text:'Animation',
            title:"Learn Flutter Animation",
        },
        {
            img:Art2,
            date:'Mar 24, 2024',
            text:'Animation',
            title:"Onboarding Screen with Carousel & Animated Dots",
        },
        {
            img:Art3,
            date:'Mar 24, 2024',
            text:'Animation',
            title:"Parallax Scroll Effect with PageView in Flutter",
        },
    ]);
  return (
    <>
    <div className="pt-16 pl-7 pb-7">
    <Flex className='items-center justify-between'>
    {/* Articles Heading Part */}
    <Heading as='h4' text='Articles' className='!text-[24px] !font-normal'/>
    {/* Articles Heading Part */}

    {/* See All Button Part */}
    <Link to="/" className="font-open text-bass  font-bold text-paraColor hover:text-black inline">See All</Link>
    {/* See All Button Part */}
    </Flex>
    </div>

    {/* Articles loop */}
    <div className="flex ">
    {art.map((el, index) =>(
        <div className="" key={index}>
        <ArticleCard
            img={el.img}
            date={el.date}
            text={el.text}
            title={el.title}
        />
        </div>
        
    ))}    
    </div>
    {/* Arrticles loop */}
    
    </>
  )
}

export default Articles
import React from 'react'
import Image from '../Image'
import Logo from '../../assets/logo.png'
import Paragraph from '../Paragraph'
import Flex from '../Flex'
import { RiTwitterXLine } from "react-icons/ri";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";
import { IoLogoFacebook } from "react-icons/io";
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <section>

        <div className=" pt-12 border-b ">
        <Flex className=' '>
            <div className="w-1/2 border-b">
            <Image src={Logo} alt={Logo}/>
            <Paragraph className='leading-7 pr-8' text='Beautifully designed expertly crafted Flutter components and templates to jumpstart your projects and speed up your development process'/>

           {/* Social Icon Part Start */}
            <Flex className='pt-4'>
                <div className=" border py-3 px-3 mr-4 rounded-full bg-black cursor-pointer">
                    <RiTwitterXLine className='text-white text-lg'/>
                </div>
                <div className=" border py-3 px-3 mr-4 rounded-full bg-black cursor-pointer">
                    <RiLinkedinBoxFill className='text-white text-lg '/>
                </div>
                <div className=" border py-3 px-3 mr-4 rounded-full  bg-black cursor-pointer">
                    <FiInstagram className='text-white text-lg '/>
                </div>
                <div className=" border py-3 px-3 rounded-full bg-black cursor-pointer">
                    <IoLogoFacebook className='text-white text-lg '/>
                </div>
            </Flex>
            {/* Social Icon Part End */}

            </div>
            <div className="w-1/2 pb-14">
                <Flex className='gap-14 justify-end'>
                {/* Explor Part Start */}
                <Link>
                    <Paragraph className='!text-black !font-bold' text='Explore'/>
                    <Paragraph className='!text-black' text='Blog'/>
                    <Paragraph className='!text-black' text='Templets'/>
                    <Paragraph className='!text-black' text='Screens'/>
                </Link>
                {/* Explor Part End */}

                {/* Support Part Start */}
                <Link>
                    <Paragraph className='!text-black !font-bold' text='Support'/>
                    <Paragraph className='!text-black' text='Pricing'/>
                    <Paragraph className='!text-black' text='Become a Sponsor'/>
                    <Paragraph className='!text-black' text='Hire to Flutter Devs'/>
                </Link>
                {/* Support Part End */}
                </Flex>
            </div>
            </Flex>
        </div>
        {/* Copy Right Part Start */}
        <Flex className='pt-2 items-center justify-between'>
        <Paragraph text='Copyright 2024 TheFlutterLibrary. All rights reserved'/>
        <Paragraph text='Privecy Policy | Terms & Conditions | Cookie Policy'/>
        </Flex>
        {/* Copy Right Part End */}
    </section>
    </>
  )
}

export default Footer
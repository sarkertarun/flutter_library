import React from 'react'
import Container from '../Container'
import Image from '../Image'
import Logo from '../../assets/logo.png'
import Light from '../../assets/light.png'
import Flex from '../Flex'
import { IoSearch } from "react-icons/io5";
import SearchInput from '../SearchInput'
import MainManus from './MainMenu/MainManus'
import AllScreen from './AllScreen/AllScreen'
import Heading from '../Heading'
import { Link } from 'react-router-dom'
import TagLine from './TagLine'
import Tamplets from './Tamplets/Tamplets'
import Articles from './ArticleFolder/Articles'
import Screen from './ScreenFolder/Screen'
import Footer from './Footer'
const NavBar = () => {
 
  return (
    <>
   <section>
    <Container>
        <Flex>
            <div className="w-[210px] mb-3">
                            
            <div className=" pt-10 left-0 border-e">
                {/* Logo Part Start */}
                <div>
                <Image  src={Logo} alt={Logo} />
                </div>
                {/* Logo Part End */}

                {/* Main Menu Part Start */}
                <MainManus/>
                {/* Main Menu Part End */}

                {/* All Screen Part Start  */}
                  <div className="pl-7">
                  <Heading as='h4' text='All Screen' className='!text-[14px]'/>
                <AllScreen/>
                  </div>
                {/* All Screen Part End  */}
            </div>
            </div>

            <div className="w-[1230px]">
            
            <Flex>
              {/* Search Part Start */}
              <div>
              <Flex >
                <div className="relative">        
                  <IoSearch className='absolute mt-[51px] ml-7  text-2xl cursor-pointer'/> 
                </div>
                <div className='mt-10 ml-3 ' >
                  <SearchInput name="Search"  type="search" placeholder="Search..." aria-label="Search" className="pl-8"/>
                </div>
            </Flex>
              </div>
               {/* Search Part End */}

            <div>
            <Flex className='pt-14 pl-[720px]'>
              {/* Light Icon */}
              <div>
                <Link to='/'><Image src={Light} alt={Light}/></Link>
              </div>
              {/* Light Icon */}

              {/* Log in Button Part Start */}
              <div>
              <Link to="/" className=" font-open text-bass border-solid border rounded-2xl font-bold  hover:text-white  hover:bg-black px-4 py-4 ml-4  duration-300">Login</Link>
              </div>
            {/*Log in Button Part End */}

            {/* Get Pro Button Part Start */}
             <div>
             <Link to="/" className="font-open text-bass  border rounded-2xl font-bold hover:text-white hover:bg-black px-3.5 py-4 ml-4  left-9 inline duration-300">Get Pro</Link>
             </div>
            {/*Get Pro Button Part End */}
              </Flex>
            </div>
            </Flex>
            
            {/* TagLine Part Start */}
            <div className='pt-40 text-center '>
              <TagLine/>
            </div>
            {/* TagLine Part End */}

            {/* Tamplets Part Start */}
            <Tamplets/>
            {/* Tamplets Part End */}

            {/* Articles Part Start */}
            <Articles/>
            {/* Articles Part End */}

            {/* Screen Part Start */}
            <Screen/>
            {/* Screen Part End */}

            {/* Footer part Start */}
            <Footer/>
            {/* Footer part End */}

            </div>

        </Flex>
    </Container>
   </section>
    </>
  )
}

export default NavBar
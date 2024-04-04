import React from 'react'
import { Link } from 'react-router-dom'
import Paragraph from '../../Paragraph'
import Flex from '../../Flex'
const MainMenuCard = ({to,icon,text}) => {
  return (
    <>
        <div className="pl-2 pr-8  hover:bg-gray-200   cursor-pointer ">
        <Link to={to} target='_blank'>
         <Flex>
            <div className='ml-5 mt-4 mr-4 '>
                {icon}
            </div>
            <div>
                <Paragraph text={text} className='pt-2 pb-2  inline-block hover:text-black hover:text-sm hover:font-semibold ' />
            </div>
         </Flex>
        </Link>
    </div>
    </>
  )
}

export default MainMenuCard
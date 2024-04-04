import React from 'react'
import Flex from '../../Flex'
import Image from '../../Image'
import Paragraph from '../../Paragraph'
import { Link } from 'react-router-dom'

const ArticleCard = ({img,title,date,text}) => {
  return (
    <>
    <section>
    {/* Image Part Start */}
    <Link to='/'>
    <div className="ml-7">
    <Image src={img} alt={img}/>
    </div>
    </Link>
    {/* Image Part End */}
    


    {/* Date Part Start */}
    <Flex className="items-center gap-2 pl-7 pt-2 ">
     <div className='text-paraColor font-open font-normal text-sm'>{date}</div>
     <span className=' font-semibold font-open text-paraColor text-sm'>{text}</span>
     </Flex>
    {/* Date Part End */}


    {/* Title Part Start */}
    <div className='pl-7'>
    <Paragraph text={title} className='pt-1 !text-black !text-[15px]  !font-semibold'/>
    </div>
    {/* Title Part Start */}
    </section>
    </>
  )
}

export default ArticleCard
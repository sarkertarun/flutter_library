
import Flex from '../../Flex'
import Image from '../../Image'
import Paragraph from '../../Paragraph'
import { Link } from 'react-router-dom'


const TampletsCard = ({imgOne,imgTwo,title,iconOne,numOne,iconTwo,numTwo}) => {
  return (
    <>
    <section>
    {/* Image Part Start */}
    <Link to='/'>
    <div className="ml-7">
    <Image src={imgOne} alt={imgOne}/>
    <Image src={imgTwo} alt={imgTwo}/>
    </div>
    </Link>
    {/* Image Part End */}
    
    <Flex className='justify-between'>
    {/* Card Paragraph Part Start */}
    <div className='pl-7'>
    <Paragraph text={title} className='pl-1 !text-black !font-bold'/>
    </div>
    {/* Card Paragraph Part Start */}

    {/* Icon Part Start */}
    <div className='flex gap-1'>
    <Flex className="items-center ">
     <div className='text-paraColor'>{iconOne}</div>
     <span className=' font-semibold text-[16px]'>{numOne}</span>
     </Flex>
     <Flex className="items-center ">
     <div className='text-paraColor text-xl '>{iconTwo}</div>
     <span className='font-semibold text-[16px]'>{numTwo}</span>
     </Flex>
    </div>
    {/* Icon Part End */}
    </Flex>
    </section>
    </>
  )
}

export default TampletsCard
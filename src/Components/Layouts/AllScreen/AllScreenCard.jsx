
import Paragraph from '../../Paragraph'
import Flex from '../../Flex'

const AllScreenCard = ({text,number}) => {
  return (
    <>
    <div>
         <Flex className='items-center justify-between pr-5'>
            <div>
            <Paragraph text={text} className='pt-2' />
            </div>
            <div>
                <Paragraph text={number} className='pt-2 ' />
            </div>
         </Flex>
    </div>
    </>
  )
}

export default AllScreenCard
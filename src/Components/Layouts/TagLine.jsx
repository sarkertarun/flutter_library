import React from 'react'

import Heading from '../Heading'
import Paragraph from '../Paragraph'

const TagLine = () => {
  return (
    <>
    <section>
        <div>
            <Heading as='h2' text='Build your next App even faster' className='text-[40px] font-normal px-96 pb-4 text-wrap'/>
        </div>
        <div>
          <Paragraph text='Beautifully designed expertly crafted Flutter components and templates to jumpstart your projects and speed up your development process' className='px-[330px] leading-6 text-wrap'/>
        </div>
    </section>
    </>
  )
}

export default TagLine
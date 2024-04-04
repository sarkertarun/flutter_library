import React from 'react'
import Image from '../../Image'

import { Link } from 'react-router-dom'


const ScreenCard = ({img1,img2}) => {
  return (
    <>
    <section>
    
    {/* Image Part Start */}
        <Link to='/'>
        <div className="ml-7 mt-6 flex">
        <Image src={img1} alt={img1}/>
        <Image src={img2} alt={img2}/>

        </div>
        </Link>
    {/* Image Part End */}

    </section>
    </>
  )
}

export default ScreenCard
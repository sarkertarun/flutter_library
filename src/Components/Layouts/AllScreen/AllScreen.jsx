import React, { useState } from 'react'
import AllScreenCard from './AllScreenCard';

const AllScreen = () => {
    const [product,setproduct] = useState([
        {
            text:"Sign in",
            number:'10',
            

          },
          {
            text:"Chat",
            number:'5',

          },
          {
            text:"Onboarding",
            number:'18',

          },
          {
            text:"E-commerce",
            number:'9',

          },
          {
            text:"Check Out",
            number:'10',

          },
          {
            text:"Error",
            number:'4',

          },
        ]);
  return (
    <>
    <div className="justify-between py-2">
    {product.map((el, index) => (
            <div className="" key={index}>
              <AllScreenCard
                text={el.text}
                number={el.number}
                
              />
            </div>
          ))}
    </div>
    </>
  )
}

export default AllScreen
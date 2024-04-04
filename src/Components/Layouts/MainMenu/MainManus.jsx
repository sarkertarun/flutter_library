import React, { useState } from 'react'
import Discover from '../../Icon/Discover'
import Ui from '../../Icon/Ui'
import Screen from '../../Icon/Screen'
import Become from '../../Icon/Become'
import MainMenuCard from './MainMenuCard';
import Hire from '../../Icon/Hire'
import Articles from '../../Icon/Articles'

const MainManus = () => {
    const [product,setproduct] = useState([
        {
            icon:<Discover/>,
            text:"Discover",

          },
          {
            icon:<Ui/>,
            text:"UI Kits",

          },
          {
            icon:<Screen/>,
            text:"Screens",

          },
          {
            icon:<Articles/>,
            text:"Articles",

          },
          {
            icon:<Become/>,
            text:"Become Sponcor",

          },
          {
            icon:<Hire/>,
            text:"Hire Flutter Dev",

          },
        ]);
  return (
    <>
    <div className="justify-between py-6">
    {product.map((el, index) => (
            <div className="" key={index}>
              <MainMenuCard
                text={el.text}
                icon={el.icon}
                to={el.to}
              />
            </div>
          ))}
    </div>
 
    </>
  )
}

export default MainManus
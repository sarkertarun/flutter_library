import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({text, className}) => {
  return (
    <>
    <Link to='/' className={`${className} font-open text-bass border hover:bg-black hover:text-white mr-2 py-2.5 px-[8px] rounded-xl font-bold inline duration-500`}>{text}</Link>
    </>
  )
}

export default Button
import React from 'react'
import Logo from '../../assets/logo.png'

export default function Header() {
  return (
    <div className='flex flex-row h-12 px-4 py-2 bg-pilgrim'>
      <img src={Logo} className='h-10 w-auto'/>
    </div>
  )
}

import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header className='flex items-center justify-between text-lg bg-[#842A2A] text-white font-bold'>
        <h1 className='m-7'>Radix Spy</h1>
        <React.Fragment>
            <ul className='flex gap-10 m-7'>
                <Link to={'/'}><li className='hover:underline hover:underline-offset-2 cursor-pointer'>Home</li></Link>
                <Link to={'/features'}><li className='hover:underline hover:underline-offset-2 cursor-pointer'>Features</li></Link>
                <Link to={'/team'}><li className='hover:underline hover:underline-offset-2 cursor-pointer'>Team</li></Link>
                <Link to={'/login'}><li className='hover:underline hover:underline-offset-2 cursor-pointer'>Login</li></Link>
                <Link to={'/signup'}><li className='hover:underline hover:underline-offset-2 cursor-pointer'>SignUp</li></Link>
            </ul>
        </React.Fragment>
      </header>
    </div>
  )
}

export default Header

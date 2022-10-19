import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri'
import { HiOutlineMenu } from 'react-icons/hi'
import { FiLogOut } from 'react-icons/fi'

import logo from '../assets/logo.jpg'
import { links } from '../assets/constants'

const NavLinks = ({ handleClick, mobileMenuOpen }) => (
  <div className='mt-3'>
    {links.map((link) => (
      <NavLink to={link.to} key={link.name} className={`flex flex-col text-white 
      ${!mobileMenuOpen && 'hover:text-cyan-400'} justify-start items-center my-8 text-[12px] font-medium`} 
      onClick={() => handleClick && handleClick()}>
        <div className={`flex flex-col ${mobileMenuOpen ? 'hover:shadow-lg hover:bg-[#bac6f8]' : 'hover:bg-[#4862cb] hover:shadow-xl'} transition ease-in-out duration-300 p-2 rounded-md w-[100px] h-[80px] text-center`}>
          <link.icon className='w-6 h-6 m-auto' />
          <span className='m-auto'>{link.name}</span>
        </div>
      </NavLink>
    ))}
  </div>
)

const Sidebar = ({ setAuthToken }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <div className='md:flex hidden flex-col w-[140px] py-6 px-4 shadow-lg sidebar justify-between'>
        <div>
          <img src={logo} alt='logo' className='w-full h-[100px] object-contain' />
          <NavLinks mobileMenuOpen={mobileMenuOpen} />
        </div>
      <div onClick={() => setAuthToken(prevAuthToken => !prevAuthToken)} className={`flex flex-col p-2 text-center text-white text-[13px] font-medium mb-[100px]`}>
        <FiLogOut className=' w-5 h-5 mx-auto cursor-pointer hover:scale-110'/>
        <span className='font-xs cursor-default'>Log out</span>
      </div>
      </div>
      <div className='absolute md:hidden block right-3 top-6 z-10'>
        {mobileMenuOpen ? (
          <RiCloseLine className='w-6 h-6 text-[rgb(76,113,220)] mr-2 cursor-pointer' onClick={() => setMobileMenuOpen(false)} />
        ) : (<HiOutlineMenu className='w-6 h-6 text-[rgb(76,113,220)] mr-2 cursor-pointer' onClick={() => setMobileMenuOpen(true)} />)}
      </div>
      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl 
    from-white/10 to-[rgb(153,175,240)] backdrop-blur-lg z-10 p-6 md:hidden
      smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        {/* <img src={logo} alt='logo' className='w-full h-14 object-contain' /> */}
        <NavLinks mobileMenuOpen={mobileMenuOpen} handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  )
}

export default Sidebar;

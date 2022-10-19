import { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi'

import interreg from '../assets/interreg.jpg'
import balticlsc from '../assets/balticlsc.jpg'

const Navbar = ({ username }) => {
  // const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // navigate(`/search/${searchTerm}`)
  }

  return (
    <nav className='bg-white shadow-md flex flex-row items-center justify-between'>
      <div className='flex flex-row items-center'>
        <img src={balticlsc} alt='Baltic Logo' className='sm:ml-[30px] ml-[10px] w-[135px] h-[36px]'/>
        <img src={interreg} alt='Baltic Logo' className='lg:flex hidden ml-[20px] w-[250px] h-[50px]'/>
      </div>
      <div className='flex flex-row'>
        <form onSubmit={handleSubmit} autoComplete="off" className="p-4 text-gray-400">
          <div className="flex flex-row justify-start items-center hover:text-[rgb(76,113,220)] xl:mr-[200px] mr-[45px] relative">
            <FiSearch className='w-5 h-5 absolute right-3' />
            <input
              name='search-field'
              autoComplete='off'
              id='search-field'
              placeholder='Search...'
              // type='search'
              maxLength="18"
              value={searchTerm}
              onChange={(e) => {setSearchTerm(e.target.value)}}
              className='shadow focus:outline-none focus:shadow-lg appearance-none rounded-full  placeholder-gray-500 text-base text-gray-500 p-2'
            />
          </div>
        </form>
        <div className='md:flex hidden flex-col items-start justify-center mr-[30px] text-gray-500 text-xs'>
          <span>{`logged in as "${username}"`}</span>
          <span>version 24/January/2022 Prod</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

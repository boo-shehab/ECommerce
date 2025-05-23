import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from 'react-icons/hi2'
import SearchBar from './SearchBar'
import CartDrawer from '../Layout/CartDrawer'
import { IoMdClose } from 'react-icons/io'

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [navDrawerOpen, setNavDrawerOpen] = useState(false)

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen)
  }
  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }
  return (
    <>
        <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
            <div>
                <Link to="/" className='text-2xl font-medium'>Rabbit</Link>
            </div>
            <div className='hidden md:flex space-x-6'>
                <Link to="/collections/all?gender=Men" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Men</Link>
                
                <Link to="/collections/all?gender=Women" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>women</Link>
                
                <Link to="/collections/all?category=top+wear" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>top wear</Link>
                
                <Link to="/collections/all?category=bottom+wear" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>bottom wear</Link>
            </div>
            <div className='flex items-center space-x-4'>
                <Link to='/admin' className='block bg-black text-white px-2 rounded text-sm'>Admin
                </Link>
                <Link to='/' className='hover:text-black'>
                    <HiOutlineUser className='w-6 h-6 text-gray-700' />
                </Link>
                <button onClick={toggleCartDrawer} className='relative hover:text-black'>
                    <HiOutlineShoppingBag className='h-6 w-6 text-gray-700' />
                    <span className='absolute -top-1 bg-[var(--color-rabbit-red)] text-white text-xs rounded-full px-2 py-0.5'>4</span>
                </button>
                <SearchBar />
                <button className='md:hidden' onClick={toggleNavDrawer}>
                    <HiBars3BottomRight className='h-6 w-6 text-gray-700'/>
                </button>
            </div>
        </nav>
        <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
        <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${navDrawerOpen? 'translate-x-0' : '-translate-x-full'}`}>
            <div className='flex justify-end p-4'>
                <button onClick={toggleNavDrawer}>
                    <IoMdClose className='h-6 w-6 text-gray-600'/>
                </button>
            </div>
            <div className='p-4'>
                <h2 className='text-xl font-semibold mb-4'>Menu</h2>
                <nav>
                <Link to="/collections/all" onClick={toggleNavDrawer} className='block text-gray-600 hover:text-black'>Men</Link>
                <Link to="/collections/all?gender=Women" onClick={toggleNavDrawer} className='block text-gray-600 hover:text-black'>Women</Link>
                <Link to="/collections/all?category=top+wear" onClick={toggleNavDrawer} className='block text-gray-600 hover:text-black'>Top wear</Link>
                <Link to="/collections/all?category=bottom+wear" onClick={toggleNavDrawer} className='block text-gray-600 hover:text-black'>bottom wear</Link>
                </nav>
            </div>
        </div>
    </>
  )
}

export default NavBar
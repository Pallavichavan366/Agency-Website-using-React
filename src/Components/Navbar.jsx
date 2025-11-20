import React, { useState } from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'

const Navbar=({theme,setTheme})=>{

  const[sidebarOpen,setSidebarOpen]= useState(false)

    return (
    <div  className='flex justify-between  items-center px-4
    sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 
    backdrop-blur-xl font-medium bg-amber-50 dark:bg-gray-900/70'>

     <div className='flex items-center gap-3'> 
  <img src={theme === 'dark' ?assets.dark_logo:assets.agency} width={50}></img>
  <h1 className='text-xl font-semibold text-gray-800 dark:text-white tracking-wide'>
          Pixcel <span className='text-primary'>Nova</span>
        </h1>
        </div>

<div className={ `text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen ? 'max-sm:w-0  overflow-hidden ': 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 
right-0 max-sm:min-h-screen  max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 
flex sm:items-center gap-6 transition-all mr-8`}>

<img src={assets.close_icon} alt="" className='w-5 absolute right-4 top-4 sm:hidden' onClick={()=> setSidebarOpen(false)} />

<a onClick={()=>setSidebarOpen(false)} href="#" className=' sm:hover:border-b'>Home</a>
<a onClick={()=>setSidebarOpen(false)} href="#services" className=' sm:hover:border-b'>Servises</a>
<a onClick={()=>setSidebarOpen(false)} href="#our-work" className=' sm:hover:border-b'>Our Work</a>
<a onClick={()=>setSidebarOpen(false)} href="#" className=' sm:hover:border-b'>Contact Us</a>

    </div>
<div className='flex items-center gap-2 sm:gap-4'>

<ThemeToggleBtn theme={theme} setTheme={setTheme}/>
  <img src={theme === 'dark' ? assets.menu_icon_dark :assets.menu_icon}alt=""
  onClick={()=>setSidebarOpen(true)} className='w-8 sm:hidden' />

  <a href="#contact-us" className=' text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 
   py-2 rounded-full cursor-pointer hover:scale-103 transition-all '>
  connect <img src={assets.arrow_icon } width={14} alt="" /></a>
</div>

    </div>
    )}//navar section
  

export default Navbar

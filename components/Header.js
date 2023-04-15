import Image from 'next/image'
import React from 'react'


import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

import { HomeIcon,FlagIcon,PlayIcon,ShoppingCartIcon,UserGroupIcon } from "@heroicons/react/24/outline";
import HeaderIcon from './HeaderIcon';
import { signOut, useSession } from 'next-auth/react';









function Header() {

  const {data:session} = useSession();


  return (

    <div className=' sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
        <div>

        </div>
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                <MagnifyingGlassIcon className='h-6 text-gray-600'/>
            <input 
            className='hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink'
             type="text" 
             placeholder="Search Facebook"/>
    </div>
    
    <div className='flex justify-center flex-grow'>
        <div className='flex space-x-6 md:space-x-2'>
            <HeaderIcon active Icon={HomeIcon}/>
            <HeaderIcon Icon={FlagIcon}/>
            <HeaderIcon Icon={PlayIcon}/>
            <HeaderIcon Icon={ShoppingCartIcon}/>
            <HeaderIcon Icon={UserGroupIcon}/>
        </div>
    </div>
      <img
        onClick={signOut}
        src={session?.user?.image}
        alt="profile-pic"
        height={40}
        width={40}
        className='rounded-full mr-3 cursor-pointer'/>

        <div className='flex items-center sm:space-x-2 justify-end'> 
        <p className='whitespace-nowrap font-semibold pr-3'>{session?.user?.name}</p>
        </div>
      
    </div>
  )
}

export default Header
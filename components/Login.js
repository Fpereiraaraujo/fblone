import { signIn } from 'next-auth/react';
import Image from 'next/image'
import React from 'react'



function Login() {
  return (
    <div className='grid place-items-center'>
      <Image 
      src="https://links.papareact.com/t4i"
      height={400}
      width={400}
      />
        <h1
        onClick={signIn}
        className='p-5 bg-blue rounded-full text-white text-center cursor-pointer'>Login
        </h1>
    </div>
  );
}

export default Login
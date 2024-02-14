'use client'

import Input from '@/components/Input'
import { useState } from 'react'

export default function page () {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="netflixLogo" className="h-12"/>
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 w-full lg:w-2/5 lg:max-w-md p-16 self-center mt-2 rounded-md">
            <h2 className="text-white text-3xl font-semibold mb-8">Sign In</h2>
            <div className="flex flex-col gap-4">
              
              <Input id='username' value={name} label='Username' onChange={(ev: any) => {setName(ev.target.value)}} type='name'/>
              <Input id='email' value={email} label='Email' onChange={(ev: any) => {setEmail(ev.target.value)}} type='email'/>
              <Input id='password' value={password} label='Password' onChange={(ev: any) => {setPassword(ev.target.value)}} type='password'/>
              
              <button className='text-white w-full mt-5 bg-red-600 font-medium py-3 rounded-md text-lg hover:bg-red-700 transition'>
                Sign In
              </button>
              
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}
import React from 'react'
import Search from './Search'
import { Separator } from '@/components/ui/separator'
const Navbar = () => {
  return (
   
    <div className='   border-slate-400 sticky top-0 z-50 items-center  backdrop-blur-md flex justify-between p-3'>
       <h1 className=' text-white'>MOVIEdB</h1>
        <Search/>
    </div>
   
   

  )
}

export default Navbar
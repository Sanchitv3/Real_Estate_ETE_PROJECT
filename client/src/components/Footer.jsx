import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <footer class="bg-white  border relative top-16">
            <div class="container px-6 py-8 mx-auto">
            <div class="flex flex-col items-center text-center">
            <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)] rounded-full p-2'>
            <span className='text-blue-800 '><i class="fa fa-home" aria-hidden="true"></i> Dream</span>
            <span className=' text-black'>Estate</span>
          </h1>
        </Link>

           <h1 className='text-slate-700 font-bold  '>
        Find Your <span className='text-slate-500'> Space in the</span>
          <br />
          City of Dreams.
        </h1>

            
        </div>

        <hr class="my-10 border-gray-200 dark:border-gray-700" />

                <div class="flex flex-col items-center sm:flex-row sm:justify-between">
                     <p class="text-sm text-gray-500">© Copyright 2023. All Rights Reserved.</p>

                    <div class="flex mt-3 -mx-2 sm:mt-0">
                        <a href="#" class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Teams </a>

                        <a href="#" class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Privacy </a>

                        <a href="#" class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Cookies </a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
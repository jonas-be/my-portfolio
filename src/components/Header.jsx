import React from 'react'
import DarkModeToggle from './DarkModeToggle'
import Options from './Options'

function Header() {
    return (
        <>
            <div className="
            fixed w-full 
            flex justify-between items-center p-3 
            bg-white dark:bg-costum-gray-600 shadow-md z-50" >

                <h1 className='topic text-xl cursor-pointer' onClick={() => {window.location.href='/'}}>Jonas</h1>

                <Options />


            </ div>
            <div className='w-full h-[4.28rem]' />
        </>
    )
}


export default Header

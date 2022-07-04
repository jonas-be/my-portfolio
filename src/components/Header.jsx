import React from 'react'
import DarkModeToggle from './DarkModeToggle'
import Options from './Options'

function Header() {
    return (
        <div className="
            fixed w-full 
            flex justify-between items-center p-3 
            bg-white dark:bg-gray-700 shadow-md" >

            <h1 className='topic text-xl '>Jonas</h1>

            <Options />


        </ div>
    )
}


export default Header

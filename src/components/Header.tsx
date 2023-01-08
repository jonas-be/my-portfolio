import React from 'react'
import Options from './Options'
import Link from "next/link";

function Header() {
    return (
        <>
            <div className="
            fixed w-full 
            flex justify-between items-center p-3 
             z-50" >

                <Link href={"/"}  className="btn bg-accent-2 shadow-md">
                    <h1 className='text-accent font-bold text-lg'>Jonas</h1>
                </Link>

                <Options />

            </div>
            <div className='w-full h-[4.28rem]' />
        </>
    )
}


export default Header

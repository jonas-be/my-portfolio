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

                <Link href={"/"}  className="accent-background backdrop-blur-[.9px] rounded-2xl p-2.5 flex justify-center items-center">
                    <h1 className='topic text-xl cursor-pointer h-6 flex justify-center items-center'>Jonas</h1>
                </Link>

                <Options />

            </div>
            <div className='w-full h-[4.28rem]' />
        </>
    )
}


export default Header

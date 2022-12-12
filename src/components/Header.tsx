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

                <Link href={"/"}  className="bg-white/60 dark:bg-zinc-900/60 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 backdrop-blur-[.9px] rounded-2xl p-2.5 flex justify-center items-center">
                    <h1 className='topic text-xl cursor-pointer h-6 flex justify-center items-center'>Jonas</h1>
                </Link>

                <Options />

            </div>
            <div className='w-full h-[4.28rem]' />
        </>
    )
}


export default Header

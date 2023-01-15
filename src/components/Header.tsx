import React from 'react'
import Options from './Options'
import Link from "next/link";

function Header({spacerClassName}: Props) {
    return (
        <>
            <div className="
            fixed w-full 
            flex justify-between items-center p-3 
             z-50">

                <Link href={"/"} className="btn bg-accent-2 shadow-md rounded-2xl">
                    <p className='text-accent font-bold text-lg'>Jonas</p>
                </Link>

                <Options/>

            </div>
                <div className={`w-full h-[4.28rem] ${spacerClassName}`}/>
        </>
    )
}

type Props = {
    spacerClassName?: string
};


export default Header

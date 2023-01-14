import React from 'react'
import Options from './Options'
import Link from "next/link";

function Header({spacer}: Props) {
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
            {spacer === undefined || spacer ?
                <div className='w-full h-[4.28rem]'/>
                :
                ""
            }
        </>
    )
}

type Props = {
    spacer?: boolean
};


export default Header

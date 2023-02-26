import React from 'react'
import Options, {OptionProps} from './Options'
import Link from "next/link";
import {NextRouter} from "next/router";

function Header({logoTitle, options, router}: HeaderProps) {
    return (
        <>
            <div className="
            fixed w-full 
            flex justify-between items-center p-3 
             z-50" >

                <Link href={"/"}  className="btn px-4 py-2 bg-accent-2 shadow-md rounded-2xl">
                    <p className='text-accent font-bold text-lg'>{logoTitle}</p>
                </Link>

                <Options labels={options.labels} languageToggle={options.languageToggle} router={router}/>

            </div>
            <div className='w-full h-[4.28rem]' />
        </>
    )
}

export type HeaderProps = {
    logoTitle: string
    options: OptionProps
    router: NextRouter
}


export default Header

import React from 'react'
import Options, {OptionProps} from './Options'
import Link from "next/link";
import {NextRouter} from "next/router";
import {Socials} from "../skeleton/Skeleton";

function Header({logoTitle, options, socials, router}: HeaderProps) {
    return (
        <>
            <div className="
            fixed w-full 
            flex justify-between items-center p-3 
             z-50" >

                <Link href={"/"}  className="btn px-4 py-2 bg-base-2 shadow-md rounded-2xl">
                    <p className='text-accent font-bold text-lg'>{logoTitle}</p>
                </Link>

                <Options labels={options.labels} languageToggle={options.languageToggle} socials={socials} router={router}/>

            </div>
            <div className='w-full h-[4.28rem]' />
        </>
    )
}

export type HeaderProps = {
    logoTitle: string
    options: OptionProps
    socials: Socials
    router: NextRouter
}


export default Header

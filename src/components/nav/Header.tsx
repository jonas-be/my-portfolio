import React from 'react'
import Options from './Options'
import Link from "next/link";

function Header({logoTitle, labels}: HeaderProps) {
    return (
        <>
            <div className="
            fixed w-full 
            flex justify-between items-center p-3 
             z-50" >

                <Link href={"/"}  className="btn px-4 py-2 bg-accent-2 shadow-md rounded-2xl">
                    <p className='text-accent font-bold text-lg'>{logoTitle}</p>
                </Link>

                <Options labels={labels}/>

            </div>
            <div className='w-full h-[4.28rem]' />
        </>
    )
}

type HeaderProps = {
    logoTitle: string
    labels: {
        "drawer": string
        "darkModeToggleLight": string
        "darkModeToggleDark": string
        "githubLink": string
        "discordLink": string
    }
}


export default Header

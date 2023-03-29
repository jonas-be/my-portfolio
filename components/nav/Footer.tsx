import React from 'react'
import {FaBalanceScaleRight} from "react-icons/fa";
import Link from "next/link";
import Socials from "../common/Socials";
import {SocialsType} from "../skeleton/Skeleton";

function Footer({endOfSiteHeader, socials, impress, copyright}: FooterProps) {
    return (
        <footer className=''>
            <div className="bg border-t-1 border-base-2 z-30 relative">
                <p className='text-accent font-bold text-xl text-center p-3'>{endOfSiteHeader}</p>

                <div className="my-4">
                    <Socials socials={socials}/>
                </div>

                <Link href={"/imprint"}
                      className='btn text font-medium text-lg p-1 flex flex-row justify-center items-center'>
                    <FaBalanceScaleRight className="text-2xl text"/>
                    <div className="pl-2 text">{impress}</div>
                </Link>

                <p className='text text-center text-sm p-2 pt-7'>{copyright}</p>
            </div>
        </footer>
    )
}

type FooterProps = {
    endOfSiteHeader: string
    socials: SocialsType
    impress: string
    copyright: string
}

export default Footer

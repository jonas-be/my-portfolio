import React from 'react'
import {FaBalanceScaleRight, FaDiscord, FaGithub} from "react-icons/fa";
import Link from "next/link";

function Footer({endOfSiteHeader, githubLink, discordLink, impress, copyright}: FooterProps) {
    return (
        <footer className=''>
            <div className="bg border-t-1 border-base-2 z-30 relative">
                <p className='text-accent font-bold text-xl text-center p-3'>{endOfSiteHeader}</p>

                <Link href='https://github.com/jonas-be'
                   className='btn text font-medium text-lg p-1 flex flex-row justify-center items-center'>
                    <FaGithub className="text-2xl text"/>
                    <div className="pl-2 text">{githubLink}</div>
                </Link>

                <Link href='https://discord.gg/EbFsEQbB7J'
                   className='btn text font-medium text-lg p-1 flex flex-row justify-center items-center'>
                    <FaDiscord className="text-2xl text"/>
                    <div className="pl-2 text">{discordLink}</div>
                </Link>

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
    githubLink: string
    discordLink: string
    impress: string
    copyright: string
}

export default Footer

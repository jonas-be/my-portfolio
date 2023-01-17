import React from 'react'
import {FaBalanceScaleRight, FaDiscord, FaGithub} from "react-icons/fa";
import Link from "next/link";

function Footer() {
    return (
        <footer className='p-3 sm:p-6'>
            <div className="bg-accent-2 rounded-4xl">
                <p className='text-accent font-bold text-xl text-center p-3'>End of the Site</p>

                <Link href='https://github.com/jonas-be'
                   className='btn text font-medium text-lg p-1 flex flex-row justify-center items-center'>
                    <FaGithub className="text-2xl text"/>
                    <div className="pl-2 text">Github</div>
                </Link>

                <Link href='https://discord.gg/EbFsEQbB7J'
                   className='btn text font-medium text-lg p-1 flex flex-row justify-center items-center'>
                    <FaDiscord className="text-2xl text"/>
                    <div className="pl-2 text">Discord</div>
                </Link>

                <Link href={"/impress"}
                      className='btn text font-medium text-lg p-1 flex flex-row justify-center items-center'>
                    <FaBalanceScaleRight className="text-2xl text"/>
                    <div className="pl-2 text">Impress</div>
                </Link>

                <p className='text text-center text-sm p-2 pt-7'>Copyright © Jonas 2022</p>
            </div>
        </footer>
    )
}

export default Footer

import React from 'react'
import OptionLinkButton from "./OptionLinkButton";
import {FaDiscord, FaGithub} from "react-icons/fa";

function Footer() {
    return (
        <footer className='p-3 sm:p-6'>
            <div className="bg-accent-content rounded-5xl">
                <h3 className='text-accent text-xl text-center p-3'>End of the Site</h3>

                <a href='https://github.com/jonas-be'
                   className='flex flex-row justify-center items-center text font-medium text-lg p-1'>
                    <FaGithub className="text-2xl"/>
                    <div className='w-2'/>
                    Github
                </a>

                <a href='https://discord.gg/EbFsEQbB7J'
                   className='flex flex-row justify-center items-center text font-medium text-lg p-1'>
                    <FaDiscord className="text-2xl"/>
                    <div className='w-2'/>
                    Discord
                </a>


                <p className='text text-center text-sm p-2 pt-7'>Copyright © Jonas 2022</p>

            </div>
        </footer>
    )
}

export default Footer

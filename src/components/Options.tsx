import React from 'react'
import DarkModeToggle from './DarkModeToggle'
import OptionLinkButton from './OptionLinkButton'
import {FaDiscord, FaGithub} from "react-icons/fa";
import {IoMenu} from "react-icons/io5";


function Options() {

    function toggleDropdown() {
        let optionPanel = document.getElementById("optionPanle");
        if (optionPanel === null) throw Error;
        if (optionPanel.classList.contains("hidden")) {
            optionPanel.classList.remove("hidden")
        } else {
            optionPanel.classList.add("hidden")
        }
    }

    return (
        <>
            <button onClick={toggleDropdown} id="drawer"
                    className="sm:hidden text-gray-500 dark:text-zinc-400 hover:bg-zinc-200/60 dark:hover:bg-zinc-900/60 backdrop-blur-[.9px] rounded-2xl text-sm p-2.5">
                <IoMenu className="text-2xl"/>
            </button>


            <div id="optionPanle" onClick={toggleDropdown}
                 className='w-full sm:w-auto h-full fixed hidden sm:static sm:inline-block'>

                <div
                    className='fixed top-14 right-3 bg-white/60 sm:bg-zinc-200/60 dark:bg-zinc-900/60 shadow-md sm:shadow-none rounded-2xl sm:static sm:flex flex-col sm:flex-row backdrop-blur-[.9px]'>
                    <DarkModeToggle/>

                    <OptionLinkButton link="https://github.com/jonas-be"
                                      icon={<FaGithub className="text-2xl"/>}/>
                    <OptionLinkButton link="https://discord.gg/EbFsEQbB7J"
                                      icon={<FaDiscord className="text-2xl"/>}/>
                </div>
            </div>
        </>
    )
}

export default Options

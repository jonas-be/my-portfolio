import React from 'react'
import DarkModeToggle from './DarkModeToggle'
import OptionLinkButton from './OptionLinkButton'
import {FaDiscord, FaGithub} from "react-icons/fa";
import {IoMenu} from "react-icons/io5";
import LanguageToggle, {LanguageToggleProps} from "./LanguageToggle";
import {NextRouter} from "next/router";


function Options({labels, languageToggle, router}: OptionProps) {

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
            <button onClick={toggleDropdown} id="drawer" aria-label={labels.drawer}
                    className="sm:hidden btn rounded-2xl bg-accent-2 shadow-md text-sm p-2.5">
                <IoMenu className="text-2xl text"/>
            </button>


            <div id="optionPanle" onClick={toggleDropdown}
                 className='w-full sm:w-auto h-full fixed hidden sm:static sm:inline-block'>

                <div
                    className='fixed top-14 right-3 bg-accent-2 shadow-md rounded-2xl sm:static sm:flex flex-col sm:flex-row'>
                    <DarkModeToggle darkModeToggleDark={labels.darkModeToggleDark}
                                    darkModeToggleLight={labels.darkModeToggleLight}/>

                    <LanguageToggle openLabel={languageToggle.openLabel}
                                    title={languageToggle.title}
                                    languages={languageToggle.languages}
                                    done={languageToggle.done}
                                    router={router}/>

                    <OptionLinkButton link="https://github.com/jonas-be" label={labels.githubLink}
                                      icon={<FaGithub className="text-2xl text"/>}/>
                    <OptionLinkButton link="https://discord.gg/EbFsEQbB7J" label={labels.discordLink}
                                      icon={<FaDiscord className="text-2xl text"/>}/>
                </div>
            </div>
        </>
    )
}

export type OptionProps = {
    labels: {
        drawer: string,
        darkModeToggleLight: string,
        darkModeToggleDark: string,
        githubLink: string,
        discordLink: string
    }
    languageToggle: LanguageToggleProps
    router: NextRouter
}

export default Options

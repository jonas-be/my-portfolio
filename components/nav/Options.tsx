import React from 'react'
import DarkModeToggle from './DarkModeToggle'
import IconLinkButton from './IconLinkButton'
import {FaDiscord, FaGithub} from "react-icons/fa";
import {IoMenu} from "react-icons/io5";
import LanguageToggle, {LanguageToggleProps} from "./LanguageToggle";
import {NextRouter} from "next/router";
import {Popover} from "@headlessui/react";

function Options({labels, languageToggle, router}: OptionProps) {

    function optionDiv() {
        return (
            <div
                className='bg-base-2 shadow-md shadow-md rounded-2xl sm:static sm:flex flex-col sm:flex-row'>
                <DarkModeToggle darkModeToggleDark={labels.darkModeToggleDark}
                                darkModeToggleLight={labels.darkModeToggleLight}/>

                <LanguageToggle openLabel={languageToggle.openLabel}
                                title={languageToggle.title}
                                languages={languageToggle.languages}
                                done={languageToggle.done}
                                router={router}/>

                <IconLinkButton link="https://github.com/jonas-be" label={labels.githubLink}
                                icon={<FaGithub className="text-2xl text"/>}/>
                <IconLinkButton link="https://discord.gg/EbFsEQbB7J" label={labels.discordLink}
                                icon={<FaDiscord className="text-2xl text"/>}/>
            </div>
        )
    }

    return (
        <>
            <div className="hidden sm:inline">
                {optionDiv()}
            </div>
            <Popover className="inline sm:hidden relative">
                <Popover.Button className="sm:hidden btn rounded-2xl bg-accent-2 text-sm p-2.5">
                    <IoMenu className="text-2xl text"/>
                </Popover.Button>

                <Popover.Panel className="absolute z-10 mt-3">
                    {optionDiv()}
                </Popover.Panel>
            </Popover>

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

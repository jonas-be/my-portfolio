import React, {useState} from 'react'
import DarkModeToggle from './DarkModeToggle'
import IconLinkButton from './IconLinkButton'
import {FaDiscord, FaGithub} from "react-icons/fa";
import {IoMenu} from "react-icons/io5";
import LanguageToggle, {LanguageToggleProps} from "./LanguageToggle";
import {NextRouter} from "next/router";
import {Popover} from "@headlessui/react";
import {IoMdGlobe} from "react-icons/io";
import {Socials} from "../skeleton/Skeleton";

function Options({labels, socials, languageToggle, router}: OptionProps) {
    let [isLanguagePopUpOpen, setIsLanguagePopUpOpen] = useState(false)

    function optionDiv() {
        return (
            <div
                className='bg-base-2 shadow-md shadow-md rounded-2xl sm:static sm:flex flex-col sm:flex-row'>
                <DarkModeToggle darkModeToggleDark={labels.darkModeToggleDark}
                                darkModeToggleLight={labels.darkModeToggleLight}/>

                <button
                    onClick={(e) => {
                        setIsLanguagePopUpOpen(true)}}
                    className="btn p-2.5 flex justify-center items-center"
                    title={languageToggle.title}>
                    <IoMdGlobe className="text-2xl text"/>
                </button>

                <IconLinkButton link={socials.github} label={socials.githubTitle}
                                icon={<FaGithub className="text-2xl text"/>}/>
                <IconLinkButton link={socials.discordServer} label={socials.discordServerTitle}
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
            <LanguageToggle openLabel={languageToggle.openLabel}
                            title={languageToggle.title}
                            languages={languageToggle.languages}
                            done={languageToggle.done}
                            router={router}
                            isOpen={isLanguagePopUpOpen}
                            setIsOpen={setIsLanguagePopUpOpen}
            />
        </>
    )
}

export type OptionProps = {
    labels: {
        drawer: string,
        darkModeToggleLight: string,
        darkModeToggleDark: string,
    }
    socials : Socials
    languageToggle: LanguageToggleProps
    router: NextRouter
}

export default Options

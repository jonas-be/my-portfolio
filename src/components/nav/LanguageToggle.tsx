// <button
//     onClick={toggleDarkMode}
//     className="btn p-2.5 flex justify-center items-center"
//     title={darkModeIcon ? darkModeToggleLight : darkModeToggleDark}
// >
//     <IoMdGlobe className="text-2xl text"/>
// </button>

import {IoMdGlobe} from "react-icons/io";

import {Dialog, Transition} from '@headlessui/react'
import React, {Fragment, useState} from 'react'
import {NextRouter} from "next/router";
//
// const languages = [
//     {id: "de", name: 'German'},
//     {id: "en", name: 'English'},
//     {id: "fr", name: 'France'},
// ]

export default function LanguageToggle({openLabel, title, languages, cancel, router}: LanguageToggleProps) {
    let [isOpen, setIsOpen] = useState(false)

    function changeLocale(lang: string) {
        console.log(router)
        router.push({}, router.asPath, { locale: lang })
    }

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>

            <button
                onClick={openModal}
                className="btn p-2.5 flex justify-center items-center"
                title={openLabel}
                // title={darkModeIcon ? darkModeToggleLight : darkModeToggleDark}
            >
                <IoMdGlobe className="text-2xl text"/>
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25"/>
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className="w-full max-w-md transform overflow-hidden rounded-2xl bg-accent p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-accent text-lg font-medium leading-6"
                                    >
                                        {title}
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        {languages.map(lang =>
                                        <button key={lang.id} onClick={() => changeLocale(lang.id)}
                                                className="btn bg-accent-2 w-full m-1">
                                            {lang.name}</button>
                                        )}
                                    </div>

                                    <div className="mt-6">
                                        <button type="button" className="btn bg-error" onClick={closeModal}>
                                            {cancel}
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export type LanguageToggleProps = {
    openLabel: string
    title: string
    languages: {id: string, name: string}[]
    cancel: string
    router: NextRouter
}

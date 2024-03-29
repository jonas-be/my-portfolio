import {IoMdGlobe} from "react-icons/io";

import {Dialog, RadioGroup, Transition} from '@headlessui/react'
import React, {Fragment, useState} from 'react'
import {NextRouter} from "next/router";
import {ImRadioChecked, ImRadioUnchecked} from "react-icons/im";

export default function LanguageToggle({openLabel, title, languages, done, router, isOpen, setIsOpen}: LanguageToggleProps) {
    // let [isOpen, setIsOpen] = useState(false)

    function changeLocale(lang: string) {
        router.push({}, router.asPath, {locale: lang})
    }

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>

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
                        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm"/>
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
                                    className="w-full max-w-md transform overflow-hidden rounded-2xl bg-base-2 p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-accent text-lg font-medium leading-6"
                                    >
                                        {title}
                                    </Dialog.Title>


                                    <div className="mt-2">
                                        {languages.map(lang =>
                                            <button key={lang.id} onClick={() => changeLocale(lang.id)}
                                                    className={`btn bg-base w-full justify-between m-1 text `}>
                                                {lang.id === router.locale ? <ImRadioChecked className="text-info text-lg w-4"/> : <ImRadioUnchecked className={"text text-lg w-4"}/>}
                                                {lang.name}
                                                <div className="w-4"/>
                                            </button>
                                        )}
                                    </div>

                                    <div className="mt-6">
                                        <button type="button" className="btn bg-success w-full" onClick={closeModal}>
                                            {done}
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
    languages: { id: string, name: string }[]
    done: string
    router: NextRouter
    isOpen: boolean
    setIsOpen: any
}

import React from 'react';
import {Disclosure} from "@headlessui/react";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
import CodeStyle from "./CodeStyle";


const StyleGuideComponent = ({children, title, code}: any) => {

    return (
        <div className="border-2 rounded-2xl border-gray-400 m-4 bg-accent-content overflow-hidden">
            <h3 className="text-accent px-4 py-2">{title}</h3>
            <div className="p-4 flex justify-center items-center ">
                {children}
            </div>
            <div className="bg-accent-content-darker rounded-xl ">
                <Disclosure>
                    {({open}) => (
                        <>
                            <Disclosure.Button
                                className="flex w-full justify-between items-center rounded-xl px-4 py-2 text-left font-bold text-sm text-white focus-ring focus-visible:ring-2">
                                <span>Code</span>
                                {open ?
                                    <IoIosArrowUp/>
                                    :
                                    <IoIosArrowDown/>
                                }
                            </Disclosure.Button>
                            <Disclosure.Panel className="text-sm text">

                                <SyntaxHighlighter language="htmlbars" style={CodeStyle}>

                                    {code}
                                </SyntaxHighlighter>

                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    );
};

export default StyleGuideComponent;

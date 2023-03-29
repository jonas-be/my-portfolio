import React from 'react';
import {Disclosure} from "@headlessui/react";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
import CodeStyle from "./CodeStyle";


const StyleGuideComponent = ({children, title, code}: any) => {

    return (
        <div className="rounded-2xl m-4 bg-base overflow-hidden shadow">
            <h3 className="text-accent font-bold px-4 py-2">{title}</h3>
            <div className="p-4 flex justify-center items-center gap-2">
                {children}
            </div>
            <div className="bg-base-2 rounded-2xl ">
                <Disclosure>
                    {({open}) => (
                        <>
                            <Disclosure.Button
                                className="flex w-full justify-between items-center rounded-xl px-4 py-2 text-accent text-sm text-left font-semibold focus-ring">
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

import React from "react";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import Link from "next/link";
import BreadcrumbNavigation from "../../src/components/common/BreadcrumbNavigation";
import {HiChevronDoubleRight} from "react-icons/hi2";

function Index() {

    return (
        <>
            <Header/>
            <div className="w-full flex flex-col items-center justify-center">
                <BreadcrumbNavigation url={[]}/>

                <ul className="p-4">
                    <li className="flex items-center link text-secondary"><HiChevronDoubleRight/><Link
                        href="/styleguide/buttons">Buttons</Link></li>
                    <li className="flex items-center link text-secondary"><HiChevronDoubleRight/><Link
                        href="/styleguide/header-footer">Header/Footer</Link></li>
                </ul>
            </div>

            <div className="flex justify-center">
                <div className="grid grid-cols-3 md:grid-cols-6 w-96 md:w-[57rem] justify-items-center gap-8">
                    <div className="w-24 h-24 rounded-2xl bg-primary text-white font-semibold text-xs flex justify-center items-center"><span>bg-primary</span></div>
                    <div className="w-24 h-24 rounded-2xl bg-secondary text-white font-semibold text-xs flex justify-center items-center"><span>bg-secondary</span></div>
                    <div className="w-24 h-24 rounded-2xl bg-reverse text-accent-reverse font-semibold text-xs flex justify-center items-center"><span>bg-reverse</span></div>
                    <div className="w-24 h-24 rounded-2xl bg text font-semibold text-xs flex justify-center items-center"><span>bg</span></div>
                    <div className="w-24 h-24 rounded-2xl bg-accent text font-semibold text-xs flex justify-center items-center"><span>bg-accent</span></div>
                    <div className="w-24 h-24 rounded-2xl bg-accent-2 text font-semibold text-xs flex justify-center items-center"><span>bg-accent-2</span></div>
                </div>
            </div>

            <div className="flex justify-center my-4">
                <div className="grid grid-cols-3 md:grid-cols-5  md:w-[55rem] justify-items-center gap-2 bg-accent rounded-2xl p-4 md:p-2 md:py-4 ">
                    <div className="text-center text-primary font-semibold text-sm"><span>primary</span></div>
                    <div className="text-center text-secondary font-semibold text-sm"><span>secondary</span></div>
                    <div className="text-center text-accent font-semibold text-sm"><span>bg-text-accent</span></div>
                    <div className="text-center text-accent-reverse font-semibold text-sm"><span>text-accent-reverse</span></div>
                    <div className="text-center text font-semibold text-sm"><span>text</span></div>
                </div>
            </div>


            <div className="flex justify-center gap-4 py-10">
                <div className="rounded-2xl w-80 overflow-hidden shadow-lg">
                    <h3 className="text-accent font-bold bg-accent-2 px-6 py-3">Example Card</h3>
                    <div className="bg-accent px-6 py-4 text">
                        <p>This is example text because i was to lazy to copy <Link href="/styleguide/links" className="link text-primary">lorem ipsum</Link></p>
                        <div className="flex justify-between gap-4 pt-6">
                            <Link href="/styleguide/buttons" className="w-full font-semibold btn bg-primary ">Login</Link>
                            <Link href="/styleguide/buttons" className="w-full font-semibold btn border-secondary text-secondary btn-bordered">Register</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Index;




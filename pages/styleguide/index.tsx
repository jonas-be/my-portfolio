import React from "react";
import Header from "../../src/components/nav/Header";
import Footer from "../../src/components/nav/Footer";
import Link from "next/link";
import BreadcrumbNavigation from "../../src/components/common/BreadcrumbNavigation";
import {IoSunny} from "react-icons/io5";
import Skeleton from "../../src/components/skeleton/Skeleton";

function Index() {

    return (
        <Skeleton title={"Styleguide"} content="Styleguide"
                  bgGrid={false} gradient={false}>
            <div className="w-full flex flex-col items-center justify-center">
                <BreadcrumbNavigation homeName={"Styleguide"} urlPrefix={"/styleguide"} url={[]}/>

                {/*<ul className="p-4">*/}
                {/*    <li className="flex items-center link text-secondary"><HiChevronDoubleRight/><Link*/}
                {/*        href="/styleguide/buttons">Buttons</Link></li>*/}
                {/*    <li className="flex items-center link text-secondary"><HiChevronDoubleRight/><Link*/}
                {/*        href="/styleguide/header-footer">Header/Footer</Link></li>*/}
                {/*</ul>*/}
            </div>

            <div className="flex flex-col md:flex-row justify-center m-2 py-6 gap-16 lg:gap-40">
                <div className="grid grid-cols-3  justify-items-center gap-6">
                    <div
                        className="w-28 h-28 rounded-2xl bg-primary text-white font-semibold text-sm flex justify-center items-center">
                        <span>bg-primary</span></div>
                    <div
                        className="w-28 h-28 rounded-2xl bg-secondary text-white font-semibold text-sm flex justify-center items-center">
                        <span>bg-secondary</span></div>
                    <div
                        className="w-28 h-28 rounded-2xl bg-info text-white font-semibold text-sm flex justify-center items-center">
                        <span>bg-info</span></div>
                    <div
                        className="w-28 h-28 rounded-2xl bg-success text-white font-semibold text-sm flex justify-center items-center">
                        <span>bg-success</span></div>
                    <div
                        className="w-28 h-28 rounded-2xl bg-warning text-white font-semibold text-sm flex justify-center items-center">
                        <span>bg-warning</span></div>
                    <div
                        className="w-28 h-28 rounded-2xl bg-error text-white font-semibold text-sm flex justify-center items-center">
                        <span>bg-error</span></div>
                    <div
                        className="w-28 h-28 rounded-2xl bg-reverse text-accent-reverse font-semibold text-sm flex justify-center items-center">
                        <span>bg-reverse</span></div>
                    <div
                        className="w-28 h-28 rounded-2xl bg-accent text font-semibold text-sm flex justify-center items-center">
                        <span>bg-accent</span></div>
                    <div
                        className="w-28 h-28 rounded-2xl bg-accent-2 text font-semibold text-sm flex justify-center items-center">
                        <span>bg-accent-2</span></div>
                </div>

                <div className="grid grid-cols-2 justify-items-center gap-12 bg-accent rounded-3xl py-12 md:p-8 ">
                    <p className="text-left w-28 text-primary font-semibold text-sm">text-primary</p>
                    <p className="text-left w-28 text-secondary font-semibold text-sm">text-secondary</p>
                    <p className="text-left w-28 text-info font-semibold text-sm">text-info</p>
                    <p className="text-left w-28 text-success font-semibold text-sm">text-success</p>
                    <p className="text-left w-28 text-warning font-semibold text-sm">text-warning</p>
                    <p className="text-left w-28 text-error font-semibold text-sm">text-error</p>
                    <p className="text-left w-28 text-accent font-semibold text-sm">text-accent</p>
                    <p className="text-left w-28 text font-semibold text-sm">text</p>
                    <p className="text-left text-accent-reverse font-semibold text-sm col-span-2">text-accent-reverse</p>
                </div>
            </div>


            <div className="flex justify-center py-12">
                <div className="w-full flex justify-around md:w-[80rem] ">
                    <div className="flex flex-col gap-4">
                        <Link href="/styleguide/links" className="link text-success">Link</Link>
                        <Link href="/styleguide/links" className="link text-warning">Link</Link>
                        <Link href="/styleguide/links" className="link text-error">Link</Link>
                        <Link href="/styleguide/links" className="link text-secondary">Link</Link>
                        <Link href="/styleguide/links" className="link text-primary">Link</Link>
                        <Link href="/styleguide/links" className="link text-info">Link</Link>
                    </div>

                    <div className="flex flex-col gap-1">
                        <Link href="/styleguide/buttons" className="btn border-success text-success btn-bordered">
                            <IoSunny className="h-5"/>
                        </Link>
                        <Link href="/styleguide/buttons"
                              className="btn border-warning text-warning btn-bordered">Button</Link>
                        <Link href="/styleguide/buttons" className="btn btn-lg bg-error">Button</Link>
                        <Link href="/styleguide/buttons" className="btn bg-secondary">Button</Link>
                        <Link href="/styleguide/buttons" className="btn btn-sm bg-primary">Button</Link>
                        <Link href="/styleguide/buttons" className="btn btn-xs bg-info">Button</Link>
                    </div>
                </div>
            </div>
        </Skeleton>
    );
}

export default Index;




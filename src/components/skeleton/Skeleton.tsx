import React from 'react';
import Head from "next/head";
import BackgroundGrid from "./BackgroundGrid";
import Header from "../nav/Header";
import Footer from "../nav/Footer";

const Skeleton = ({title, content, gradient, bgGrid, children}: SkeletonProps) => {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={content}/>
            </Head>

            <div id="background" className="w-full h-full">

                {bgGrid ? <BackgroundGrid/> : ""}

                <div className="w-screen h-full"
                     style={gradient ? {background: "linear-gradient(125deg, rgba(99,102,241,.25) 0%, rgba(49,46,129,.05) 34%, rgba(45,49,131,0) 51%, rgba(30,58,138,.05) 74%, rgba(232,121,240,.25) 100%)"} : {}}>
                    <Header/>

                    {children}

                    <Footer/>
                </div>
            </div>
        </>
    );
};

type SkeletonProps = {
    title: string
    content: string
    gradient: boolean
    bgGrid: boolean

    children: any
}

export default Skeleton;

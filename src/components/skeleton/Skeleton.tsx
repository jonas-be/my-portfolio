import React from 'react';
import Head from "next/head";
import {NextRouter} from "next/router";
import BackgroundGrid from "./BackgroundGrid";
import Header, {HeaderProps} from "../nav/Header";
import Footer from "../nav/Footer";


const Skeleton = ({title, content, gradient, bgGrid, skeletonContentData, children, router}: SkeletonProps) => {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={content}/>
            </Head>

            <div id="background" className="w-full h-[100vh]">

                {bgGrid ? <BackgroundGrid/> : ""}

                <div className="w-screen h-full"
                     style={gradient ? {background: "linear-gradient(125deg, rgba(99,102,241,.25) 0%, rgba(49,46,129,.05) 34%, rgba(45,49,131,0) 51%, rgba(30,58,138,.05) 74%, rgba(232,121,240,.25) 100%)"} : {}}>
                    <Header logoTitle={skeletonContentData.header.logoTitle}
                            options={skeletonContentData.header.options}
                            router={router}
                    />

                    {children}

                    <Footer endOfSiteHeader={skeletonContentData.endOfSiteHeader}
                            githubLink={skeletonContentData.githubLink}
                            discordLink={skeletonContentData.discordLink}
                            impress={skeletonContentData.imprint}
                            copyright={skeletonContentData.copyright}
                    />
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
    router: NextRouter
    skeletonContentData: SkeletonContentData
}

export type SkeletonContentData = {
    header: HeaderProps
    endOfSiteHeader: string
    githubLink: string
    discordLink: string
    imprint: string
    copyright: string
}

export default Skeleton;

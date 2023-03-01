import React from 'react';
import Head from "next/head";
import {NextRouter} from "next/router";
import BackgroundGrid from "./BackgroundGrid";
import Header, {HeaderProps} from "../nav/Header";
import Footer from "../nav/Footer";


const Skeleton = ({
                      title,
                      content,
                      gradient,
                      gradientReverse,
                      bgGrid,
                      skeletonContentData,
                      children,
                      router
                  }: SkeletonProps) => {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={content}/>
            </Head>

            <div className="w-full h-full">

                {bgGrid ? <BackgroundGrid/> : ""}

                <div className={`w-screen h-full
                    ${gradient ? gradientReverse ? "bg-gradient-reverse" : "bg-gradient" : ""}
                    `}
                >
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
    gradientReverse?: boolean
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

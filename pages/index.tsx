import {MouseParallaxChild, MouseParallaxContainer} from "react-parallax-mouse";
import React from "react";
import {AnimationOnScroll} from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import Skeleton from "../src/components/skeleton/Skeleton";
import {GetServerSidePropsContext} from 'next'
import {ContentDataType, getContentDataJson} from "../src/components/common/ContentDataUtil";

type ContentData = {
    "title": string,
    "contentSEO": string,
    "content": {
        "heroFirstLine": string,
        "heroSecondLine": string,
        "textHeader": string,
        "textDescription": string,
        "aboutMe": {
            "header": string,
            "name": string,
            "aka": string,
            "age": string,
            "location": string,
            "job": string
        }
    }
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    if (context.locale === undefined) {
        context.locale = "en"
    }
    context.locale = "en"

    return {
        props: getContentDataJson(context.locale, ContentDataType.PAGE, "/index",
            {
                title: "Server Render Error",
                contentSEO: "Server Render Error",
                content: {
                    heroFirstLine: "Server",
                    heroSecondLine: "Render Error",
                    textHeader: "---,",
                    textDescription: "----\n-----\n---",
                    aboutMe: {
                        header: "---",
                        name: "---",
                        aka: "---",
                        age: "---",
                        location: "---",
                        job: "---"
                    }
                }
            }
        )
    };
}

function Index({title, contentSEO, content}: ContentData) {
    console.log()

    return (
        <Skeleton title={title}
                  content={contentSEO}
                  gradient={true} bgGrid={true}
                  skeletonContentData={{
                      logoTitle: "!Jonas",
                      labels: {
                          drawer: "!Toggle menu",
                          darkModeToggleLight: "!Enable LightMode",
                          darkModeToggleDark: "!Enable DarkMode",
                          githubLink: "!GitHub",
                          discordLink: "!Community Discord"
                      },
                      endOfSiteHeader: "!End of the Site",
                      githubLink: "!GitHub",
                      discordLink: "!Discord",
                      impress: "!Impress",
                      copyright: "!Copyright © Jonas Bender 2023"
                  }}>

            <MouseParallaxContainer
                className="w-full h-[60vh] flex flex-col justify-center align-center"
                globalFactorX={0.2} globalFactorY={0.0}
                resetOnLeave
                inverted={true}>

                <h1>
                    <MouseParallaxChild factorX={0.15} factorY={0.15}>
                        <AnimationOnScroll animateIn="animate__slideInDown"
                                           className='text-fuchsia-400 text-center text-4xl font-bold'>
                            <i>{content.heroFirstLine}</i>
                        </AnimationOnScroll>
                    </MouseParallaxChild>

                    <MouseParallaxChild factorX={0.1} factorY={0.1}>
                        <AnimationOnScroll animateIn="animate__pulse" delay={300} initiallyVisible={true}
                                           className='text-accent text-center text-8xl font-bold p-3'>
                            {content.heroSecondLine}
                        </AnimationOnScroll>
                    </MouseParallaxChild>
                </h1>

            </MouseParallaxContainer>


            <div
                className="flex flex-col xl:flex-row xl:gap-20 justify-center items-center xl:items-start xl:justify-center">

                <div className="p-6">
                    <h2 className="text-accent font-bold text-xl">{content.textHeader}</h2>
                    <p className="text pt-4">
                        {content.textDescription}
                    </p>
                </div>

                <AnimationOnScroll animateIn="animate__fadeInUp">
                    <div className="bg-accent-2 w-fit p-6 m-2 sm:m-4 sm:p-8 rounded-5xl">
                        <table className="max-w-sm">
                            <caption className="text-accent text-lg pb-6">{content.aboutMe.header}</caption>
                            <tbody>
                            <tr>
                                <td className="text-accent text-right font-bold py-4 pr-2 sm:pr-4">Name:</td>
                                <td className="text min-w-[5rem]">{content.aboutMe.name}</td>
                            </tr>
                            <tr>
                                <td className="text-accent text-right font-bold py-4 pr-2 sm:pr-4">Aka:</td>
                                <td className="text min-w-[5rem]">{content.aboutMe.aka}</td>
                            </tr>
                            <tr>
                                <td className="text-accent text-right font-bold py-4 pr-2 sm:pr-4">Age:</td>
                                <td className="text">{content.aboutMe.age}</td>
                            </tr>
                            <tr>
                                <td className="text-accent text-right font-bold py-4 pr-2 sm:pr-4">Location:</td>
                                <td className="text">{content.aboutMe.location}</td>
                            </tr>
                            <tr>
                                <td className="text-accent text-right font-bold py-4 pr-2 sm:pr-4">Job:</td>
                                <td className="text ">{content.aboutMe.job}</td>
                                <td className=" w-10 sm:w-16 h-2"></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </AnimationOnScroll>
            </div>

        </Skeleton>
    );
}

export default Index;

import {MouseParallaxChild, MouseParallaxContainer} from "react-parallax-mouse";
import React from "react";
import {AnimationOnScroll} from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import Skeleton, {SkeletonContentData} from "../components/skeleton/Skeleton";
import {GetServerSidePropsContext} from 'next'
import {ContentDataType, getContentDataJson} from "../components/utils/ContentDataUtil";
import {selectLanguage, SKELETON_DATA} from "../components/utils/StaticContentUtil";
import {useRouter} from "next/router";
import ReactMarkdown from "react-markdown";
import ProjectList from "../components/common/ProjectList";
import {ProjectLinkMapping} from "../components/utils/BlogSystemUtil";
import WidthLimit from "../components/common/WidthLimit";
import Link from "next/link";
import Socials from "../components/common/Socials";


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

    const pageContentData = await getContentDataJson(context, ContentDataType.PAGE, "/index",
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

    const projects: { list: ProjectLinkMapping[] } = await getContentDataJson(context, ContentDataType.LIST, "pages/projects", [])

    return {
        props: {
            pageContentData: pageContentData,
            projects: projects
        }
    };
}

function Index({pageContentData, projects}: Props) {

    const router = useRouter()
    const skeletonContentData = selectLanguage(SKELETON_DATA, router.locale)

    return (
        <Skeleton title={pageContentData.title}
                  content={pageContentData.contentSEO}
                  gradient={true} bgGrid={true}
                  skeletonContentData={skeletonContentData}
                  router={router}>
            <WidthLimit maxWidthClassNames="max-w-[70rem] xl:max-w-[90rem]">

                <MouseParallaxContainer
                    className="w-full h-[60vh] flex flex-col justify-center align-center"
                    globalFactorX={0.2} globalFactorY={0.0}
                    resetOnLeave
                    inverted={true}>

                    <h1>
                        <MouseParallaxChild factorX={0.15} factorY={0.15}>
                            <AnimationOnScroll animateIn="animate__slideInDown"
                                               className='text-primary text-center text-4xl font-bold'>
                                <i>{pageContentData.content.heroFirstLine}</i>
                            </AnimationOnScroll>
                        </MouseParallaxChild>

                        <MouseParallaxChild factorX={0.1} factorY={0.1}>
                            <AnimationOnScroll animateIn="animate__pulse" delay={300} initiallyVisible={true}
                                               className='text-accent text-center text-8xl font-bold p-3'>
                                {pageContentData.content.heroSecondLine}
                            </AnimationOnScroll>
                        </MouseParallaxChild>
                    </h1>

                </MouseParallaxContainer>

                <div className="flex justify-center">
                    <Socials/>
                </div>


                <div
                    className="flex flex-col lg:flex-row sm:mx-8 lg:mx-14 xl:mx-24 mb-10 lg:gap-20 justify-center items-center lg:items-start">

                    <div className="p-6 mt-6">
                        <h2 className="text-accent font-bold text-xl">{pageContentData.content.textHeader}</h2>
                        <ReactMarkdown className="text pt-4">{pageContentData.content.textDescription}</ReactMarkdown>
                    </div>

                    <AnimationOnScroll animateIn="animate__fadeInUp">
                        <div className="bg-base-2 w-max p-6 m-2 sm:m-4 sm:p-8 rounded-5xl">
                            <table className="max-w-sm">
                                <caption
                                    className="text-accent text-lg pb-6">{pageContentData.content.aboutMe.header}</caption>
                                <tbody>
                                <tr>
                                    <td className="text-accent text-right font-bold py-4 pr-2 sm:pr-4">Name:</td>
                                    <td className="text min-w-[5rem]">{pageContentData.content.aboutMe.name}</td>
                                </tr>
                                <tr>
                                    <td className="text-accent text-right font-bold py-4 pr-2 sm:pr-4">Aka:</td>
                                    <td className="text min-w-[5rem]">{pageContentData.content.aboutMe.aka}</td>
                                </tr>
                                <tr>
                                    <td className="text-accent text-right font-bold py-4 pr-2 sm:pr-4">Age:</td>
                                    <td className="text">{pageContentData.content.aboutMe.age}</td>
                                </tr>
                                <tr>
                                    <td className="text-accent text-right font-bold py-4 pr-2 sm:pr-4">Location:</td>
                                    <td className="text">{pageContentData.content.aboutMe.location}</td>
                                </tr>
                                <tr>
                                    <td className="text-accent text-right font-bold py-4 pr-2 sm:pr-4">Job:</td>
                                    <td className="text ">{pageContentData.content.aboutMe.job}</td>
                                    <td className=" w-10 sm:w-16 h-2"></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </AnimationOnScroll>
                </div>

                <ProjectList baseUrl="/projects" list={projects.list}/>
            </WidthLimit>
        </Skeleton>
    );
}

type Props = {
    pageContentData: ContentData,
    projects: {
        list: ProjectLinkMapping[]
    },
    skeletonContentData: SkeletonContentData
}

export default Index;

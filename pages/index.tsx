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
import CodeStyle from "../components/styleguide/CodeStyle";
import SyntaxHighlighter from 'react-syntax-highlighter';


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

                <h1>
                    <i className="text-primary">{pageContentData.content.heroFirstLine}</i>
                    <span> {pageContentData.content.heroSecondLine}</span>
                </h1>




                <div
                    className="flex flex-col lg:flex-row sm:mx-8 lg:mx-14 xl:mx-24 mb-10 lg:gap-20 justify-center items-center lg:items-start">

                    <div className="p-6 mt-6">
                        <h2 className="text-accent font-bold text-xl">{pageContentData.content.textHeader}</h2>
                        <ReactMarkdown className="text pt-4">{pageContentData.content.textDescription}</ReactMarkdown>
                    </div>

                        <div className="z-20 bg-zinc-800 border-1 border-zinc-700 w-max p-6 m-2 sm:m-4 rounded-4xl">
                            <h2 className="px-1 pb-2 mb-1 border-b-1 border-zinc-700">
                                <span className="text-accent">{pageContentData.content.aboutMe.name}</span>
                                <i className="text-sm text">.json</i>
                            </h2>
                            <SyntaxHighlighter language="json" style={CodeStyle}>
                                {JSON.stringify(pageContentData.content.aboutMe).replaceAll(",", ",\n\t").replaceAll(":", " : ").replace("{", "{\n\t").replace("}", "\n}")}
                            </SyntaxHighlighter>
                        </div>
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

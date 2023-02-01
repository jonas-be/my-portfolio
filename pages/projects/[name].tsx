import React, {useEffect} from "react";
import Skeleton from "../../src/components/skeleton/Skeleton";
import {GetServerSidePropsContext} from 'next'
import {ContentDataType, getContentDataJson} from "../../src/components/utils/ContentDataUtil";
import {selectLangauge, SKELETON_DATA} from "../../src/components/utils/StaticContentUtil";
import {useRouter} from "next/router";
import {getBlogId, ProjectLinkMapping} from "../../src/components/utils/BlogSystemUtil";
import SiteBuilder from "../../src/components/sitebuilder/SiteBuilder";


type ContentData = {
    "title": string,
    "contentSEO": string,
    "content": { type: string }[]
}


export async function getServerSideProps(context: GetServerSidePropsContext) {
    const blogId = await getBlogId(context, "pages/projects");

    const pageContentData = await getContentDataJson(context, ContentDataType.PROJECT, "/" + blogId.primaryLink,
        {
            title: "Server Render Error",
            contentSEO: "Server Render Error",
            content: [
                {type: "error"}
            ]
        }
    )

    return {
        props: {
            blogId: blogId,
            pageContentData: pageContentData
        }
    };
}

function Project({blogId, pageContentData}: Props) {

    const router = useRouter()
    const skeletonContentData = selectLangauge(SKELETON_DATA, router.locale)

    useEffect(() => {
        router.query.name = blogId.primaryLink
        router.query.id = blogId.id
        router.push(router)
    }, []);

    return (
        <Skeleton title={pageContentData.title}
                  content={pageContentData.contentSEO}
                  gradient={true} bgGrid={false}
                  skeletonContentData={skeletonContentData}
                  router={router}>

            <SiteBuilder content={pageContentData.content}/>


        </Skeleton>
    );
}

type Props = {
    blogId: ProjectLinkMapping
    pageContentData: ContentData
}

export default Project;

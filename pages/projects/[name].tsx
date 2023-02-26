import React, {useEffect} from "react";
import Skeleton from "../../components/skeleton/Skeleton";
import {GetServerSidePropsContext} from 'next'
import {ContentDataType, getContentDataJson} from "../../components/utils/ContentDataUtil";
import {selectLanguage, SKELETON_DATA} from "../../components/utils/StaticContentUtil";
import {useRouter} from "next/router";
import {getBlogId, ProjectLinkMapping} from "../../components/utils/BlogSystemUtil";
import SiteBuilder from "../../components/sitebuilder/SiteBuilder";


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
    const skeletonContentData = selectLanguage(SKELETON_DATA, router.locale)

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

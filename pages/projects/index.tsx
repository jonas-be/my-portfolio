import React from 'react';
import Skeleton from "../../src/components/skeleton/Skeleton";
import {useRouter} from "next/router";
import {selectLangauge, SKELETON_DATA} from "../../src/components/utils/StaticContentUtil";
import ProjectList from "../../src/components/common/ProjectList";
import {GetServerSidePropsContext} from "next";
import {ProjectLinkMapping} from "../../src/components/utils/BlogSystemUtil";
import {ContentDataType, getContentDataJson} from "../../src/components/utils/ContentDataUtil";


export async function getServerSideProps(context: GetServerSidePropsContext) {
    const projects: { list: ProjectLinkMapping[] } = await getContentDataJson(context, ContentDataType.LIST, "pages/projects", [])

    return {
        props: {
            projects: projects
        }
    };
}

const Projects = ({projects}: Props) => {
    const router = useRouter()
    // const prop =
    //     {
    //         "list": [
    //             {
    //                 "id": 1,
    //                 "primaryLink": "my-portfolio",
    //                 "links": [
    //                     "my-portfolio",
    //                     "my-website"
    //                 ]
    //             },
    //             {
    //                 "id": 2,
    //                 "primaryLink": "my-test",
    //                 "links": [
    //                     "my-test",
    //                     "test"
    //                 ]
    //             }
    //         ]
    //     }

    const skeletonContentData = selectLangauge(SKELETON_DATA, router.locale)

    return (
        <Skeleton title={"Projects"}
                  content={"Projects"}
                  gradient={true} bgGrid={false}
                  skeletonContentData={skeletonContentData}
                  router={router}>
            <ProjectList baseUrl="/projects" list={projects.list}/>
        </Skeleton>
    );
};

type Props = {
    projects: {
        list: ProjectLinkMapping[]
    }
}


export default Projects;

import Skeleton from "../../components/skeleton/Skeleton";
import {useRouter} from "next/router";
import {selectLanguage, SKELETON_DATA} from "../../components/utils/StaticContentUtil";
import ProjectList from "../../components/common/ProjectList";
import {GetServerSidePropsContext} from "next";
import {ProjectLinkMapping} from "../../components/utils/BlogSystemUtil";
import {ContentDataType, getContentDataJson} from "../../components/utils/ContentDataUtil";


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
    const skeletonContentData = selectLanguage(SKELETON_DATA, router.locale)

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

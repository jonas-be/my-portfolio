import {GetServerSidePropsContext} from "next";
import {ContentDataType, getContentDataJson} from "./ContentDataUtil";

export type ProjectLinkMapping = { id: any, title: string, primaryLink: string, links: string[] };

export async function getBlogId(context: GetServerSidePropsContext, path: string): Promise<ProjectLinkMapping> {
    const query = context.query
    const projects: { list: ProjectLinkMapping[] } = await getContentDataJson(context, ContentDataType.LIST, path, null)

    if (projects.list === undefined)
        return {id: -1, title: "Not Found", primaryLink: "not-found", links: ["not-found"]}

    if (query.id !== undefined) {
        const idMatches = projects.list.find((p: ProjectLinkMapping) => p.id == query.id);
        if (idMatches !== undefined) return idMatches
    }
    if (query.name !== undefined) {
        const nameMatches = projects.list.find((p: ProjectLinkMapping) => p.links.includes(query.name + ""));
        if (nameMatches !== undefined) return nameMatches
    }

    return {id: -1, title: "Not Found", primaryLink: "not-found", links: ["not-found"]}
}
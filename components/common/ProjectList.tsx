import Link from "next/link";
import {ProjectLinkMapping} from "../utils/BlogSystemUtil";
import React from "react";
import ReactMarkdown from "react-markdown";
import {BsArrowRight} from "react-icons/bs";

const ProjectList = ({baseUrl, projects, preview}: Props) => {

    return (
        <div className="">
            <Link href={baseUrl}>
                <h2 className="p-10 pb-4 text-3xl">{projects.projects}</h2>
            </Link>

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${projects.list.length !== 2 ? "3":"2 lg:px-28 xl:px-52"}`}>
                {(preview ? projects.list.slice(0, 3) : projects.list).map(i =>
                    <li key={i.primaryLink}
                        className=" flex flex-col justify-between
                            m-6
                            bg-base-2 shadow-lg
                            rounded-4xl overflow-hidden
                            border-base border-1">
                        <Link href={baseUrl + "/" + i.primaryLink}
                              className="flex justify-center w-full h-52 bg-base-2 border-base ">
                            <img src={i.imgUrl} alt="symbolic project icon" className="h-full "/>
                        </Link>
                        <div className="w-full h-full flex flex-col justify-between px-4">
                            <div className="h-40 overflow-hidden">
                                <h3 className="py-2">{i.title}</h3>
                                <ReactMarkdown className="text" children={i.contentSEO}/>
                            </div>
                            <Link href={baseUrl + "/" + i.primaryLink}
                                  className="btn btn-xs gap-2 btn-bordered border-accent-200 dark:border-accent-200-dark text-accent mt-6 my-4 group/edit">
                                {projects.readMore}
                                <BsArrowRight className="text-accent text-sm group-hover/edit:translate-x-0.5"/>
                            </Link>
                        </div>
                    </li>
                )}
            </div>
            {preview ?
                <div className="flex justify-center">
                    <Link href={baseUrl}
                          className="btn btn-lg rounded-full px-20 bg-primary text-accent-200-dark font-bold my-4 mb-10 group/edit">
                        {projects.moreProjects}
                    </Link>
                </div>
                : ""}
        </div>
    );
};

export type Projects = {
    projects: string
    readMore: string
    moreProjects: string
    list: ProjectLinkMapping[]
}


type Props = {
    baseUrl: string
    projects: Projects
    preview?: boolean
}

export default ProjectList;

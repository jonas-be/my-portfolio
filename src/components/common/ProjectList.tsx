import Link from "next/link";
import {ProjectLinkMapping} from "../utils/BlogSystemUtil";
import React from "react";
import ReactMarkdown from "react-markdown";
import {BsArrowRight} from "react-icons/bs";

const ProjectList = ({baseUrl, list}: Props) => {

    return (
        <ul>
            <h2 className="p-10 pb-4 text-3xl">Projects</h2>
            {list.map(i =>
                <li className="flex flex-col odd:md:flex-row even:md:flex-row-reverse items-center md:justify-between w-full m-4 p-4 pb-16 rounded-xl">
                    <Link href={baseUrl + "/" + i.primaryLink} className="px-10">
                        <img src={i.imgUrl} alt="symbolic project icon" width="400" height="0"/>
                    </Link>
                    <div className="p-2 w-full md:w-[80vw] lg:w-[50vw] xl:w-[30vw]">
                        <h3 className="py-2">{i.title}</h3>
                        <ReactMarkdown className="text" children={i.contentSEO}/>
                        <Link href={baseUrl + "/" + i.primaryLink} className="btn btn-xs gap-2 btn-bordered border-accent-200 dark:border-accent-200-dark text-accent my-4 group/edit">
                            Mehr lesen
                            <BsArrowRight className="text-accent text-sm group-hover/edit:translate-x-0.5"/>
                        </Link>
                    </div>
                </li>
            )}
        </ul>
    );
};


type Props = {
    baseUrl: string
    list:
        ProjectLinkMapping[]

}

export default ProjectList;

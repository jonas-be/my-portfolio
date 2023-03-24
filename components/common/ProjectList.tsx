import Link from "next/link";
import {ProjectLinkMapping} from "../utils/BlogSystemUtil";
import React from "react";
import ReactMarkdown from "react-markdown";
import {BsArrowRight} from "react-icons/bs";

const ProjectList = ({baseUrl, list}: Props) => {

    return (
        <div className="">
            <Link href="/projects">
                <h2 className="p-10 pb-4 text-3xl">Projects</h2>
            </Link>
            <div className="overflow-x-scroll">
                <ul className="flex w-fit px-[3.33333vw] gap-[3.33333vw] justify-around">
                    {list.map(i =>
                        <li key={i.primaryLink}
                            className="w-[93vw] md:w-[30vw] flex flex-col justify-between
                        bg-base-2 shadow-lg
                        rounded-4xl overflow-hidden
                        border-base border-1">
                            <Link href={baseUrl + "/" + i.primaryLink}
                                  className="flex justify-center w-full h-52 bg-base border-base border-b-1">
                                <img src={i.imgUrl} alt="symbolic project icon" className="h-full "/>
                            </Link>
                            <div className="w-full h-full flex flex-col justify-between px-4">
                                <div className="h-40 overflow-hidden">
                                    <h3 className="py-2">{i.title}</h3>
                                    <ReactMarkdown className="text" children={i.contentSEO}/>
                                </div>
                                <Link href={baseUrl + "/" + i.primaryLink}
                                      className="btn btn-xs gap-2 btn-bordered border-accent-200 dark:border-accent-200-dark text-accent mt-6 my-4 group/edit">
                                    Mehr lesen
                                    <BsArrowRight className="text-accent text-sm group-hover/edit:translate-x-0.5"/>
                                </Link>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};


type Props = {
    baseUrl: string
    list:
        ProjectLinkMapping[]

}

export default ProjectList;

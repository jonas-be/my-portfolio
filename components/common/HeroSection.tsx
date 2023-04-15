import React from 'react';
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import {FaGithub} from "react-icons/fa";


const HeroSection = ({imgUrl, mainHeading, introduction, mainButtonText, mainButtonLink, githubLink}: HeroSectionProps) => {
    return (
        <div className="flex flex-col-reverse items-center justify-center p-2  pb-28 ">
            <div className="w-full">
                <h1 className="pt-2 text-3xl">{mainHeading}</h1>
                <ReactMarkdown className="text pt-2" children={introduction}/>
            <div className="pt-4 flex gap-2">
                <Link className="btn bg-primary font-bold" href={mainButtonLink} target="_blank">{mainButtonText}</Link>
                <Link className="btn bg-[#333] text-lg" href={githubLink} target="_blank"><FaGithub/></Link>

            </div>
            </div>
            <div>
                <img src={imgUrl} alt="symbolic project icon" width="400" height="0" />
            </div>
        </div>
    );
};

export type HeroSectionProps = {
    imgUrl: string
    gradient?: {
        left: string
        right: string
        rotation: string
    } | undefined,
    mainHeading: string
    introduction: string
    mainButtonLink: string
    mainButtonText: string
    githubLink: string
}

export default HeroSection;
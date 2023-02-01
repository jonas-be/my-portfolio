import React from 'react';
import ReactMarkdown from "react-markdown";
import Image from 'next/image'
import Link from "next/link";
import {FaDiscord, FaGithub} from "react-icons/fa";


const HeroSection = ({imgUrl, mainHeading, introduction, mainButtonText, mainButtonLink, githubLink}: HeroSectionProps) => {
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-center p-3 sm:p-6 pb-28 md:pb-0 ">
            <div>
                <h1 className="pt-2">{mainHeading}</h1>
                <ReactMarkdown className="text pt-2" children={introduction}/>
            <div className="pt-4 flex gap-2">
                <Link className="btn bg-primary font-bold" href={mainButtonLink}>{mainButtonText}</Link>
                <Link className="btn bg-[#333] text-lg" href={githubLink}><FaGithub/></Link>

            </div>
            </div>
            <div>
                <Image src={imgUrl} alt="symbolic project icon" width="400" height="0" />
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
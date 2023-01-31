import React from 'react';
import ReactMarkdown from "react-markdown";
import Image from 'next/image'


const HeroSection = ({imgUrl, mainHeading, introduction}: HeroSectionProps) => {
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-center p-3 sm:p-6 pb-8 md:pb-0">            <div>
                <h1 className="pt-2">{mainHeading}</h1>
                <ReactMarkdown className="text pt-2" children={introduction}/>
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
}

export default HeroSection;

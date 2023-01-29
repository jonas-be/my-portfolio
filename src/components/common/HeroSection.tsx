import React from 'react';
import ReactMarkdown from "react-markdown";
import Image from 'next/image'


const HeroSection = ({imgUrl, gradient, mainHeading, introduction}: HeroSectionProps) => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div>
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
    },
    mainHeading: string
    introduction: string
}

export default HeroSection;

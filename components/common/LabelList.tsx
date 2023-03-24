import React from 'react';
import {SiKubernetes, SiNginx, SiTailwindcss, SiTypescript} from "react-icons/si";
import {TbBrandNextjs} from "react-icons/tb";
import {FaDiscord} from "react-icons/fa";

const LabelList = ({labels}: Props) => {

    function getBranding(iconName: string): { name: string, icon: any, link: string, bgColor: string, textColor: string, border: boolean } {
        switch (iconName.toLowerCase()) {
            case "nextjs":
            case "next":
                return {
                    name: "NextJs",
                    icon: <TbBrandNextjs/>,
                    link: "https://nextjs.org",
                    bgColor: "black",
                    textColor: "white",
                    border: true
                }

            case "tailwindcss":
            case "tailwind":
                return {
                    name: "Tailwind CSS",
                    icon: <SiTailwindcss/>,
                    link: "https://tailwindcss.com",
                    bgColor: "#3490dc",
                    textColor: "white",
                    border: false
                }

            case "nginx":
                return {
                    name: "Nginx",
                    icon: <SiNginx/>,
                    link: "https://nginx.com",
                    bgColor: "#009539",
                    textColor: "white",
                    border: false
                }

            case "kubernetes" :
            case "k8s":
                return {
                    name: "kubernetes",
                    icon: <SiKubernetes/>,
                    link: "https://kubernetes.io",
                    bgColor: "#326ce5",
                    textColor: "white",
                    border: false
                }

            case "discord":
            case "dc":
                return {
                    name: "Discord",
                    icon: <FaDiscord/>,
                    link: "https://discord.com",
                    bgColor: "#5865F2",
                    textColor: "white",
                    border: false
                }

            case "typescript":
            case "ts":
                return {
                    name: "Typescript",
                    icon: <SiTypescript/>,
                    link: "https://typescriptlang.org",
                    bgColor: "#007acc",
                    textColor: "white",
                    border: false
                }

            default:
                return {name: iconName, icon: <div/>, link: "", bgColor: "black", textColor: "white", border: true}
        }

    }

    function getLabel(i: string) {
        let branding = getBranding(i);
        return (
            <>
                <style>
                    {`.${i}:hover {
                            background: ${branding.bgColor};
                            color: ${branding.textColor};
                            transition: .3s ease-in-out;
                        }`}
                </style>
                <a key={i} href={branding.link}
                   className={`inline-flex items-center gap-1.5 p-0.5 m-0.5 px-2 rounded-full border-base ${branding.border ? "border-1" : ""} bg-base ${i} text-sm text`}>
                    <span className="text-lg">
                        {branding.icon}
                    </span>
                    {branding.name}
                </a>
            </>
        )
    }


    return (
            <div className="px-1.5 py-1">
                {labels.map(i => getLabel(i))}
            </div>
    );
};

type Props = {
    labels: string[]
}

export default LabelList;

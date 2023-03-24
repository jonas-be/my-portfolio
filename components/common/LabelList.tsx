import React from 'react';
import {SiKubernetes, SiNginx, SiTailwindcss, SiTypescript} from "react-icons/si";
import {TbBrandNextjs} from "react-icons/tb";
import {FaDiscord} from "react-icons/fa";

const LabelList = ({labels}: Props) => {

    function getIcon(iconName: string) {
        switch (iconName.toLowerCase()) {
            case "nextjs":
            case "next":
                return <TbBrandNextjs/>

            case "tailwindcss":
            case "tailwind":
                return <SiTailwindcss/>

            case "nginx":
                return <SiNginx/>

            case "kubernetes" :
            case "k8s":
                return <SiKubernetes/>

            case "discord":
            case "dc":
                return <FaDiscord/>

            case "typescript":
            case "ts":
                return <SiTypescript/>

            default:
                return <div></div>
        }

    }

    return (
        <div className="flex gap-1 py-1">
            {labels.map(i =>
                <div key={i} className="flex items-center gap-1 p-0.5 px-2 rounded-full bg-base text-xs text">
                    {getIcon(i)}
                    {i}
                </div>
            )}
        </div>
    );
};

type Props = {
    labels: string[]
}

export default LabelList;

import React from 'react';
import Link from "next/link";
import {IoLink} from "react-icons/io5";
import {FaDiscord, FaGithub, FaQuestion} from "react-icons/fa";

const LinkIconList = ({links}: Props) => {

    function getIcon(iconName: string) {
        switch (iconName) {
            case "link":
                return <IoLink/>
            case "discord":
                return <FaDiscord/>
            case "github":
                return <FaGithub/>
            default:
                return <FaQuestion/>
        }
    }

    return (
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-around bg-accent p-4 mb-8">
            {links.map(i =>
                <Link href={i.link} className="flex justify-center items-center gap-1 link no-underline text text-lg">
                    {getIcon(i.icon)}
                    {i.text}
                </Link>
            )}
        </div>
    );
};

type Props = {
    links: [
        {
            icon: string
            text: string
            link: string
        }
    ]
}

export default LinkIconList;

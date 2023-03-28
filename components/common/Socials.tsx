import React from 'react';
import Link from "next/link";
import {SocialsType} from "../skeleton/Skeleton";
import {
    FaDiscord,
    FaDocker,
    FaGithub,
    FaTwitter, FaUserFriends
} from "react-icons/fa";

const Socials = ({socials, big}: Props) => {


    return (
        <div className="flex justify-center overflow-x-hidden">
            <Link className={`btn mx-2 text-xl ${big ? "text-2xl rounded-2xl md:mx-4":""} bg-[#1DA1F2] text-accent`} href={socials.twitter} title={socials.twitterTitle}><FaTwitter/></Link>
            <Link className={`btn mx-2 text-xl ${big ? "text-2xl rounded-2xl md:mx-4":""} bg-[#333] text-accent`} href={socials.github} title={socials.githubTitle}><FaGithub/></Link>
            <Link className={`btn mx-2 text-xl ${big ? "text-2xl rounded-2xl md:mx-4":""} bg-[#5865F2] text-accent`} href={socials.discordServer} title={socials.discordServerTitle}><FaUserFriends/></Link>
            <Link className={`btn mx-2 text-xl ${big ? "text-2xl rounded-2xl md:mx-4":""} bg-[#5865F2] text-accent`} href={socials.discordUser} title={socials.discordUserTitle}><FaDiscord/></Link>
            <Link className={`btn mx-2 text-xl ${big ? "text-2xl rounded-2xl md:mx-4":""} bg-[#0db7ed] text-accent`} href={socials.docker} title={socials.dockerTitle}><FaDocker/></Link>
        </div>

    );
};

type Props = {
    socials: SocialsType
    big?: boolean
}

export default Socials;

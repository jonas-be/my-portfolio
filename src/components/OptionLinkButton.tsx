import React from 'react'
import Link from 'next/link'

interface Props {
    icon: any,
    link: string,
    customClassName?: string
}


function OptionLinkButton({icon, link, customClassName}: Props) {
    return (
        customClassName == null ?
            <Link href={link}
               className="flex justify-center items-center text hover:bg-zinc-300/60 dark:hover:bg-zinc-800/60 rounded-2xl text-sm p-2.5">
                {icon}
            </Link>
            :
            <Link href={link} className={customClassName}>{icon}</Link>
    )
}

export default OptionLinkButton

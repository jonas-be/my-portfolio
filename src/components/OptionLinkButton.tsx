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
               className="btn text p-2.5 flex justify-center items-center">
                {icon}
            </Link>
            :
            <Link href={link} className={customClassName}>{icon}</Link>
    )
}

export default OptionLinkButton

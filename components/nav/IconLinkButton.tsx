import React from 'react'
import Link from 'next/link'

function IconLinkButton({icon, link, label}: Props) {
    return (
        <Link href={link} target="_blank" aria-label={label}
              className="btn text p-2.5 flex justify-center items-center">
            {icon}
        </Link>
    )
}

interface Props {
    icon: any,
    link: string,
    label: string
}

export default IconLinkButton

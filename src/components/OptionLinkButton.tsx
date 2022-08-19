import React from 'react'

interface Props {
    icon: any,
    link: string,
    customClassName?: string
}


function OptionLinkButton({icon, link, customClassName}: Props) {
    return (
        customClassName == null ?
            <a href={link}
               className="flex justify-center items-center text hover:bg-gray-100 dark:hover:bg-costum-gray-500 rounded-2xl text-sm p-2.5">
                {icon}
            </a>
            :
            <a href={link} className={customClassName}>{icon}</a>
    )
}

export default OptionLinkButton

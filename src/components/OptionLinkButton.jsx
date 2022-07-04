import React from 'react'

function OptionLinkButton({ icon, link }) {

    return (
        <a href={link} class="flex justify-center items-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-2xl text-sm p-2.5" >

            {icon}
        </a>

    )
}

export default OptionLinkButton

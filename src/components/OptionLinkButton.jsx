import React from 'react'

function OptionLinkButton({ icon, link, customClassName }) {

    return (
        customClassName == null ?
        <a href={link} class="flex justify-center items-center text hover:bg-gray-100 dark:hover:bg-costum-gray-500 rounded-2xl text-sm p-2.5" >

            {icon}
        </a>
        :
        <a href={link} class={customClassName} >

        {icon}
    </a>


    )
}

export default OptionLinkButton

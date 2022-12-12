import React, { useEffect, useState } from 'react'
import {IoMoon, IoSunny} from "react-icons/io5";

function DarkModeToggle() {

    const [darkModeIcon, setDarkModeIcon] = useState<boolean>(true)

    useEffect(() => {
        function isDarkModeEnabled() {
            if (document.documentElement.classList.contains('dark')) {
                return true
            } else {
                return false
            }
        }
        setDarkModeIcon(isDarkModeEnabled())
    }, [])

    function toggleDarkMode() {
        // if set via local storage previously
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                setDarkMode(true)
            } else {
                setDarkMode(false)
            }
            // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                setDarkMode(false)
            } else {
                setDarkMode(true)
            }
        }
    }

    function setDarkMode(dark: boolean) {
        if (dark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            setDarkModeIcon(true)
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            setDarkModeIcon(false)
        }
    }


    return (
        <button
            onClick={toggleDarkMode}
            className="flex justify-center items-center text hover:bg-zinc-300/60 dark:hover:bg-zinc-800/60 rounded-2xl text-sm p-2.5"
        >
            {!darkModeIcon ?
                <IoSunny className="text-2xl"/>
                :
                <IoMoon className="text-2xl"/>
            }
        </button>
    )
}

export default DarkModeToggle

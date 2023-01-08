import React, {useEffect, useState} from 'react'
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
        const el = document.getElementById('__next')
        if (dark) {
            if (el !== null) el!.style.animation = "toDark .25s ease-in-out 1";
            setTimeout(function () {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
                setDarkModeIcon(true)
            }, 50);
        } else {
            if (el !== null) el!.style.animation = "toLight .25s ease-in-out 1";
            setTimeout(function () {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
                setDarkModeIcon(false)
            }, 50);

        }
    }


    return (
        <button
            onClick={toggleDarkMode}
            className="btn p-2.5 flex justify-center items-center"
        >
            {!darkModeIcon ?
                <IoSunny className="text-2xl text"/>
                :
                <IoMoon className="text-2xl text"/>
            }
        </button>
    )
}

export default DarkModeToggle

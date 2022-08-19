import React, { useEffect, useState } from 'react'

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
            className="flex justify-center items-center text hover:bg-gray-100 dark:hover:bg-costum-gray-500 rounded-2xl text-sm p-2.5"
        >
            {!darkModeIcon ?
                <svg
                    id="theme-toggle-dark-icon"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                    ></path>
                </svg>
                :
                <svg
                    id="theme-toggle-light-icon"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            }
        </button>
    )
}

export default DarkModeToggle

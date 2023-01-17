import '../styles/globals.css'
import type {AppProps} from 'next/app'
import React, {useEffect} from "react";
import Head from "next/head";

export default function App({Component, pageProps}: AppProps) {
    useEffect(() => {
        checkDarkModeOnStart()
    }, []);

    function checkDarkModeOnStart() {
        // It's best to inline this in `head` to avoid FOUC (flash of unstyled content) when changing pages or themes
        if (localStorage.getItem('color-theme') === null) {
            document.documentElement.classList.add('dark');
        } else if (
            localStorage.getItem('color-theme') === 'dark' ||
            (!('color-theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }

    return <>
        <Component {...pageProps} />
    </>
}
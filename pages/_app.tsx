import React, {useEffect} from 'react';
import './styles.css'

export default ({Component, pageProps}: { Component: any, pageProps: any }) => {

    useEffect(() => {
        checkDarkModeOnStart()
    }, []);

    function checkDarkModeOnStart() {
        // It's best to inline this in `head` to avoid FOUC (flash of unstyled content) when changing pages or themes
        if (
            localStorage.getItem('color-theme') === 'dark' ||
            (!('color-theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }

    return (
        <>
            <Component {...pageProps} />
        </>
    );
};


import Head from "next/head";





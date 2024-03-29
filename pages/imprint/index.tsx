import {MouseParallaxChild, MouseParallaxContainer} from "react-parallax-mouse";
import React from "react";
import {AnimationOnScroll} from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import Skeleton from "../../components/skeleton/Skeleton";
import {IMPRINT_PAGE_DATA, selectLanguage, SKELETON_DATA} from "../../components/utils/StaticContentUtil";
import {FiInfo} from "react-icons/fi";
import {useRouter} from 'next/router'


function Index() {

    const router = useRouter()

    const skeletonContentData = selectLanguage(SKELETON_DATA, router.locale)
    const pageContentData = selectLanguage(IMPRINT_PAGE_DATA, router.locale)


    return (
        <Skeleton title={pageContentData.title} content={pageContentData.contentSEO}
                  bgGrid={false} gradient={false}
                  skeletonContentData={skeletonContentData} router={router}>


            <MouseParallaxContainer
                className="w-full h-[50vh] flex flex-col justify-center align-center"
                globalFactorX={0.2} globalFactorY={0.0}
                resetOnLeave
                inverted={true}>

                <h1>
                    <MouseParallaxChild factorX={0.1} factorY={0.1}>
                        <AnimationOnScroll animateIn="animate__pulse" delay={300} initiallyVisible={true}
                                           className='text-accent text-center text-7xl sm:text-8xl font-bold p-3'>
                            {pageContentData.content.heroHeader}
                        </AnimationOnScroll>
                    </MouseParallaxChild>
                </h1>

            </MouseParallaxContainer>


            <div className="flex flex-col items-center gap-28 pb-20">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                     className="impress-text w-80 h-fit rounded-lg overflow-hidden border-8 border-base-0 dark:border-base-0-dark"
                     width="316.000000pt" height="115.000000pt" viewBox="0 0 316.000000 115.000000"
                     preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,115.000000) scale(0.100000,-0.100000)"
                       fill="currentColor" stroke="none">
                        <path
                            d="M0 575 l0 -575 1580 0 1580 0 0 575 0 575 -1580 0 -1580 0 0 -575z m240 396 c0 -51 -4 -74 -16 -86 -21 -20 -73 -16 -88 7 -14 23 0 35 24 20 35 -21 40 -14 40 58 0 63 2 70 20 70 18 0 20 -7 20 -69z m774 47 c11 -16 12 -26 5 -41 -8 -13 -8 -22 0 -30 18 -18 13 -55 -8 -67 -11 -5 -40 -10 -65 -10 l-46 0 0 85 0 85 49 0 c40 0 53 -4 65 -22z m456 -63 c0 -69 -3 -85 -15 -85 -8 0 -15 5 -15 10 0 6 -8 5 -19 -2 -27 -17 -71 4 -72 34 -3 66 17 93 64 84 24 -5 27 -2 27 19 0 16 6 25 15 25 12 0 15 -16 15 -85z m-1091 19 c26 -33 26 -45 0 -78 -38 -48 -109 -24 -109 37 0 65 70 91 109 41z m149 14 c7 -6 12 -33 12 -64 0 -47 -2 -54 -20 -54 -17 0 -20 7 -20 50 0 43 -3 50 -20 50 -17 0 -20 -7 -20 -50 0 -43 -3 -50 -20 -50 -18 0 -20 7 -20 63 l0 64 48 1 c26 0 53 -4 60 -10z m136 -4 c10 -10 16 -33 16 -64 l0 -49 -51 2 c-35 1 -55 7 -62 18 -16 26 -1 47 37 55 20 3 36 11 36 16 0 6 -14 8 -35 4 -36 -7 -44 1 -23 22 17 17 64 15 82 -4z m134 4 c21 -21 13 -29 -24 -22 -45 8 -39 -11 6 -21 35 -8 43 -18 35 -45 -11 -36 -95 -39 -109 -4 -5 13 0 15 34 9 46 -8 56 9 11 18 -39 8 -57 40 -35 61 18 19 65 21 82 4z m362 -8 c34 -34 26 -50 -26 -50 -32 0 -44 -4 -41 -12 2 -8 19 -12 41 -11 37 2 44 -5 24 -25 -34 -34 -108 3 -108 53 0 14 9 34 20 45 11 11 31 20 45 20 14 0 34 -9 45 -20z m148 8 c7 -6 12 -33 12 -64 0 -47 -2 -54 -20 -54 -17 0 -20 7 -20 50 0 43 -3 50 -20 50 -17 0 -20 -7 -20 -50 0 -43 -3 -50 -20 -50 -18 0 -20 7 -20 63 l0 64 48 1 c26 0 53 -4 60 -10z m294 -5 c10 -9 18 -24 18 -35 0 -14 -8 -18 -40 -18 -30 0 -40 -4 -40 -16 0 -13 7 -15 40 -9 44 7 48 4 24 -19 -37 -38 -104 -7 -104 47 0 58 60 88 102 50z m118 2 c0 -7 -9 -15 -20 -18 -16 -4 -20 -14 -20 -51 0 -39 -3 -46 -20 -46 -18 0 -20 7 -20 64 l0 65 40 -1 c25 0 40 -5 40 -13z m-1513 -376 l30 -71 29 71 c40 97 54 93 54 -14 0 -50 -4 -85 -10 -85 -5 0 -10 26 -11 58 l-1 57 -25 -57 c-15 -32 -31 -58 -37 -58 -6 0 -23 28 -36 63 l-25 62 -3 -62 c-4 -94 -22 -76 -22 22 0 108 16 112 57 14z m403 24 l0 -47 28 27 c39 37 63 35 28 -2 l-29 -30 28 -33 c36 -43 15 -49 -24 -6 l-30 33 -1 -32 c0 -18 -4 -33 -10 -33 -6 0 -10 35 -10 85 0 50 4 85 10 85 6 0 10 -21 10 -47z m400 15 c0 -25 3 -29 12 -20 31 31 88 -3 88 -53 0 -50 -57 -84 -88 -53 -9 9 -12 9 -12 0 0 -7 -4 -12 -10 -12 -6 0 -10 35 -10 85 0 50 4 85 10 85 6 0 10 -14 10 -32z m150 22 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m60 -75 c0 -50 -4 -85 -10 -85 -6 0 -10 35 -10 85 0 50 4 85 10 85 6 0 10 -35 10 -85z m150 0 c0 -50 -4 -85 -10 -85 -5 0 -10 5 -10 12 0 9 -3 9 -12 0 -32 -32 -88 2 -88 53 0 40 30 69 65 63 21 -4 25 -1 25 18 0 15 6 24 15 24 12 0 15 -16 15 -85z m190 60 c0 -22 3 -25 25 -19 39 10 55 -11 55 -72 0 -69 -18 -70 -22 -1 -3 48 -5 52 -28 52 -23 0 -25 -4 -28 -52 -5 -86 -22 -60 -22 32 0 50 4 85 10 85 6 0 10 -11 10 -25z m1034 9 c24 -24 19 -46 -20 -92 l-36 -42 36 0 c20 0 36 -4 36 -10 0 -5 -25 -10 -55 -10 -30 0 -55 3 -55 6 0 4 21 29 46 56 46 50 54 80 21 86 -10 2 -27 -4 -38 -14 -25 -22 -33 -14 -13 14 18 26 56 29 78 6z m150 -5 c18 -27 12 -45 -32 -91 l-36 -38 42 0 c23 0 42 -4 42 -10 0 -5 -25 -10 -55 -10 -30 0 -55 3 -55 6 0 3 18 27 41 54 23 28 39 56 37 67 -4 23 -46 30 -54 9 -7 -17 -24 -22 -24 -7 0 18 31 41 55 41 13 0 31 -10 39 -21z m-2296 -31 c7 -7 12 -35 12 -64 l0 -52 -45 2 c-75 2 -82 58 -10 72 19 3 35 10 35 15 0 16 -32 23 -50 11 -22 -13 -34 -4 -19 15 14 16 61 17 77 1z m112 2 c0 -4 -9 -10 -20 -13 -17 -4 -20 -14 -20 -56 0 -28 -4 -51 -10 -51 -6 0 -10 28 -10 63 l0 64 30 1 c17 0 30 -3 30 -8z m242 -7 c10 -9 18 -24 18 -35 0 -15 -8 -18 -46 -18 -38 0 -45 -3 -42 -17 4 -22 44 -29 64 -13 11 10 14 9 14 -3 0 -19 -33 -31 -65 -23 -29 7 -46 51 -33 86 16 43 57 53 90 23z m68 7 c0 -6 7 -6 19 1 38 25 71 -15 71 -87 0 -24 -5 -34 -15 -34 -12 0 -15 13 -15 56 0 54 0 55 -27 52 -26 -3 -28 -7 -31 -55 -4 -76 -22 -66 -22 12 0 37 4 65 10 65 6 0 10 -5 10 -10z m290 -55 c0 -37 -4 -65 -10 -65 -6 0 -10 28 -10 65 0 37 4 65 10 65 6 0 10 -28 10 -65z m335 49 c21 -21 13 -29 -14 -12 -29 18 -56 0 -56 -37 0 -37 27 -55 56 -37 27 17 35 9 14 -12 -36 -36 -95 -6 -95 47 0 57 58 88 95 51z m279 -6 c27 -39 20 -48 -34 -48 -48 0 -50 -1 -40 -20 12 -22 56 -27 63 -7 2 6 8 9 12 5 13 -12 -16 -38 -41 -38 -31 0 -64 33 -64 65 0 56 74 86 104 43z m133 11 c15 -13 18 -119 4 -119 -6 0 -11 24 -13 53 -3 48 -5 52 -28 52 -23 0 -25 -4 -28 -52 -4 -75 -22 -66 -22 10 l0 64 37 1 c20 1 42 -3 50 -9z m77 -32 c12 -47 22 -47 33 1 5 21 15 37 23 37 8 0 18 -16 23 -37 11 -47 23 -48 31 -3 6 32 22 53 32 43 8 -9 -39 -129 -49 -125 -7 2 -16 20 -20 40 -5 20 -13 37 -17 37 -4 0 -12 -17 -17 -37 -12 -54 -29 -51 -48 9 -10 29 -20 59 -23 67 -3 9 0 12 9 9 8 -2 18 -21 23 -41z m258 26 c10 -9 18 -24 18 -35 0 -15 -8 -18 -46 -18 -38 0 -45 -3 -42 -17 4 -22 44 -29 64 -13 11 10 14 9 14 -3 0 -19 -33 -31 -65 -23 -29 7 -46 51 -33 86 16 43 57 53 90 23z m126 5 c9 -9 12 -9 12 0 0 7 5 12 10 12 6 0 10 -33 10 -80 0 -68 -3 -81 -19 -90 -28 -14 -67 -12 -81 4 -10 13 -5 15 32 13 38 -2 43 1 46 21 3 21 2 22 -16 11 -28 -17 -68 1 -74 34 -12 61 43 112 80 75z m-2128 -288 c0 -5 -16 -10 -35 -10 -28 0 -35 -4 -35 -20 0 -14 7 -20 22 -20 12 0 30 -7 40 -17 53 -48 -19 -121 -78 -79 -24 18 -13 31 14 15 37 -23 78 15 51 47 -8 10 -22 14 -41 10 -34 -7 -39 1 -31 47 5 36 7 37 49 37 24 0 44 -4 44 -10z m146 -7 c13 -13 14 -18 3 -22 -7 -2 -15 1 -17 8 -6 18 -50 13 -62 -8 -15 -29 -13 -32 14 -20 51 24 94 -36 62 -86 -34 -52 -106 -17 -106 51 0 79 60 123 106 77z m144 -3 c14 -14 20 -33 20 -65 0 -74 -55 -110 -100 -65 -44 44 -16 150 40 150 11 0 29 -9 40 -20z m156 3 c13 -13 14 -18 3 -22 -7 -2 -15 1 -17 8 -6 18 -50 13 -62 -8 -15 -29 -13 -32 14 -20 51 24 94 -36 62 -86 -34 -52 -106 -17 -106 51 0 79 60 123 106 77z m148 -5 c8 -13 8 -23 -1 -37 -10 -15 -9 -22 2 -31 33 -27 2 -80 -46 -80 -51 0 -75 46 -42 82 9 11 11 18 5 18 -16 0 -15 43 0 58 18 18 69 11 82 -10z m136 -20 l0 -42 43 42 c54 53 85 56 33 3 l-39 -39 38 -46 c24 -29 32 -46 23 -46 -8 0 -27 18 -44 39 -33 44 -54 40 -54 -10 0 -16 -4 -29 -10 -29 -6 0 -10 35 -10 85 0 50 4 85 10 85 6 0 10 -19 10 -42z m290 12 c0 -27 2 -29 19 -18 45 28 93 -30 71 -86 -11 -30 -53 -44 -75 -26 -10 9 -15 9 -15 1 0 -6 -4 -11 -10 -11 -6 0 -10 35 -10 85 0 50 4 85 10 85 6 0 10 -14 10 -30z m150 -55 c0 -50 -4 -85 -10 -85 -6 0 -10 35 -10 85 0 50 4 85 10 85 6 0 10 -35 10 -85z m701 66 c13 -11 21 -23 17 -27 -5 -4 -16 0 -26 9 -38 35 -92 8 -92 -46 0 -53 55 -88 88 -55 18 18 14 38 -8 38 -11 0 -20 5 -20 10 0 6 16 10 36 10 34 0 36 -1 30 -27 -23 -94 -146 -76 -146 21 0 74 67 111 121 67z m-921 -41 c11 -11 20 -31 20 -45 0 -56 -74 -86 -104 -43 -47 67 28 144 84 88z m342 8 c8 -7 18 -23 21 -35 5 -22 2 -23 -45 -23 -51 0 -60 -12 -25 -34 12 -8 22 -8 36 1 23 14 35 5 20 -14 -18 -21 -66 -16 -83 9 -43 61 20 140 76 96z m145 1 c15 -13 18 -119 4 -119 -6 0 -11 24 -13 53 -3 48 -5 52 -28 52 -23 0 -25 -4 -28 -52 -4 -75 -22 -66 -22 10 l0 64 37 1 c20 1 42 -3 50 -9z m143 0 c0 -6 -13 -28 -30 -49 -16 -21 -30 -41 -30 -44 0 -3 13 -6 29 -6 17 0 33 -4 36 -10 4 -6 -15 -10 -49 -10 -31 0 -56 3 -56 8 0 4 16 27 36 52 l36 45 -36 3 c-54 5 -43 22 14 22 30 0 50 -4 50 -11z m444 -11 c27 -39 20 -48 -34 -48 -48 0 -50 -1 -40 -20 12 -22 56 -27 63 -7 2 6 8 9 12 5 13 -12 -16 -38 -41 -38 -31 0 -64 33 -64 65 0 56 74 86 104 43z m106 12 c0 -4 -9 -10 -20 -13 -17 -4 -20 -14 -20 -56 0 -28 -4 -51 -10 -51 -6 0 -10 28 -10 63 l0 64 30 1 c17 0 30 -3 30 -8z m188 -3 c14 -10 17 -117 3 -117 -6 0 -11 24 -13 53 -3 45 -6 52 -25 55 -22 3 -23 0 -23 -52 0 -43 -3 -56 -15 -56 -12 0 -15 13 -15 56 0 52 -1 55 -22 52 -20 -3 -23 -10 -26 -55 -4 -75 -22 -66 -22 11 l0 63 73 -1 c39 0 78 -5 85 -9z m126 7 c12 -5 16 -20 16 -63 l0 -58 -39 -1 c-70 -3 -86 55 -18 71 50 12 53 42 2 34 -19 -3 -35 -2 -35 3 0 17 45 25 74 14z m76 -4 c0 -6 7 -6 19 1 38 25 71 -15 71 -87 0 -24 -5 -34 -15 -34 -12 0 -15 13 -15 56 0 54 0 55 -27 52 -26 -3 -28 -7 -31 -55 -4 -76 -22 -66 -22 12 0 37 4 65 10 65 6 0 10 -5 10 -10z m146 -42 l17 -52 20 52 c19 50 46 75 31 30 -24 -76 -54 -144 -67 -152 -23 -15 -34 2 -12 18 19 14 19 15 0 72 -27 82 -28 84 -17 84 6 0 18 -23 28 -52z m-1030 -93 c-4 -14 -10 -25 -15 -25 -9 0 -6 26 6 60 9 24 16 -6 9 -35z"/>
                        <path
                            d="M940 990 c0 -16 5 -21 23 -18 12 2 22 10 22 18 0 8 -10 16 -22 18 -18 3 -23 -2 -23 -18z"/>
                        <path d="M940 919 c0 -15 5 -20 22 -17 34 5 37 38 4 38 -20 0 -26 -5 -26 -21z"/>
                        <path
                            d="M1385 951 c-8 -26 4 -51 25 -51 10 0 21 7 24 16 10 25 -3 54 -24 54 -10 0 -21 -8 -25 -19z"/>
                        <path d="M308 953 c-7 -30 3 -53 22 -53 21 0 33 25 25 51 -8 24 -41 25 -47 2z"/>
                        <path d="M613 923 c-20 -8 -15 -23 7 -23 11 0 20 7 20 15 0 15 -6 17 -27 8z"/>
                        <path
                            d="M1095 960 c-4 -6 5 -10 19 -10 14 0 26 5 26 10 0 6 -9 10 -19 10 -11 0 -23 -4 -26 -10z"/>
                        <path
                            d="M1535 960 c-4 -6 7 -10 25 -10 18 0 29 4 25 10 -3 6 -15 10 -25 10 -10 0 -22 -4 -25 -10z"/>
                        <path d="M1019 599 c-8 -16 -8 -28 0 -45 18 -41 71 -25 71 21 0 44 -50 61 -71 24z"/>
                        <path d="M1282 608 c-29 -29 -4 -84 35 -76 28 5 26 82 -2 86 -11 1 -26 -3 -33 -10z"/>
                        <path d="M387 563 c-17 -17 -6 -34 20 -31 36 4 45 38 10 38 -13 0 -27 -3 -30 -7z"/>
                        <path d="M737 613 c-15 -15 -5 -23 28 -23 26 0 33 3 29 15 -6 15 -45 21 -57 8z"/>
                        <path
                            d="M1700 605 c-11 -13 -7 -15 30 -15 37 0 41 2 30 15 -7 8 -20 15 -30 15 -10 0 -23 -7 -30 -15z"/>
                        <path d="M2177 613 c-15 -15 -5 -23 28 -23 26 0 33 3 29 15 -6 15 -45 21 -57 8z"/>
                        <path d="M2317 613 c-14 -14 -7 -74 9 -80 37 -14 70 41 44 73 -13 15 -42 19 -53 7z"/>
                        <path d="M316 265 c-19 -20 -20 -26 -3 -49 26 -36 84 4 61 42 -15 23 -38 26 -58 7z"/>
                        <path
                            d="M460 311 c-23 -44 -5 -111 30 -111 23 0 40 28 40 65 0 37 -17 65 -40 65 -11 0 -24 -9 -30 -19z"/>
                        <path d="M616 265 c-19 -20 -20 -26 -3 -49 26 -36 84 4 61 42 -15 23 -38 26 -58 7z"/>
                        <path d="M764 315 c-4 -9 -2 -21 4 -27 16 -16 47 -5 47 17 0 26 -42 34 -51 10z"/>
                        <path d="M760 245 c-17 -21 -5 -45 23 -45 34 0 54 25 37 45 -16 19 -44 19 -60 0z"/>
                        <path d="M1272 278 c-7 -7 -12 -21 -12 -33 0 -46 53 -62 71 -21 21 45 -26 87 -59 54z"/>
                        <path d="M1122 278 c-7 -7 -12 -21 -12 -33 0 -46 53 -62 71 -21 21 45 -26 87 -59 54z"/>
                        <path d="M1470 275 c-11 -13 -8 -15 25 -15 25 0 35 4 33 13 -7 18 -43 20 -58 2z"/>
                        <path
                            d="M2190 275 c-11 -13 -7 -15 30 -15 37 0 41 2 30 15 -7 8 -20 15 -30 15 -10 0 -23 -7 -30 -15z"/>
                        <path d="M2630 230 c-11 -7 -12 -12 -3 -21 15 -15 47 -7 51 14 4 19 -23 23 -48 7z"/>
                    </g>
                </svg>

                <AnimationOnScroll animateIn="animate__fadeInUp">
                    <div
                        className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-[45rem] p-4 mx-3 sm:mx-20 border-2 border-warning rounded-2xl ">
                        <figure><FiInfo className="flex text-warning w-10 h-10"/></figure>
                        <p className="text-warning ">{pageContentData.content.impressDisclaimer}</p>
                    </div>
                </AnimationOnScroll>

            </div>
        </Skeleton>
    );
}

export default Index;

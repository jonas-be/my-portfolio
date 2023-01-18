import {MouseParallaxChild, MouseParallaxContainer} from "react-parallax-mouse";
import React from "react";
import {AnimationOnScroll} from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import Link from "next/link";
import Skeleton from "../src/components/skeleton/Skeleton";
import {GetServerSidePropsContext, GetServerSideProps, InferGetServerSidePropsType} from 'next'
import {useRouter} from 'next/router';


type Props = {
    author: string
    content: string
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    let currentPath = context.resolvedUrl === "/" ? "" : context.resolvedUrl
    let contentUrl = `http://jonasbe.de:30300/${context.locale}/pages${currentPath}/index.json`
    let data = await fetch(contentUrl)
    if (data.ok) {
        let content = await data.json()
        return {
            content: content,
        }
    }
    return {
        content: {}
    }
}

// export async function getStaticProps(context: GetStaticPropsContext) { // : Promise<GetStaticProps>
//     console.log("STATIC_PROPS!!!")
//     // const router = useRouter()
//     // const { pid } = router.query
//     console.log("---")
//     console.log(context)
//     console.log(context.preview)
//     console.log(context.previewData)
//     console.log("---")
//     let path = ""
//     let contentUrl = `http://jonasbe.de:30300/${context.locale}/pages${path}/index.json`
//
//     return {
//         props: {
//             test: ""
//         }, // will be passed to the page component as props
//     }
// }

function Index({test}: InferGetServerSidePropsType<typeof getServerSideProps>) {


    return (
        <Skeleton title={"About Jonas Bender"}
                  content="
                          Name: Jonas Bender
                          Aka: jonas-be
                          Age: 17
                          Location: Germany
                          Job: Software Developer"
                  gradient={true} bgGrid={true}>


            <MouseParallaxContainer
                className="w-full h-[60vh] flex flex-col justify-center align-center"
                globalFactorX={0.2} globalFactorY={0.0}
                resetOnLeave
                inverted={true}>

                <h1>
                    <MouseParallaxChild factorX={0.15} factorY={0.15}>
                        <AnimationOnScroll animateIn="animate__slideInDown"
                                           className='text-fuchsia-400 text-center text-4xl font-bold'>
                            <i>Hey I'm</i>
                        </AnimationOnScroll>
                    </MouseParallaxChild>

                    <MouseParallaxChild factorX={0.1} factorY={0.1}>
                        <AnimationOnScroll animateIn="animate__pulse" delay={300} initiallyVisible={true}
                                           className='text-accent text-center text-8xl font-bold p-3'>
                            Jonas
                        </AnimationOnScroll>
                    </MouseParallaxChild>
                </h1>

            </MouseParallaxContainer>


            <div
                className="flex flex-col xl:flex-row xl:gap-20 justify-center items-center xl:items-start xl:justify-center">

                <div className="p-6">
                    <h2 className="text-accent font-bold text-xl">Hello World,</h2>
                    <p className="text pt-4">
                        my name is Jonas. I'm located in Germany. <br/>
                        I love to develop Front- and Backend. And I'm also very interested in deploying and
                        administrating software.<br/>
                        <br/>
                        Watch the <Link href="/styleguide" className="link text-info">Styleguide</Link>
                    </p>
                </div>

                <AnimationOnScroll animateIn="animate__fadeInUp">
                    <div className="bg-accent-2 w-fit p-6 m-2 sm:m-4 sm:p-8 rounded-5xl">
                        <table className="max-w-sm">
                            <caption className="text-accent text-lg pb-6">About me</caption>
                            <tbody>
                            <tr>
                                <td className="text-accent text-right font-bold py-4 pr-2 sm:pr-4">Name:</td>
                                <td className="text min-w-[5rem]">Jonas Bender</td>
                            </tr>
                            <tr>
                                <td className="text-accent text-right font-bold py-4 pr-2 sm:pr-4">Aka:</td>
                                <td className="text min-w-[5rem]">jonas-be</td>
                            </tr>
                            <tr>
                                <td className="text-accent text-right font-bold py-4 pr-2 sm:pr-4">Age:</td>
                                <td className="text">17</td>
                            </tr>
                            <tr>
                                <td className="text-accent text-right font-bold py-4 pr-2 sm:pr-4">Location:</td>
                                <td className="text">Germany</td>
                            </tr>
                            <tr>
                                <td className="text-accent text-right font-bold py-4 pr-2 sm:pr-4">Job:</td>
                                <td className="text ">Software Developer</td>
                                <td className=" w-10 sm:w-16 h-2"></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </AnimationOnScroll>
            </div>

        </Skeleton>
    );
}

export default Index;

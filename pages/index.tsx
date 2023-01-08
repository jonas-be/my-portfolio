import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import {MouseParallaxChild, MouseParallaxContainer} from "react-parallax-mouse";
import React from "react";
import {AnimationOnScroll} from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import BackgroundGrid from "../src/components/BackgroundGrid";
import Link from "next/link";

function Index() {

    return (
        <div id="background" className="w-full h-full">

            <BackgroundGrid/>

            <div className="w-screen h-full"
                 style={{background: "linear-gradient(125deg, rgba(99,102,241,.25) 0%, rgba(49,46,129,.05) 34%, rgba(45,49,131,0) 51%, rgba(30,58,138,.05) 74%, rgba(232,121,240,.25) 100%)"}}>
                <Header/>


                <MouseParallaxContainer
                    className="w-full h-[60vh] flex flex-col justify-center align-center"
                    globalFactorX={0.2} globalFactorY={0.0}
                    resetOnLeave
                    inverted={true}>

                    <MouseParallaxChild factorX={0.15} factorY={0.15}>
                        <AnimationOnScroll animateIn="animate__slideInDown">
                            <h1 className='text-fuchsia-400 text-center text-4xl font-bold'><i>Hey I'm</i></h1>
                        </AnimationOnScroll>
                    </MouseParallaxChild>

                    <MouseParallaxChild factorX={0.1} factorY={0.1}>
                        <AnimationOnScroll animateIn="animate__pulse" delay={300} initiallyVisible={true}>
                            <h1 className='text-accent text-center text-8xl font-bold p-3'>Jonas-be</h1>
                        </AnimationOnScroll>
                    </MouseParallaxChild>

                </MouseParallaxContainer>


                <div
                    className="flex flex-col xl:flex-row xl:gap-20 justify-center items-center xl:items-start xl:justify-center">

                    <div className="p-6">
                        <h3 className="text-accent font-bold text-xl">Hello World,</h3>
                        <p className="text pt-4">
                            my name is Jonas. I'm located in Germany. <br/>
                            I love to develop Back- and Frontend. And I'm also very interested in deploying and
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
                                    <td className="text-accent text-right py-4 pr-2 sm:pr-4">Name:</td>
                                    <td className="text min-w-[5rem]">Jonas B.</td>
                                </tr>
                                <tr>
                                    <td className="text-accent text-right py-4 pr-2 sm:pr-4">Age:</td>
                                    <td className="text">17</td>
                                </tr>
                                <tr>
                                    <td className="text-accent text-right py-4 pr-2 sm:pr-4">Location:</td>
                                    <td className="text">Germany</td>
                                </tr>
                                <tr>
                                    <td className="text-accent text-right py-4 pr-2 sm:pr-4">Job:</td>
                                    <td className="text"><i>becoming a Software Developer</i></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </AnimationOnScroll>
                </div>


                <div className='h-[32.5vh]'/>
                <Footer/>
            </div>

        </div>
    );
}

export default Index;

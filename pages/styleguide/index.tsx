import React from "react";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import StyleGuideComponent from "../../src/components/common/StyleGuideComponent";
import Link from "next/link";
import {GiButtonFinger} from "react-icons/gi";

function Index() {


    return (
        <>
            <Header/>
            <div className="flex justify-center">
                <div className="w-full md:w-11/12 lg:w-10/12 xl:w-9/12">

                    <div className="flex justify-center">
                        <Link href="/styleguide/buttons"
                              className="topic hover:text-blue-600 active/edit:translate-y-1 p-6 flex gap-2"><GiButtonFinger
                            className="m-1"/>Buttons</Link>
                    </div>

                    <StyleGuideComponent title="Button Sizes" code={`
<Header/>
            `}>
                        <Header/>
                    </StyleGuideComponent>

                    <StyleGuideComponent title="Button Sizes" code={`
<div className="w-full">
        <Footer/>
</div>
            `}>
                        <div className="w-full">
                            <Footer/>
                        </div>
                    </StyleGuideComponent>

                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Index;




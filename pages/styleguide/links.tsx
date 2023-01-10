import React from "react";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import StyleGuideComponent from "../../src/components/common/StyleGuideComponent";
import {IoSunny} from "react-icons/io5";
import BreadcrumbNavigation from "../../src/components/common/BreadcrumbNavigation";
import Link from "next/link";

function Index() {


    return (
        <>
            <Header/>
            <div className="w-full flex justify-center">
                <BreadcrumbNavigation homeName={"Styleguide"} urlPrefix={"/styleguide"} url={["links"]}/>
            </div>
            <div className="flex justify-center">
                <div className="w-full md:w-11/12 lg:w-10/12 xl:w-9/12">


                    <StyleGuideComponent title="Solid Button" code={`
<Link href="/styleguide/links" className="link text-success">Link</Link>
<Link href="/styleguide/links" className="link text-warning">Link</Link>
<Link href="/styleguide/links" className="link text-error">Link</Link>
<Link href="/styleguide/links" className="link text-secondary">Link</Link>
<Link href="/styleguide/links" className="link text-primary">Link</Link>
<Link href="/styleguide/links" className="link text-info">Link</Link>
            `}>
                        <Link href="/styleguide/links" className="link text-success">Link</Link>
                        <Link href="/styleguide/links" className="link text-warning">Link</Link>
                        <Link href="/styleguide/links" className="link text-error">Link</Link>
                        <Link href="/styleguide/links" className="link text-secondary">Link</Link>
                        <Link href="/styleguide/links" className="link text-primary">Link</Link>
                        <Link href="/styleguide/links" className="link text-info">Link</Link>
                    </StyleGuideComponent>


                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Index;




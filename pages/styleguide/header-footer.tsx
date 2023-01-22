import React from "react";
import Header from "../../src/components/nav/Header";
import Footer from "../../src/components/nav/Footer";
import StyleGuideComponent from "../../src/components/common/StyleGuideComponent";
import Link from "next/link";
import {GiButtonFinger} from "react-icons/gi";
import BreadcrumbNavigation from "../../src/components/common/BreadcrumbNavigation";
import Skeleton from "../../src/components/skeleton/Skeleton";
import {useRouter} from "next/router";
import {selectLangauge, SKELETON_DATA} from "../../src/components/utils/StaticContentUtil";

function Index() {
    const router = useRouter()
    const skeletonContentData = selectLangauge(SKELETON_DATA, router.locale)

    return (
        <Skeleton title={"Header and Footer"} content="Header and Footer"
                  bgGrid={false} gradient={false} skeletonContentData={skeletonContentData} router={router}>
            <div className="w-full flex justify-center">
                <BreadcrumbNavigation homeName={"Styleguide"} urlPrefix={"/styleguide"} url={["header-footer"]}/>
            </div>
            <div className="flex justify-center">
                <div className="w-full md:w-11/12 lg:w-10/12 xl:w-9/12">

                    <div className="flex justify-center">
                        <Link href="/styleguide/buttons"
                              className="text-accent hover:text-blue-600 active/edit:translate-y-1 p-6 flex gap-2"><GiButtonFinger
                            className="m-1"/>Buttons</Link>
                    </div>

                    <StyleGuideComponent title="Button Sizes" code={`
<Header/>
            `}>
                        <Header logoTitle={"Jonas"} options={skeletonContentData.options} router={router}/>
                    </StyleGuideComponent>

                    <StyleGuideComponent title="Button Sizes" code={`
<div className="w-full">
        <Footer/>
</div>
            `}>
                        <div className="w-full">
                            <Footer copyright={skeletonContentData.copyright}
                                    discordLink={skeletonContentData.discordLink}
                                    githubLink={skeletonContentData.githubLink}
                                    endOfSiteHeader={skeletonContentData.endOfSiteHeader} impress={skeletonContentData.impress}/>
                        </div>
                    </StyleGuideComponent>

                </div>
            </div>
        </Skeleton>
    );
}

export default Index;




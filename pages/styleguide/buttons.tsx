import React from "react";
import StyleGuideComponent from "../../src/components/common/StyleGuideComponent";
import {IoSunny} from "react-icons/io5";
import BreadcrumbNavigation from "../../src/components/common/BreadcrumbNavigation";
import Skeleton from "../../src/components/skeleton/Skeleton";
import {useRouter} from "next/router";
import {selectLangauge, SKELETON_DATA} from "../../src/components/utils/StaticContentUtil";

function Index() {
    const router = useRouter()
    const skeletonContentData = selectLangauge(SKELETON_DATA, router.locale)


    return (
        <Skeleton title={"Buttons"} content="Buttons"
                  bgGrid={false} gradient={false} skeletonContentData={skeletonContentData}>

            <div className="w-full flex justify-center">
                <BreadcrumbNavigation homeName={"Styleguide"} urlPrefix={"/styleguide"} url={["buttons"]}/>
            </div>
            <div className="flex justify-center">
                <div className="w-full md:w-11/12 lg:w-10/12 xl:w-9/12">


                    <StyleGuideComponent title="Solid Button" code={`
<button type="button" className="btn bg-secondary">Secondary</button>
<button type="button" className="btn bg-primary">Primary</button>
<button type="button" className="btn bg-black dark:bg-white text-white dark:text-black">
    <IoSunny className="h-5"/>
</button>
            `}>
                        <button type="button" className="btn bg-secondary">Secondary</button>
                        <button type="button" className="btn bg-primary">Primary</button>
                        <button type="button" className="btn bg-black dark:bg-white text-white dark:text-black">
                            <IoSunny className="h-5"/>
                        </button>
                    </StyleGuideComponent>


                    <StyleGuideComponent title="Bordered Button" code={`
<button type="button" className="btn border-secondary text-secondary btn-bordered">Secondary</button>
<button type="button" className="btn border-primary text-primary btn-bordered">Primary</button>
<button type="button" className="btn border-black dark:border-white text-black dark:text-white btn-bordered">
            <IoSunny className="h-5"/>
</button>
            `}>
                        <button type="button" className="btn border-secondary text-secondary btn-bordered">Secondary
                        </button>
                        <button type="button" className="btn border-primary text-primary btn-bordered">Primary</button>
                        <button type="button"
                                className="btn border-black dark:border-white text-black dark:text-white btn-bordered">
                            <IoSunny className="h-5"/>
                        </button>
                    </StyleGuideComponent>

                    <StyleGuideComponent title="Button Sizes" code={`
<button type="button" className="btn bg-primary btn-xs">XS</button>
<button type="button" className="btn bg-primary btn-sm">SM</button>
<button type="button" className="btn bg-primary">Default</button>
<button type="button" className="btn bg-primary btn-lg">Large</button>
            `}>
                        <button type="button" className="btn bg-primary btn-xs">XS</button>
                        <button type="button" className="btn bg-primary btn-sm">SM</button>
                        <button type="button" className="btn bg-primary">Default</button>
                        <button type="button" className="btn bg-primary btn-lg">Large</button>
                    </StyleGuideComponent>

                </div>
            </div>
        </Skeleton>
    );
}

export default Index;




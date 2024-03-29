import React from "react";
import StyleGuideComponent from "../../components/styleguide/StyleGuideComponent";
import BreadcrumbNavigation from "../../components/common/BreadcrumbNavigation";
import Link from "next/link";
import Skeleton from "../../components/skeleton/Skeleton";
import {useRouter} from "next/router";
import {selectLanguage, SKELETON_DATA} from "../../components/utils/StaticContentUtil";

function Index() {
    const router = useRouter()
    const skeletonContentData = selectLanguage(SKELETON_DATA, router.locale)

    return (
        <Skeleton title={"404 - Not Found"} content="404 NOT FOUND"
                  bgGrid={false} gradient={false} skeletonContentData={skeletonContentData} router={router}>
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
        </Skeleton>
    );
}

export default Index;




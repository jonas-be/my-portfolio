import React from 'react';
import SiteBuilder from "../sitebuilder/SiteBuilder";

const WidthLimit = ({children, siteBuilder, maxWidthClassNames}: Props) => {
    return (
        <div className="flex justify-center sm:px-6 mt-10">
            <div className={maxWidthClassNames === undefined ? "max-w-[60rem] xl:max-w-[70rem] px-2 sm:px-4 lg:px-8 pb-10 bg border-x-1 border-t-1 border-base-2  shadow-xl rounded-t-3xl" : maxWidthClassNames}>
                {siteBuilder ?
                    <SiteBuilder content={children}/>
                    :
                    children
                }
            </div>
        </div>
    );
};
type Props = {
    children: any,
    siteBuilder?: boolean
    maxWidthClassNames?: string
};
export default WidthLimit;

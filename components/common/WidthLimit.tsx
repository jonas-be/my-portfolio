import React from 'react';
import SiteBuilder from "../sitebuilder/SiteBuilder";

const WidthLimit = ({children, siteBuilder, maxWidthClassNames}: Props) => {
    return (
        <div className="flex justify-center sm:px-6 ">
            <div className={maxWidthClassNames === undefined ? "max-w-[60rem] xl:max-w-[70rem] px-2 pb-10 bg border-x-[1px] border-accent-100-dark dark:border-accent-100 " : maxWidthClassNames}>
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

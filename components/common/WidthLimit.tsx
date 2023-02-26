import React from 'react';
import SiteBuilder from "../sitebuilder/SiteBuilder";

const WidthLimit = ({children, siteBuilder, maxWidthClassNames}: Props) => {
    return (
        <div className="flex justify-center p-3 sm:p-6">
            <div className={maxWidthClassNames === undefined ? "max-w-[60rem] xl:max-w-[70rem]" : maxWidthClassNames}>
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

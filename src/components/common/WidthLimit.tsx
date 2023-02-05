import React from 'react';
import SiteBuilder from "../sitebuilder/SiteBuilder";

const WidthLimit = ({children, siteBuilder}: Props) => {
    return (
        <div className="flex justify-center p-3 sm:p-6">
            <div className="max-w-[60rem] xl:max-w-[70rem]">
                {siteBuilder ?
                    <SiteBuilder content={children}/>
                    :
                    children
                }
            </div>
        </div>
    );
};
type Props = { children: any, siteBuilder?: boolean };
export default WidthLimit;

import React from 'react';
import SiteBuilder from "../sitebuilder/SiteBuilder";

const WidthLimit = ({children}: any) => {
    return (
        <div className="flex justify-center p-3 sm:p-6">
            <div className="max-w-[60rem] xl:max-w-[70rem]">
                {/*{children + ""}*/}
                <SiteBuilder content={children}/>
            </div>
        </div>
    );
};

export default WidthLimit;

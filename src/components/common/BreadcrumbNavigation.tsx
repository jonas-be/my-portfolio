import React from 'react';
import {HiChevronRight, HiHome} from "react-icons/hi";
import Link from "next/link";

const BreadcrumbNavigation = ({homeName, urlPrefix, url}: { homeName: string, urlPrefix: string, url:string[] }) => {
    let urlMapping: { name: string, url: string }[] = []
    for (let i = 0; i < url.length; i++) {
        let urlPath = urlPrefix
        if (urlMapping.length !== 0) {
            for (let j = 0; j < urlMapping.length; j++) {
                urlPath = urlPath + "/" + urlMapping[j].name
            }
        }
        urlPath = urlPath + "/" + url[i]
        urlMapping.push({name: url[i], url: urlPath})
    }

    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <Link href={urlPrefix}
                          className="inline-flex items-center gap-2 text-sm text hover:text-accent">
                        <HiHome/>
                        {homeName}
                    </Link>
                </li>
                {urlMapping.map(i =>
                    <li key={i.url}>
                        <div className="flex items-center">
                            <HiChevronRight className="text"/>
                            <Link href={i.url}
                                  className="inline-flex items-center gap-2 text-sm text hover:text-accent">{i.name}</Link>
                        </div>
                    </li>
                )}
            </ol>
        </nav>

    );
};

export default BreadcrumbNavigation;

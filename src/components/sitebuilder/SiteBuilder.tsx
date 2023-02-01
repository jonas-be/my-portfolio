import React from 'react';
import ReactMarkdown from "react-markdown";
import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";
import LabelList from "../common/LabelList";
import HeroSection from "../common/HeroSection";
import LinkIconList from "../common/LinkIconList";
import WidthLimit from "../common/WidthLimit";

const SiteBuilder = ({content}: Props) => {
    function getComponent(object: Record<string, object>): ReactJSXElement {
        if (object.type === undefined)
            return <h2 className="text-error dark:text-error">ERROR!!!</h2>
        switch (object.type.toString()) {
            case "markdown":
                if (object.markdown !== undefined)
                    return <ReactMarkdown className="text p-2" children={object.markdown.toString()}/>
                break;
            case "labelList":
                if (object.labels !== undefined && Array.isArray(object.labels))
                    return <LabelList labels={object.labels}/>
                break;
            case "heroSection":
                if (object.imgUrl !== undefined &&
                    object.mainHeading !== undefined &&
                    object.introduction !== undefined &&
                    object.mainButtonText !== undefined &&
                    object.mainButtonLink !== undefined &&
                    object.githubLink !== undefined
                )
                    return <HeroSection imgUrl={object.imgUrl.toString()}
                                        mainHeading={object.mainHeading.toString()}
                                        introduction={object.introduction.toString()}
                                        mainButtonLink={object.mainButtonLink.toString()}
                                        mainButtonText={object.mainButtonText.toString()}
                                        githubLink={object.githubLink.toString()}
                    />
                break;
            case "linkList":
                if (object.links !== undefined && Array.isArray(object.links)) { // @ts-ignore
                    return <LinkIconList links={object.links}/>
                }
                break;
            case "widthLimit":
                if (object.children !== undefined && Array.isArray(object.children)) { // @ts-ignore
                    return <WidthLimit>{object.children}</WidthLimit>
                }
                break;

            default:
                //statements;
                return <h2 className="text-error dark:text-error">Invalid Type</h2>
        }
        return <h2 className="text-error dark:text-error">Invalid Component JSON</h2>

    }


    return (
        <div>
            {content.map(i => getComponent(i))}
        </div>
    );
};

type Props = {
    content: {}[]
}

export default SiteBuilder;

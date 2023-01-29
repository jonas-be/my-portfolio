import React from 'react';
import ReactMarkdown from "react-markdown";
import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";
import LabelList from "../common/LabelList";

const SiteBuilder = ({content}: Props) => {
    function getComponent(object: Record<string, object>): ReactJSXElement {
        if (object.type === undefined)
            return <h2 className="text-error dark:text-error">ERROR!!!</h2>
        switch (object.type.toString()) {
            case "markdown":
                if (object.markdown !== undefined)
                    return <ReactMarkdown className="text pt-2" children={object.markdown.toString()}/>
                break;
            case "labelList":
                if (object.labels !== undefined && Array.isArray(object.labels))
                    return <LabelList labels={object.labels}/>
                break;

            default:
                //statements;
                return <h2 className="text-error dark:text-error">Invalid Type</h2>
        }
        return <h2 className="text-error dark:text-error">Invalid Component JSON</h2>

    }


    return (
        <div className="p-3 sm:p-6">
            {content.map(i => getComponent(i))}
        </div>
    );
};

type Props = {
    content: {}[]
}

export default SiteBuilder;

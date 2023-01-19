import exp from "constants";
import {deflateRaw} from "zlib";

export enum ContentDataType {
    PAGE = "pages",
    COMPONENT = "components/"
}

export async function getContentDataJson(lang: string, contentDataType: ContentDataType, path: string, defaultReturnValue?: any) {

    let contentUrl = `http://jonasbe.de:30300/${contentDataType}${path}/${lang}.json`
    console.log(contentUrl)
    let data = await fetch(contentUrl)
    if (data.ok) {
        let content = await data.json()
        return content
    }
    if (defaultReturnValue !== undefined) {
        return defaultReturnValue
    }
}

export async function getSkeletonData(lang: string) {
    const skeletonData = await getContentDataJson(lang, ContentDataType.COMPONENT, "skeleton",
        {
            logoTitle: "!Jonas!",
            labels: {
                drawer: "!Toggle Menü",
                darkModeToggleLight: "!Hellen Modus aktivieren",
                darkModeToggleDark: "!Dunklen Modus aktivieren",
                githubLink: "!GitHub",
                discordLink: "!Community Discord"
            },
            endOfSiteHeader: "!Ende der Seite",
            githubLink: "!GitHub",
            discordLink: "!Discord",
            impress: "!Impressum",
            copyright: "!Copyright © Jonas Bender 2023"
        }
    )
    return skeletonData
}
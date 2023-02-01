import {GetServerSidePropsContext} from "next";

export enum ContentDataType {
    PAGE = "pages",
    PROJECT = "pages/projects",
    LIST = "list",
    COMPONENT = "components/"
}

export async function getContentDataJson(context: GetServerSidePropsContext, contentDataType: ContentDataType, path: string, defaultReturnValue?: any) {
    let lang: string
    if (context.locale === undefined) {
        return context.defaultLocale !== undefined ? context.defaultLocale : "en"
    } else {
        lang = context.locale
    }

    let contentUrl = contentDataType === ContentDataType.LIST ?
        `http://jonasbe.de:30300/${path}/list/${lang}.json`
        :
        `http://jonasbe.de:30300/${contentDataType}${path}/${lang}.json`
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
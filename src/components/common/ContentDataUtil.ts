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
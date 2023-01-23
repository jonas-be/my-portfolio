import SkeletonDe from "../../../public/content/components/skeleton/de.json"
import SkeletonEn from "../../../public/content/components/skeleton/en.json"
import Page404En from "../../../public/content/pages/404/en.json"
import Page404De from "../../../public/content/pages/404/de.json"
import ImprintPageDe from "../../../public/content/pages/imprint/de.json"
import ImprintPageEn from "../../../public/content/pages/imprint/en.json"

export function selectLangauge(object: any, lang: string| undefined) {
    if (lang !== undefined) {
        // @ts-ignore
        const tmp = object[lang]
        return  tmp !== undefined ? tmp : SKELETON_DATA.en
    } else {
        return SKELETON_DATA.en
    }
}

export const SKELETON_DATA = {
    de: SkeletonDe,
    en: SkeletonEn,
}

export const PAGE_404_DATA = {
    de: Page404De,
    en: Page404En
}

export const IMPRINT_PAGE_DATA = {
    de: ImprintPageDe,
    en: ImprintPageEn
}


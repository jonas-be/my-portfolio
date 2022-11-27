import type {NextApiRequest, NextApiResponse} from 'next'

export type MonitorUrlsResponse = {
    monitorUrls: string[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<MonitorUrlsResponse>
) {
    const response = await fetch("https://monitor.jonasbe.de/")
    const data: string = await response.text()

    const expression: string = 'https:\/\/monitor.jonasbe.de\/r\/.*\'';

    let monitorUrls: string[] = []
    // @ts-ignore
    const regexResult = [...data.matchAll(expression)]
    regexResult.forEach(r => {
        monitorUrls.push("/api/single-monitor?url=" + r[0].slice(0,-1))
    })

    res.status(200).json({monitorUrls: monitorUrls})
}

import type {NextApiRequest, NextApiResponse} from 'next'


export type SingleMonitorResponse = {
    name: string,
    uptime: string,
    status: string,
    history: {
        date: string,
        status: string
    }[]
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<SingleMonitorResponse>
) {
    // @ts-ignore
    const response = await fetch(req.query.url.toString())
    const rawText: string = await response.text()

    const nameSelection = rawText.match("status-page__resource-name'>\\n.*\\n(.*)\\n")
    const uptimeSelection = rawText.match("text-muted status-page__resource-interval'>\\n(.*)\\n")
    // @ts-ignore
    const historySelection = [...rawText.matchAll(/title='(.*)'\>/g)]

    const history = historySelection.map(i => {
        return {
            date: i[1].match(/(.*)&l/g)[0].slice(0,-2),
            status: i[1].match(/gt;(.*)/g)[0].slice(3)
        }
    })

    const data: SingleMonitorResponse = {
        name: nameSelection === null ? "" : nameSelection[1],
        uptime: uptimeSelection === null ? "" : uptimeSelection[1],
        status: history[history.length-1].status,
        history: history
    }


    res.status(200).json(data)
}

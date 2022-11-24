import type {NextApiRequest, NextApiResponse} from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<string>
) {
    // @ts-ignore
    const response = await fetch(req.query.test.toString())
    const data: string = await response.text()
    res.status(200).json(data)
}

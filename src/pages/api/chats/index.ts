import type { NextApiRequest, NextApiResponse } from 'next'
import { Chats } from 'src/database/data'
import { IChats } from 'src/interfaces'

type Data = {
    data : IChats
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ data: Chats })
}
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from "../auth/[...nextAuth]";
import prisma from '../../../prisma/client'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method === "GET") {
    const session = await getServerSession(req, res, authOptions)
    if(!session) return res.status(401).json({message: 'Please sign in'})

  
  //Get Auth users posts
  try {
  
    const data = await prisma.user.findUnique({
        where: {
            email: session.user?.email,
        },
        include: {
            Post: {
                orderBy: {
                    createdAt: "desc",
                },
                include: {
                    Comment: true,
                }
            }
        }
    })
  
    res.status(200).json(data)
  } catch (error) {
    res.status(403).json({err: "Error has occured whilst making a post"})
  }
}
}


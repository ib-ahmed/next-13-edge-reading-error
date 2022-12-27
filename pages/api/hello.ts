// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

export default function handler(
  req: NextApiRequest
) {
  return NextResponse.json({ name: 'John Doe' })
}

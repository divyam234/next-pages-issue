import { users } from 'db/schema';
import { db } from './../../db/db';
import { NextRequest } from 'next/server';

export const config = {
  runtime: "edge",
}

export default async  function handler(
  req: NextRequest,
) {
  if (req.method === "POST") {
    try{
    const body = (await req.json()) as any
    await db.insert(users).values(body).execute();
    return new Response(null, { status: 201 })
    }catch(e){
      return new Response(null, { status: 500 })
    }
  }
  if (req.method === "GET") {
    const data =await db.select().from(users);
    return Response.json(data);
  }
}
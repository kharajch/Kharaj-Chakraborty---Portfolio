import { NextResponse } from "next/server"
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://kharajch:kharaj123@kharajch.9vtfjgw.mongodb.net/?appName=kharajch";
export async function POST(request) {

  const formData = await request.json()
  const name = formData.name
  const email = formData.email
  const message = formData.message

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  }
  )
    try {
      await client.connect();
      const db = await client.db("kharajch_form_data");
      const collection = await db.collection("form_data")
      const insert_data = await collection.insertOne({
        name: `${name}`,
        email: `${email}`,
        message: `${message}`
      })
      return NextResponse.json({ success: 'Message Sent Successfully!!' }, { status: 200 })

    } catch (error) {
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })

    } 
  }
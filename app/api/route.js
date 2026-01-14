import { NextResponse } from "next/server";
import { MongoClient, ServerApiVersion } from "mongodb";

export async function POST(req) {

    const uri = process.env.MONGO_URI

    const body = await req.json();


    try {

        var client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });


        await client.connect();
        const db = await client.db(process.env.DB);
        const collection = await db.collection(process.env.collection)
        const insert_data = await collection.insertOne({
            name: `${body.name}`,
            email: `${body.email}`,
            message: `${body.message}`,
        })
        await client.close();


        return NextResponse.json({ success: "Your Message is sent successfully!" })
    }

    catch (error) {
        return NextResponse.json({ failed: "Internal Server Error!" })
    }

}
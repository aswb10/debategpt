import { connectToDB } from "@utils/database"
import Case from "@models/case"

export const POST = async (req, res) => {
    const { userId, argument, topic, side } = await req.json()

    try {
        await connectToDB()
        console.log('new cases')
        let logical
        if (side === 'pro') {
            logical = true
        } else {
            logical = false
        }
        const newCase = new Case({
            creator: userId,
            argument,
            topic,
            side: logical,
            counterargument: ''
        })

        await newCase.save()

        return new Response(JSON.stringify(newCase), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new case", {status: 500 })
    }
}
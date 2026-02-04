import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(req: Request) {
    try {
        await dbConnect();

        // Parse the request body
        const body = await req.json();
        const { name, email, message } = body;

        // Validate (Simple server-side validation)
        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, error: 'Please provide all required fields' },
                { status: 400 }
            );
        }

        // Create a new contact
        const contact = await Contact.create({
            name,
            email,
            message,
        });

        return NextResponse.json(
            { success: true, data: contact },
            { status: 201 }
        );
    } catch (error: any) {
        console.error('API Error:', error);
        return NextResponse.json(
            { success: false, error: error.message || 'Server Error' },
            { status: 500 }
        );
    }
}

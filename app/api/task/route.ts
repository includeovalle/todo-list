import { NextResponse } from 'next/server';


export async function GET() {
    const res = await fetch(`${process.env.SERVER_API}/tasks`, {
            headers: { 'Content-Type': 'application/json' },
        })
    const data = await res.json();
    console.log('server_data: ',data);
    return NextResponse.json(data);
}

//export async function POST(request) {
//    const { task } = await request.body.json();
//    const res = await fetch(`${process.env.SERVER_API}/tasks`, {
//        method: 'POST',
//        headers: { 'Content-Type': 'application/json' },
//        body: JSON.stringify({ task })
//    })
//    const data = await res.json();
//    return NextResponse.json(data);
//}

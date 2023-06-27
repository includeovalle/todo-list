import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'
export const dynamicParams = false
export const revalidate = true
export const fetchCache = 'auto'
export const runtime = 'nodejs'
export const preferredRegion = 'auto'

const DataRoute = `${process.env.SERVER_API}/tasks`;

export async function POST(request: Request) {
    const body = await request.json();

    const res = await fetch(DataRoute, {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        redirect: 'follow',
        body: JSON.stringify(body)
    })
    return NextResponse.json(res);
}

//export async function PUT(request: Request) {
//    const body = await request.json();
//    const strigBody = JSON.stringify(body);
//    console.log('this is put ', strigBody);
//    const res = await fetch(DataRoute, {
//        headers: { 'Content-Type': 'application/json' },
//        method: 'PUT',
//        body: JSON.stringify(body)
//    })
//    return NextResponse.json(res);
//}

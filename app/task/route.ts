import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'
export const dynamicParams = false
export const revalidate = true
export const fetchCache = 'auto'
export const runtime = 'nodejs'
export const preferredRegion = 'auto'

const DataRoute = `${process.env.SERVER_API}/tasks`;

export async function GET() {
    const res = await fetch(DataRoute);
    const data = await res.json();
    return NextResponse.json(data);
}

export async function POST(request: Request) {
    const { task, completed } = await request.json();

    const newTask = {
        task: task,
        completed: completed
    };

    console.log({ newTask })

    const res = await fetch(DataRoute, {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(newTask)
    })

    console.log({ res })
    console.log('--------------------------')
    console.log(res.json())
    return NextResponse.json(res);
}


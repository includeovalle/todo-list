import {NextResponse} from 'next/server';

    export async function GET() {
        const res =  await fetch('http://50.116.17.7:3005/tasks');
        const data = await res.json();
        return NextResponse.json(data);
    }

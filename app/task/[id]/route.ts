import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'
export const dynamicParams = false
export const revalidate = true
export const fetchCache = 'auto'
export const runtime = 'nodejs'
export const preferredRegion = 'auto'

const DataRoute = `${process.env.SERVER_API}/tasks/`;

export async function PUT(req: Request) {
    const body = await req.json();
    const stringBody = JSON.stringify(body);
    const {id, task, completed } = body;

    
    const fullRoute = `${DataRoute}${id}`;
    console.log('this is put ', id, task, completed, fullRoute);

    //this section updates completed and id
    if(!task){
        try{
            console.log('inside try')
        const res = await fetch(fullRoute, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: stringBody,
        });

        if (res.ok) {
            return NextResponse.json({message: 'success',status: 200});
        }

        } catch  (error) {console.error( error )}


    }
    if(task){
        console.log('task');
    }
    
}

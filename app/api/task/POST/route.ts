import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { task, completed } = await request.json();

  const newTask = {
    task: task,
    completed: completed
  };

    const res = await fetch(`${process.env.SERVER_API}/tasks`, {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(newTask)
        })

    return NextResponse.json(res);
}


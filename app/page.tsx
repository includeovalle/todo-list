import { Tasks } from './components/Designs/index'

export default async function Home() {

    //const res = await fetch(`${process.env.SERVER_API}/tasks`,{ cache: 'no-store' })
    //const data = await res.json()

    //add ServerApi from .env.local file
    const res = await fetch("http://localhost:3000/api/task")
    const data = await res.json()

    return (
        <>
        <Tasks dataTable={data} />
        </>
    )
}

import { Tasks } from './components/Designs/index'

export default async function Home() {
    //add ServerApi from .env.local file
    const res = await fetch(`${process.env.SERVER_API}/tasks`,{ cache: 'no-store' })
    const data = await res.json()

    console.log(data)
    return (
        <>
        <Tasks dataTable={data} />
        </>
    )
}

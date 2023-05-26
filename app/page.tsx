import { Tasks } from './components/Designs/index'

export default async function Home() {
    //add ServerApi from .env.local file
    const res = await fetch(`${process.env.SERVER_API}/tasks`,{ cache: 'max-age=0, must-revalidate' })
    const data = await res.json()

    return (
        <>
        <Tasks dataTable={data} />
        </>
    )
}

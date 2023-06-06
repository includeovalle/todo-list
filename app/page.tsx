import { Tasks } from './components/Designs/index'

export default async function Home() {

    const res = await fetch("http://localhost:3000/api/task", { cache: 'no-store' })
    const data = await res.json()

    return (
        <>
            <Tasks dataTable={data} />
        </>
    )
}

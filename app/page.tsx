import { Tasks } from './components/Designs/index'

export default async function Home() {

    const res = await fetch('http://localhost:3000/api/tasks')
    const data = await res.json()

    return (
        <>
        <Tasks data={data} />
        </>
    )
}

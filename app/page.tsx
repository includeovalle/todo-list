import { Tasks } from './components/Designs/index'

export default async function Home() {

    const res = await fetch("api/task", { cache: 'no-store' })
    const data = await res.json()

    return (
        <>
        <Tasks rows={10} 
        pagination={true}
        dataTable={data} />
        </>
    )
}

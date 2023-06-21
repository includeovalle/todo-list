import { Tasks } from './components/Designs/index'

export default async function Home() {
    const response = await fetch('http://50.116.17.7:3005/tasks', {  cache: 'no-store' })
    const data = await response.json()

    
    return (
        <>
        <Tasks rows={10} 
        pagination={true}
        dataTable={data} />
        </>
    )
}

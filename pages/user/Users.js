import Link from "next/link"

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return {
        props: { user: data }
    }
}

const Users = ({ user }) => {
    return (
        <div>
            <Link href="/"><a>Back to app</a></Link>
            <h1> test user page</h1>
            <p>{user.map(resp => (
                <div key={resp.id}>
                    <h2>{resp.name}</h2>
                </div>
            ))}</p>
        </div>
    )
}
export default Users
// (Server Component)
import "./page.css";
import { User } from "@/app/entity/User";

export default async function UsersPage() {
    // This fetch runs on the server (no client-side code needed here)
    const res = await fetch("http://localhost:3000/api/users");
    const data = await res.json();

    return (
        <main>
            <h1>Users</h1>
            <ul>
                {data.map((user: User) => (
                    <li key={user.id}>
                        {user.firstname} {user.lastname}
                    </li>
                ))}
            </ul>
        </main>
    );
}

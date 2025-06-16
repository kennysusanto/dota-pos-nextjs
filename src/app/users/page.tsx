// (Server Component)
import "./page.css";
import { User } from "@/entity/User";
import BasicCard from "./UserCard";
import Box from "@mui/material/Box";

export default async function UsersPage() {
    // This fetch runs on the server (no client-side code needed here)
    const res = await fetch("http://localhost:3000/api/users");
    const data = await res.json();

    return (
        <main>
            <h1>Users</h1>
            <div>
                <Box
                    sx={{
                        width: "100%",
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
                        gap: 10,
                    }}
                >
                    {data.map((user: User) => (
                        <BasicCard propUser={user} key={user.id} />
                    ))}
                </Box>
            </div>
        </main>
    );
}

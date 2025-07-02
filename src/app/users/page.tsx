// (Server Component)
import "./page.css";
import { User } from "@/entity/User";
import BasicCard from "./UserCard";
import Box from "@mui/material/Box";

export default async function UsersPage() {
    // This fetch runs on the server (no client-side code needed here)
    const res = await fetch("http://localhost:3000/api/users");
    let data = await res.json();
    console.log(data);
    if (data.error) {
        data = [];
    }

    return (
        <div className="p-8">
            <h1>Users</h1>
            <main className="flex flex-col row-start-3 ">
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
            <footer className="row-start-3 flex-wrap items-center justify-center">
                <a href="/">Back →</a>
            </footer>
        </div>
    );
}

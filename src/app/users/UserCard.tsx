import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { User } from "@/entity/User";

const bull = (
    <Box component="span" sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
        •
    </Box>
);

export default function BasicCard({ propUser }: { propUser: User }) {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5">{propUser.username}</Typography>
                <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
                    {propUser.firstname} {propUser.lastname}
                </Typography>
                <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                    be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ color: "text.secondary", mb: 1.5 }}>adjective</Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

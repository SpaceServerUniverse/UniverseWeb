import {Card, CardContent} from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Link} from "@inertiajs/inertia-react";

interface Props {
    user: any,
    rank: number,
    val: any,
}

export default function RankingPlayerCard({user, rank, val}: Props) {

    return (
        <>
            <Link href={route('auth.profile.show', {profile: user.name})}>
                <Card sx={{display: 'flex', minWidth: "300px", maxWidth: "700px", marginTop: "20px"}}>
                    <img src={"https://crafatar.com/avatars/" + user.uuid}
                         alt="skin head"
                         style={{width: "95px", height: "95px"}}/>
                    <Box sx={{display: 'flex', flexDirection: 'column'}} className="p-0">
                        <CardContent className="py-0">
                            <Typography variant="subtitle2" color="text.secondary" component="div">
                                {val}
                            </Typography>
                            <Typography component="div" variant="h6">
                                {rank}位: {user.name}
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
            </Link>
        </>
    );
}

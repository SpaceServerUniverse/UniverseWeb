import {Card, CardContent} from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Link} from "@inertiajs/inertia-react";

interface Props {
    uuid: any,
    username: any,
    rank: number,
    val: any,
}

export default function LifeCountRankingPlayerCard({uuid, username, rank, val}: Props) {

    return (
        <>
            <Link href={route('auth.profile.show', {profile: username})}>
                <Card
                    sx={{
                        display: 'flex',
                        minWidth: "300px",
                        maxWidth: "700px",
                        marginTop: "20px",
                        background: "rgba(255, 255, 255, 0.96)",
                        border: "1px solid rgba(255, 255, 255, 0.6)",
                        boxShadow: "0 12px 30px rgba(31, 38, 135, 0.14)",
                        backdropFilter: "blur(8px)",
                        borderRadius: "16px",
                    }}
                >
                    <img src={"https://mc-heads.net/avatar/" + uuid}
                         alt="skin head"
                         style={{width: "95px", height: "95px"}}/>
                    <Box sx={{display: 'flex', flexDirection: 'column'}} className="p-0">
                        <CardContent className="py-0">
                            <Typography variant="subtitle2" color="text.secondary" component="div">
                                {val}
                            </Typography>
                            <Typography component="div" variant="h6">
                                {rank}位: {username}
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
            </Link>
        </>
    );
}

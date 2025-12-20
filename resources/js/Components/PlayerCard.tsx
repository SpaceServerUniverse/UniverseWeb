import {Card, CardContent} from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Link} from "@inertiajs/inertia-react";

export default function PlayerCard(props: any) {
    const prefix = props.props.name.slice(0,1);
    let platform = "JavaEdition";
    if(prefix == "." || prefix == "*"){
        platform = "BedrockEdition";
    }

    return (
        <>
            <Link href={route('auth.profile.show', {profile: props.props.name})} className="my-3">
                <Card
                    sx={{
                        display: 'flex',
                        width: "300px",
                        marginTop: "10px",
                        background: "rgba(255, 255, 255, 0.96)",
                        border: "1px solid rgba(255, 255, 255, 0.6)",
                        boxShadow: "0 12px 30px rgba(31, 38, 135, 0.12)",
                        backdropFilter: "blur(8px)",
                        borderRadius: "16px",
                    }}
                >
                    <img src={"https://mc-heads.net/avatar/" + props.props.uuid}
                         alt="skin head"
                         style={{width: "95px", height: "95px"}}/>
                    <Box sx={{display: 'flex', flexDirection: 'column'}} className="p-0">
                        <CardContent className="py-0">
                            <Typography variant="subtitle2" color="text.secondary" component="div">
                                [{platform}]
                            </Typography>
                            <Typography component="div" variant="h6">
                                {props.props.name}
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
            </Link>
        </>
    );
}

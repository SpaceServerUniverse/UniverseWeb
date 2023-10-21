import {Autocomplete, Card, CardContent, CardMedia, Paper, useTheme} from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Link} from "@inertiajs/inertia-react";
import IconButton from "@mui/material/IconButton";
import {Inertia} from "@inertiajs/inertia";
import SearchIcon from "@mui/icons-material/Search";

export default function PlayerCard(props: any) {
    const prefix = props.props.name.slice(0,1);
    let platform = "JavaEdition";
    if(prefix == "." || prefix == "*"){
        platform = "BedrockEdition";
    }

    return (
        <>
            <Link href={route('auth.profile.show', {profile: props.props.name})} className="my-3">
                <Card sx={{display: 'flex', width: "300px", marginTop: "10px"}}>
                    <img src={"https://crafatar.com/avatars/" + props.props.uuid}
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

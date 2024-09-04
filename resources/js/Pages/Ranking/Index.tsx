import React from "react";
import {Head, Link} from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

export default function Index(props: any) {
    return (
        <Authenticated
            auth={props.auth}
            flash={props.flash}
        >
            <Head title="ランキング - UniverseWeb"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 pb-5">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg py-5">
                        <div className="flex justify-center">
                            <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                                <nav aria-label="main mailbox folders">
                                    <List>
                                        <Link href={route('auth.ranking.money')}>
                                            <ListItem disablePadding>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <CurrencyYenIcon/>
                                                    </ListItemIcon>
                                                    <ListItemText primary="お金ランキング"/>
                                                </ListItemButton>
                                            </ListItem>
                                        </Link>
                                        <Link href={route('auth.ranking.normal_level')}>
                                            <ListItem disablePadding>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <EmojiPeopleIcon/>
                                                    </ListItemIcon>
                                                    <ListItemText primary="レベルランキング"/>
                                                </ListItemButton>
                                            </ListItem>
                                        </Link>

                                        <Link href={route('auth.ranking.block_break')}>
                                            <ListItem disablePadding>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <EmojiPeopleIcon/>
                                                    </ListItemIcon>
                                                    <ListItemText primary="ブロック破壊数ランキング"/>
                                                </ListItemButton>
                                            </ListItem>
                                        </Link>
                                    </List>
                                </nav>
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

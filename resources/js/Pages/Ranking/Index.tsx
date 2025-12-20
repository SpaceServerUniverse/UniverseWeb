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
                    <div className="glass-card overflow-hidden rounded-lg py-5">
                        <h2 className="section-title text-2xl text-center mb-6">ランキング一覧</h2>
                        <div className="flex justify-center">
                            <Box sx={{width: '100%', maxWidth: 360}}>
                                <nav aria-label="main mailbox folders">
                                    <List>
                                        <Link href={route('auth.ranking.money')}>
                                            <ListItem disablePadding>
                                                <ListItemButton
                                                    sx={{
                                                        borderRadius: '8px',
                                                        mx: 1,
                                                        mb: 1,
                                                        '&:hover': {
                                                            background: 'rgba(255, 94, 126, 0.1)',
                                                        }
                                                    }}
                                                >
                                                    <ListItemIcon>
                                                        <CurrencyYenIcon sx={{color: '#9333ea'}}/>
                                                    </ListItemIcon>
                                                    <ListItemText primary="お金ランキング"/>
                                                </ListItemButton>
                                            </ListItem>
                                        </Link>
                                        <Link href={route('auth.ranking.normal_level')}>
                                            <ListItem disablePadding>
                                                <ListItemButton
                                                    sx={{
                                                        borderRadius: '8px',
                                                        mx: 1,
                                                        mb: 1,
                                                        '&:hover': {
                                                            background: 'rgba(60, 80, 255, 0.1)',
                                                        }
                                                    }}
                                                >
                                                    <ListItemIcon>
                                                        <EmojiPeopleIcon sx={{color: '#2563eb'}}/>
                                                    </ListItemIcon>
                                                    <ListItemText primary="レベルランキング"/>
                                                </ListItemButton>
                                            </ListItem>
                                        </Link>

                                        <Link href={route('auth.ranking.block_break')}>
                                            <ListItem disablePadding>
                                                <ListItemButton
                                                    sx={{
                                                        borderRadius: '8px',
                                                        mx: 1,
                                                        '&:hover': {
                                                            background: 'rgba(255, 94, 126, 0.1)',
                                                        }
                                                    }}
                                                >
                                                    <ListItemIcon>
                                                        <EmojiPeopleIcon sx={{color: '#ec4899'}}/>
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

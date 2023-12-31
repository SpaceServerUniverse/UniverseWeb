import React from "react";
import {Head, Link} from "@inertiajs/inertia-react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {Container} from "@mui/material";

export default function Welcome(props: any) {
    return (
        <>
            <Head title="UniverseWeb"/>
            <header>
                <Box sx={{flexGrow: 1}}>
                    <AppBar color="secondary" position="static">
                        <Toolbar>
                            <Link href="/">
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="div"
                                >
                                    UniverseWeb
                                </Typography>
                            </Link>
                            <Box sx={{flexGrow: 1}}/>
                            <Box>
                                {props.auth.user ? (
                                    <Link
                                        href={route("auth.home")}
                                        className="text-sm text-white"
                                    >
                                        ホーム
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route("login")}
                                            className="text-sm text-white"
                                        >
                                            ログイン
                                        </Link>
                                    </>
                                )}
                            </Box>
                        </Toolbar>
                    </AppBar>
                </Box>
            </header>
            <main style={{minHeight: "95vh"}}>
                <Container>
                    <div className="text-center" style={{paddingTop: "30vh"}}>
                        <p className="text-5xl">Universeをインターネットから！</p>
                    </div>
                </Container>
            </main>
            <footer>
                <div className="w-full bg-black p-4" style={{minHeight: "100px"}}>
                    <p className="text-center text-xs text-gray-400 mt-6">©2015
                        - {new Date().getFullYear()} SpaceServerProject All rights reserved.</p>
                    <p className="text-center text-xs text-gray-400">当サーバーはMinecraft非公式サーバーであり、microsoft , Mojang Studiosとは一切関与していません。</p>
                </div>
            </footer>
        </>
    );
}

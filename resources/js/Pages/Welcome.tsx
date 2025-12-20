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
                    <AppBar
                        position="static"
                        sx={{
                            background: "rgba(15, 12, 40, 0.65)",
                            backdropFilter: "blur(10px)",
                            boxShadow: "none",
                        }}
                    >
                        <Toolbar>
                            <Link href="/">
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="div"
                                    sx={{fontWeight: 800, letterSpacing: "0.08em"}}
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
            <main>
                <Box
                    sx={{
                        minHeight: "95vh",
                        display: "flex",
                        alignItems: "center",
                        backgroundImage:
                            "linear-gradient(135deg, rgba(255, 94, 126, 0.85), rgba(60, 80, 255, 0.75)), url('/img/background.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <Container maxWidth="lg">
                        <Box
                            sx={{
                                textAlign: "center",
                                color: "#fff",
                                py: {xs: 10, md: 14},
                            }}
                        >
                            <Typography
                                variant="h2"
                                component="h1"
                                sx={{
                                    fontWeight: 800,
                                    letterSpacing: "0.02em",
                                    textShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
                                }}
                            >
                                Universeをインターネットから！
                            </Typography>
                            <Typography
                                variant="h6"
                                component="p"
                                sx={{
                                    mt: 3,
                                    mb: 5,
                                    color: "rgba(255, 255, 255, 0.9)",
                                }}
                            >
                                宇宙の冒険を更に楽しく
                            </Typography>
                            <Box
                                sx={{
                                    display: "inline-flex",
                                    gap: 2,
                                    flexWrap: "wrap",
                                    justifyContent: "center",
                                    background: "rgba(10, 12, 30, 0.4)",
                                    px: 3,
                                    py: 1.5,
                                    borderRadius: "999px",
                                    border: "1px solid rgba(255, 255, 255, 0.35)",
                                }}
                            >
                                <Typography variant="body1" sx={{fontWeight: 700}}>
                                    IP: e.r1nd0.dev:49153
                                </Typography>
                            </Box>
                        </Box>
                    </Container>
                </Box>
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

import * as React from 'react';
import {useEffect, useState} from 'react';
import {alpha, styled} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";
import {Alert, Snackbar} from '@mui/material';

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));


interface Props {
    auth: any;
    flash: any;
    children: React.ReactNode;
}

export default function Authenticated({auth, children, flash}: Props) {
    const [open, setOpen] = React.useState({
        'error': false,
        'warning': false,
        'info': false,
        'success': false
    });

    useEffect(() => {
        if (flash !== undefined) {
            setOpen({
                'error': flash.error !== null,
                'warning': flash.warning !== null,
                'info': flash.info !== null,
                'success': flash.success !== null
            })
        }
    }, [flash]);

    const handleClose = (type: string) => {
        setOpen(open => ({
            ...open,
            [type]: false,
        }))
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const [search, setSearch] = useState('');
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.nativeEvent.isComposing || e.key !== 'Enter') return
        if (search == "") {
            return;
        }
        Inertia.get(route('auth.profile.show', {profile: search}))
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <Link href={route('auth.profile.show', {profile: auth.user.name})} className="w-full">
                <MenuItem onClick={handleMenuClose}>プロフィール</MenuItem>
            </Link>
            <Link href={route('auth.setting.index')} className="w-full">
                <MenuItem onClick={handleMenuClose}>設定</MenuItem>
            </Link>
            <Link href={route('logout')} method="post" as="button" className="w-full">
                <MenuItem onClick={handleMenuClose}>ログアウト</MenuItem>
            </Link>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <Search className="w-full">
                <SearchIconWrapper>
                    <SearchIcon/>
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search Player"
                    inputProps={{'aria-label': 'search'}}
                    onKeyDown={handleKeyDown}
                    className="w-full"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
            </Search>
            <MenuItem component={Link} href={route("auth.search.index")} >
                    <span className="text-sm text-gray-800 mx-2">検索</span>
            </MenuItem>
            <MenuItem>
                <Link
                    href="#"
                    className="text-sm text-gray-800 mx-2"
                >
                    ショップ
                </Link>
            </MenuItem>
            <MenuItem>
                <Link
                    href="#"
                    className="text-sm text-gray-800 mx-2"
                >
                    フレンド
                </Link>
            </MenuItem>
            <MenuItem component={Link} href={route("auth.ranking.index")}>
                <span className="text-sm text-gray-800 mx-2">ランキング</span>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <p className="text-sm text-gray-800 mx-2">プロフィール</p>
            </MenuItem>
        </Menu>
    );

    return (
        <>
            <Snackbar open={open.success} onClose={() => handleClose("success")} autoHideDuration={6000}
                      anchorOrigin={{vertical: "top", horizontal: "center"}}>
                <Alert severity="success"
                       onClose={() => handleClose("success")}
                       sx={{width: '100%'}}>{flash !== undefined && flash.success !== null ? flash.success : ''}</Alert>
            </Snackbar>
            <Snackbar open={open.warning} onClose={() => handleClose("warning")} autoHideDuration={6000}
                      anchorOrigin={{vertical: "top", horizontal: "center"}}>
                <Alert severity="warning"
                       onClose={() => handleClose("warning")}
                       sx={{width: '100%'}}>{flash !== undefined && flash.warning !== null ? flash.warning : ''}</Alert>
            </Snackbar>
            <Snackbar open={open.info} onClose={() => handleClose("info")} autoHideDuration={6000}
                      anchorOrigin={{vertical: "top", horizontal: "center"}}>
                <Alert severity="info"
                       onClose={() => handleClose("info")}
                       sx={{width: '100%'}}>{flash !== undefined && flash.info !== null ? flash.info : ''}</Alert>
            </Snackbar>
            <Snackbar open={open.error} onClose={() => handleClose("error")} autoHideDuration={6000}
                      anchorOrigin={{vertical: "top", horizontal: "center"}}>
                <Alert severity="error"
                       onClose={() => handleClose("error")}
                       sx={{width: '100%'}}>{flash !== undefined && flash.error !== null ? flash.error : ''}</Alert>
            </Snackbar>
            <header>
                <Box sx={{flexGrow: 1}}>
                    <AppBar color="secondary" position="static">
                        <Toolbar>
                            <Link href={route("auth.home")}>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="div"
                                >
                                    UniverseWeb
                                </Typography>
                            </Link>
                            <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                                <Link
                                    href={route("auth.search.index")}
                                    className="text-sm text-white ms-4 mx-2"
                                >
                                    検索
                                </Link>
                                <Link
                                    href="#"
                                    className="text-sm text-white mx-2"
                                >
                                    ショップ
                                </Link>
                                <Link
                                    href="#"
                                    className="text-sm text-white mx-2"
                                >
                                    フレンド
                                </Link>
                                <Link
                                    href={route("auth.ranking.index")}
                                    className="text-sm text-white mx-2"
                                >
                                    ランキング
                                </Link>

                            </Box>
                            <Box sx={{flexGrow: 1}}/>
                            <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon/>
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Search Player"
                                        inputProps={{'aria-label': 'search'}}
                                        onKeyDown={handleKeyDown}
                                        value={search}
                                        onChange={(event) => setSearch(event.target.value)}
                                    />
                                </Search>
                            </Box>
                            <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                                <IconButton
                                    size="large"
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit"
                                >
                                    <img src={"https://mc-heads.net/avatar/" + auth.user.uuid} alt="skin head"
                                         style={{width: "23px"}}/>
                                </IconButton>

                            </Box>
                            <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                                <IconButton
                                    size="large"
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                    color="inherit"
                                >
                                    <img src={"https://mc-heads.net/avatar/" + auth.user.uuid} alt="skin head"
                                         style={{width: "25px"}}/>
                                </IconButton>
                            </Box>
                        </Toolbar>
                    </AppBar>
                    {renderMobileMenu}
                    {renderMenu}
                </Box>
            </header>
            <main className="bg-gray-100" style={{minHeight: "100vh"}}>
                {children}
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

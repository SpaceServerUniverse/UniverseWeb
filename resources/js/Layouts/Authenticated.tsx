import * as React from 'react';
import {styled, alpha} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import {Link} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";
import {useState} from "react";

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
    header: React.ReactNode;
    children: React.ReactNode;
}

export default function Authenticated({auth, header, children}: Props) {
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
            <MenuItem>
                <Link
                    href="#"
                    className="text-sm text-gray-800 mx-2"
                >
                    検索
                </Link>
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
            <MenuItem>
                <Link
                    href="#"
                    className="text-sm text-gray-800 mx-2"
                >
                    ランキング
                </Link>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <p className="text-sm text-gray-800 mx-2">プロフィール</p>
            </MenuItem>
        </Menu>
    );

    return (
        <>
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
                                    href="#"
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
                                    href="#"
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
                                    <img src={"https://crafatar.com/avatars/" + auth.user.uuid} alt="skin head"
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
                                    <img src={"https://crafatar.com/avatars/" + auth.user.uuid} alt="skin head"
                                         style={{width: "25px"}}/>
                                </IconButton>
                            </Box>
                        </Toolbar>
                    </AppBar>
                    {renderMobileMenu}
                    {renderMenu}
                </Box>
            </header>
            <main style={{minHeight: "95vh"}}>
                {children}
            </main>
            <footer>
                <div className="w-full bg-black p-4" style={{minHeight: "100px"}}>
                    <p className="text-center text-xs text-gray-400 mt-6">©2015
                        - {new Date().getFullYear()} SpaceServerProject All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}

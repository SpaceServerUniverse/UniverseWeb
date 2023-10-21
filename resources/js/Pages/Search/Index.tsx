import {Head} from "@inertiajs/inertia-react";
import React, {useState} from "react";
import Authenticated from "@/Layouts/Authenticated";
import PlayerCard from "@/Components/PlayerCard";
import {Card, Pagination, Paper} from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import axios from "axios";
import {Inertia} from "@inertiajs/inertia";

export default function Index(props: any) {
    const params = new URLSearchParams(location.search);
    const [page, setPage] = useState(parseInt(params.get('page') ?? "1"));
    const [search, setSearch] = useState(props.search ?? "");
    const [data, setData] = useState(props.pagination.data);
    const [from, setFrom] = useState(parseInt(props.pagination.from ?? 0))
    const [to, setTo] = useState(parseInt(props.pagination.to ?? 0))
    const [total, setTotal] = useState(parseInt(props.pagination.total))
    const [lastPage, setLastPage] = useState(parseInt(props.pagination.last_page))

    const onPaginationChange = (e: any, page: React.SetStateAction<number>) => {
        setPage(page)
        axios.post(route("auth.ajax.search.get-users-pagination", {"page": page, "search": search}), {})
            .then(function (response) {
                history.pushState(null, "", location.pathname + "?page=" + page)
                setFrom(response.data.from ?? 0);
                setTo(response.data.to ?? 0);
                setTotal(response.data.total)
                setData(response.data.data);
            })
            .catch(function (error) {
                location.href = route("login")
            });
    }

    const handleSearchClick = (e: any) => {
        redirect();
    }

    const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== 'Enter') return
        redirect();
    }

    const redirect = () => {
        if (search == "") {
            Inertia.get(route('auth.search.index'))
            return;
        }
        Inertia.get(route('auth.search.result', {search: search}))
    }

    return (
        <Authenticated
            auth={props.auth}
            header={
                <></>
            }
        >
            <Head title="検索"/>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-5">
                <div>
                    <Box sx={{display: "flex", justifyContent: "center"}}>
                        <Paper
                            className="text-center my-8 w-full"
                            sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 400}}
                        >
                            <InputBase
                                sx={{ml: 1, flex: 1}}
                                placeholder="Search Player"
                                inputProps={{'aria-label': 'Search Player'}}
                                onKeyDown={handleSearchKeyDown}
                                value={search}
                                onChange={(event) => setSearch(event.target.value)}
                            />
                            <IconButton type="button" sx={{p: '10px'}} aria-label="search" onClick={handleSearchClick}>
                                <SearchIcon/>
                            </IconButton>
                        </Paper>
                    </Box>
                    <h3 className="text-3xl">プレイヤーリスト</h3>
                    <Card className="mt-4 p-9">
                        <Box sx={{display: "flex", justifyContent: 'space-around', flexWrap: 'wrap'}}>
                            {data.map((item: any, key: any) => (<PlayerCard props={item} key={key}></PlayerCard>))}
                        </Box>
                    </Card>
                    <div className="flex justify-center mt-5" style={{textAlign: "center"}}>
                        <Pagination
                            count={lastPage}
                            onChange={onPaginationChange}
                            page={page}
                        />
                    </div>
                    <p className="text-center text-sm">({from}件~{to}件 全{total}件)</p>
                </div>
            </div>
        </Authenticated>
    );
}

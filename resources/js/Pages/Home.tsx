import {Head} from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import LinearProgress, {LinearProgressProps} from '@mui/material/LinearProgress';
import Typography from "@mui/material/Typography";
import {Box} from "@mui/material";


function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    return (
        <Box sx={{display: 'flex', alignItems: 'center'}}>
            <Box sx={{width: '100%', mr: 1}}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{minWidth: 35}}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

export default function Home(props: any) {
    return (
        <Authenticated
            auth={props.auth}
            flash={props.flash}
        >
            <Head title="ホーム - UniverseWeb"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                    <div className="flex flex-wrap justify-center md:justify-between">
                        <div className="bg-white overflow-hidden shadow-sm rounded-lg m-3 p-2"
                             style={{minWidth: 300, width: "30%"}}>
                            <p className="text-lg text-center">所持金</p>
                            <div className="py-5 text-center text-2xl">
                                {props.user.money.money}star #{props.money_rank}位
                            </div>
                        </div>
                        <div className="bg-white overflow-hidden shadow-sm rounded-lg m-3 p-2"
                             style={{minWidth: 300, width: "30%"}}>
                            <p className="text-lg text-center">レベル</p>
                            <div className="my-5">
                                <div className="text-center text-2xl">
                                    {props.user.player_level.player_level_mode_relation.level}Lv #{props.level_rank}位
                                </div>
                                <div className="text-sm text-center">
                                    {props.user.player_level.total_exp}exp
                                </div>
                            </div>
                        </div>
                        <div className="bg-white overflow-hidden shadow-sm rounded-lg m-3 p-2"
                             style={{minWidth: 300, width: "30%"}}>
                            <p className="text-lg text-center">なんか</p>
                            <div className="py-5 text-center text-2xl">
                                <p>test #1000位</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-between">
                        <div className="bg-white overflow-hidden shadow-sm rounded-lg m-3 p-5"
                             style={{minWidth: 300, width: "45%"}}>
                            <p className="text-lg text-center">ステータス</p>
                            <div className="py-5 text-center">
                                <p>現在の所持金: {props.user.money.money}star</p>
                                <p>現在のレベル: {props.user.player_level.player_level_mode_relation.level}</p>
                                <p>経験値: {props.user.player_level.total_exp}exp</p>
                            </div>
                        </div>

                        <div className="bg-white overflow-hidden shadow-sm rounded-lg m-3 p-5"
                             style={{minWidth: 300, width: "45%"}}>
                            <p className="text-lg text-center">デイリーミッション(仮)</p>
                            <div className="py-5">
                                <p>ダイヤを5個みつける</p>
                                <LinearProgressWithLabel value={40}/>
                                <p>太陽で200ブロック採掘する</p>
                                <LinearProgressWithLabel value={95}/>
                                <p>フリーマーケットで買い物をする</p>
                                <LinearProgressWithLabel value={0}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

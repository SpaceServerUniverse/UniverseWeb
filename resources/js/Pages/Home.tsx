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
                        <div
                            className="overflow-hidden rounded-lg m-3 p-2"
                            style={{
                                minWidth: 300,
                                width: "30%",
                                background: "rgba(255, 255, 255, 0.95)",
                                backdropFilter: "blur(10px)",
                                boxShadow: "0 8px 32px rgba(31, 38, 135, 0.15)",
                                border: "1px solid rgba(255, 255, 255, 0.18)"
                            }}
                        >
                            <p className="text-lg text-center font-bold">所持金</p>
                            <div className="py-5 text-center text-2xl font-semibold text-purple-600">
                                {props.user.money.money}star #{props.money_rank}位
                            </div>
                        </div>
                        <div
                            className="overflow-hidden rounded-lg m-3 p-2"
                            style={{
                                minWidth: 300,
                                width: "30%",
                                background: "rgba(255, 255, 255, 0.95)",
                                backdropFilter: "blur(10px)",
                                boxShadow: "0 8px 32px rgba(31, 38, 135, 0.15)",
                                border: "1px solid rgba(255, 255, 255, 0.18)"
                            }}
                        >
                            <p className="text-lg text-center font-bold">レベル</p>
                            <div className="my-5">
                                <div className="text-center text-2xl font-semibold text-blue-600">
                                    {props.user.player_level.player_level_mode_relation.level}Lv #{props.level_rank}位
                                </div>
                                <div className="text-sm text-center text-gray-600">
                                    {props.user.player_level.total_exp}exp
                                </div>
                            </div>
                        </div>
                        <div
                            className="overflow-hidden rounded-lg m-3 p-2"
                            style={{
                                minWidth: 300,
                                width: "30%",
                                background: "rgba(255, 255, 255, 0.95)",
                                backdropFilter: "blur(10px)",
                                boxShadow: "0 8px 32px rgba(31, 38, 135, 0.15)",
                                border: "1px solid rgba(255, 255, 255, 0.18)"
                            }}
                        >
                            <p className="text-lg text-center font-bold">なんか</p>
                            <div className="py-5 text-center text-2xl font-semibold text-pink-600">
                                <p>test #1000位</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-between">
                        <div
                            className="overflow-hidden rounded-lg m-3 p-5"
                            style={{
                                minWidth: 300,
                                width: "45%",
                                background: "rgba(255, 255, 255, 0.95)",
                                backdropFilter: "blur(10px)",
                                boxShadow: "0 8px 32px rgba(31, 38, 135, 0.15)",
                                border: "1px solid rgba(255, 255, 255, 0.18)"
                            }}
                        >
                            <p className="text-lg text-center font-bold mb-3">ステータス</p>
                            <div className="py-5 text-center">
                                <p className="mb-2">現在の所持金: {props.user.money.money}star</p>
                                <p className="mb-2">現在のレベル: {props.user.player_level.player_level_mode_relation.level}</p>
                                <p>経験値: {props.user.player_level.total_exp}exp</p>
                            </div>
                        </div>

                        <div
                            className="overflow-hidden rounded-lg m-3 p-5"
                            style={{
                                minWidth: 300,
                                width: "45%",
                                background: "rgba(255, 255, 255, 0.95)",
                                backdropFilter: "blur(10px)",
                                boxShadow: "0 8px 32px rgba(31, 38, 135, 0.15)",
                                border: "1px solid rgba(255, 255, 255, 0.18)"
                            }}
                        >
                            <p className="text-lg text-center font-bold mb-3">デイリーミッション(仮)</p>
                            <div className="py-5">
                                <p className="mb-2">ダイヤを5個みつける</p>
                                <LinearProgressWithLabel value={40}/>
                                <p className="mb-2 mt-3">太陽で200ブロック採掘する</p>
                                <LinearProgressWithLabel value={95}/>
                                <p className="mb-2 mt-3">フリーマーケットで買い物をする</p>
                                <LinearProgressWithLabel value={0}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

import Authenticated from "@/Layouts/Authenticated";
import {Head} from "@inertiajs/inertia-react";
import React from "react";
import {Divider} from "@mui/material";

export default function Show(props: any) {
    return (
        <Authenticated
            auth={props.auth}
            flash={props.flash}
        >
            <Head title="プロフィール - UniverseWeb"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {(() => {
                        if (props.user == null) {
                            return (
                                <>
                                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                        <div className="p-6 bg-white border-b border-gray-200 text-center">
                                            <p>{props.name}は存在しないプレイヤー名です。</p>
                                        </div>
                                    </div>
                                </>
                            );
                        } else {
                            return (<>

                                    <div className="md:flex md:justify-center">
                                        <div className="mb-4 mx-5">
                                            <div className="flex justify-center md:block">
                                                <img src={"https://crafatar.com/avatars/" + props.user.uuid}
                                                     alt="skin head"
                                                     style={{width: "50px"}}/>
                                            </div>
                                        </div>
                                        <div className="mt-1">
                                            <h3 className="text-3xl text-center">{props.user.name}</h3>
                                        </div>
                                    </div>

                                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg m-3">
                                        <div className="p-6 bg-white border-b border-gray-200 text-center">
                                            <p className="text-lg text-center">自己紹介</p>
                                            <p>よろしくお願いします。</p>
                                            <p>レベルランキング１位を目指しています。</p>
                                        </div>
                                    </div>

                                    <div className="hidden md:block md:my-7">
                                        <Divider></Divider>
                                    </div>

                                    <div className="flex flex-wrap justify-center md:justify-around md:mt-5">
                                        <div>
                                            <h4 className="text-center text-xl">権限</h4>
                                            <div className="bg-white overflow-hidden shadow-sm rounded-lg m-3 p-2">
                                                <div className="bg-white overflow-hidden shadow-sm rounded-lg m-3 p-2"
                                                     style={{minWidth: 300, width: "30%"}}>
                                                    <p className="text-lg text-center">役職</p>
                                                    <div className="py-5 text-center text-2xl">
                                                        {(() => {
                                                                if (props.user.user_position == null) {
                                                                    return "プレイヤー"
                                                                }
                                                                return props.user.user_position.position.name;
                                                            }
                                                        )()}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-center text-xl">カウンター</h4>
                                            <div className="bg-white overflow-hidden shadow-sm rounded-lg m-3 p-2">
                                                <div className="bg-white overflow-hidden shadow-sm rounded-lg m-3 p-2"
                                                     style={{minWidth: 300, width: "30%"}}>
                                                    <p className="text-lg text-center">ブロック破壊数</p>
                                                    <div className="py-5 text-center text-2xl">
                                                        1個
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-center text-xl">ランキング</h4>
                                            <div className="bg-white overflow-hidden shadow-sm rounded-lg m-3 p-2">
                                                <div className="bg-white overflow-hidden shadow-sm rounded-lg m-3 p-2"
                                                     style={{minWidth: 300, width: "30%"}}>
                                                    <p className="text-lg text-center">所持金</p>
                                                    <div className="py-5 text-center text-2xl">
                                                        {(() => {
                                                                if (props.user.money == null) {
                                                                    return 0;
                                                                }
                                                                return props.user.money.money;
                                                            }
                                                        )()}
                                                        Star #{props.money_rank}位
                                                    </div>
                                                </div>
                                                <div className="bg-white overflow-hidden shadow-sm rounded-lg m-3 p-2"
                                                     style={{minWidth: 300, width: "30%"}}>
                                                    <p className="text-lg text-center">レベル</p>
                                                    <div className="my-5">
                                                        <div className="text-center text-2xl">
                                                            {(() => {
                                                                    if (props.user.player_level == null) {
                                                                        return 1;
                                                                    }
                                                                    return props.user.player_level.player_level_mode_relation.level;
                                                                }
                                                            )()}Lv #{props.level_rank}位
                                                        </div>
                                                        <div className="text-sm text-center">
                                                            {(() => {
                                                                    if (props.user.player_level == null) {
                                                                        return 0;
                                                                    }
                                                                    return props.user.player_level.total_exp;
                                                                }
                                                            )()}exp
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
                                        </div>
                                    </div>
                                </>
                            );
                        }
                    })()}
                </div>
            </div>
        </Authenticated>
    )
        ;
}

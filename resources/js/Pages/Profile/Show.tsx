import Authenticated from "@/Layouts/Authenticated";
import {Head} from "@inertiajs/inertia-react";
import React from "react";
import {Divider} from "@mui/material";
import DisplayStatus from "@/Components/DisplayStatus";
import dayjs from "dayjs";

export default function Show(props: any) {
    const introduction = props.user.profile === null ? "設定されていません" : props.user.profile.introduction;
    const last_login_date = dayjs(props.user.updated_at).format('YYYY年MM月DD日 HH:mm:ss');
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

                                    <div className="md:flex md:justify-center mx-3 px-2">
                                        <div className="md:mb-4 md:mx-5">
                                            <div className="flex justify-center md:block">
                                                <img src={"https://mc-heads.net/avatar/" + props.user.uuid}
                                                     alt="skin head"
                                                     style={{width: "50px"}}/>
                                            </div>
                                        </div>
                                        <div className="mt-1">
                                            <h3 className="text-3xl text-center">{props.user.name}</h3>
                                        </div>
                                    </div>

                                    <div className="bg-gray-100 overflow-hidden shadow-sm rounded-lg m-3 p-2">
                                        <div
                                            className="bg-white overflow-hidden shadow-sm rounded-lg m-3 p-2 w-full">
                                            <p className="text-center mb-3">自己紹介</p>
                                            <p className="text-center">{introduction}</p>
                                        </div>
                                        <div className="flex flex-wrap justify-center md:justify-between md:mt-5">
                                            <div>
                                                <div
                                                    className="bg-white overflow-hidden shadow-sm rounded-lg m-3 p-2"
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
                                            <div>
                                                <div
                                                    className="bg-white overflow-hidden shadow-sm rounded-lg m-3 p-2"
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
                                            </div>
                                            <div>
                                                <div
                                                    className="bg-white overflow-hidden shadow-sm rounded-lg m-3 p-2"
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
                                            </div>
                                        </div>
                                        <Divider></Divider>
                                        <div className="mt-5">
                                            <p className="text-lg text-center">カウンター</p>
                                            <div className="flex flex-wrap justify-center md:justify-between mt-5">
                                                <div className="mt-5">
                                                    <h4 className="text-center text-xl">戦闘</h4>
                                                    <div
                                                        className="">
                                                        {(() => {
                                                            if (props.user.count != null && props.user.count.kill_death_count != null) {
                                                                return (
                                                                    <>
                                                                        <DisplayStatus title="プレイヤーキル数"
                                                                                       counter={props.user.count.kill_death_count.player_kill + "人"}/>
                                                                        <DisplayStatus title="mobキル数"
                                                                                       counter={props.user.count.kill_death_count.mob_kill + "体"}/>
                                                                        <DisplayStatus title="エンドラキル数"
                                                                                       counter={props.user.count.kill_death_count.ender_dragon_kill + "匹"}/>
                                                                        <DisplayStatus title="ウィザーキル数"
                                                                                       counter={props.user.count.kill_death_count.wither_kill + "匹"}/>
                                                                        <DisplayStatus title="デス数"
                                                                                       counter={props.user.count.kill_death_count.death + "回"}/>
                                                                    </>
                                                                );
                                                            } else {
                                                                return (
                                                                    <>
                                                                        <DisplayStatus title="エラー"
                                                                                       counter="存在しません。"/>
                                                                    </>
                                                                )
                                                            }
                                                        })()}
                                                    </div>
                                                </div>

                                                <div className="mt-5">
                                                    <h4 className="text-center text-xl">生活</h4>
                                                    <div
                                                        className="">
                                                        {(() => {
                                                            if (props.user.count != null && props.user.count.life_count != null) {
                                                                return (
                                                                    <>
                                                                        <DisplayStatus title="釣り数"
                                                                                       counter={props.user.count.life_count.fishing + "回"}/>
                                                                        <DisplayStatus title="ブロック破壊数"
                                                                                       counter={props.user.count.life_count.block_break + "回"}/>
                                                                        <DisplayStatus title="ブロック設置数"
                                                                                       counter={props.user.count.life_count.block_place + "回"}/>
                                                                        <DisplayStatus title="花設置数"
                                                                                       counter={props.user.count.life_count.flower_place + "束"}/>
                                                                        <DisplayStatus title="木材破壊数"
                                                                                       counter={props.user.count.life_count.wood_break + "個"}/>
                                                                    </>
                                                                );
                                                            } else {
                                                                return (
                                                                    <>
                                                                        <DisplayStatus title="エラー"
                                                                                       counter="存在しません。"/>
                                                                    </>
                                                                )
                                                            }
                                                        })()}
                                                    </div>
                                                </div>

                                                <div className="mt-5">
                                                    <h4 className="text-center text-xl">鉱石破壊数</h4>
                                                    <div
                                                        className="">
                                                        {(() => {
                                                            if (props.user.count != null && props.user.count.ore_count != null) {
                                                                return (
                                                                    <>
                                                                        <DisplayStatus title="石炭"
                                                                                       counter={props.user.count.ore_count.coal_ore + "個"}/>
                                                                        <DisplayStatus title="鉄"
                                                                                       counter={props.user.count.ore_count.iron_ore + "個"}/>
                                                                        <DisplayStatus title="金"
                                                                                       counter={props.user.count.ore_count.gold_ore + "個"}/>
                                                                        <DisplayStatus title="ラピスラズリ"
                                                                                       counter={props.user.count.ore_count.lapis_ore + "個"}/>
                                                                        <DisplayStatus title="レッドストーン"
                                                                                       counter={props.user.count.ore_count.redstone_ore + "個"}/>
                                                                        <DisplayStatus title="エメラルド"
                                                                                       counter={props.user.count.ore_count.emerald_ore + "個"}/>
                                                                        <DisplayStatus title="ダイヤモンド"
                                                                                       counter={props.user.count.ore_count.diamond_ore + "個"}/>
                                                                        <DisplayStatus title="銅"
                                                                                       counter={props.user.count.ore_count.copper_ore + "個"}/>
                                                                    </>
                                                                );
                                                            } else {
                                                                return (
                                                                    <>
                                                                        <DisplayStatus title="エラー"
                                                                                       counter="存在しません。"/>
                                                                    </>
                                                                )
                                                            }
                                                        })()}
                                                    </div>
                                                </div>

                                                <div className="mt-5">
                                                    <h4 className="text-center text-xl">ログイン関連</h4>
                                                    <div
                                                        className="">
                                                        {(() => {
                                                            if (props.user.count != null && props.user.count.player_count != null) {
                                                                return (
                                                                    <>
                                                                        <DisplayStatus title="ログイン日数"
                                                                                       counter={props.user.count.player_count.login + "回"}/>
                                                                        <DisplayStatus title="連続ログイン日数"
                                                                                       counter={props.user.count.player_count.consecutive_login + "回"}/>
                                                                        {(() => {
                                                                            if (props.auth.user.id === props.user.id || (props.user.profile != null && props.user.profile.show_last_login)) {
                                                                                return (
                                                                                    <DisplayStatus
                                                                                        title="最終ログイン日時"
                                                                                        counter={last_login_date}/>
                                                                                );
                                                                            }
                                                                            return <DisplayStatus
                                                                                title="最終ログイン日時"
                                                                                counter="非表示"/>
                                                                        })()}
                                                                    </>
                                                                );
                                                            } else {
                                                                return (
                                                                    <>
                                                                        <DisplayStatus title="エラー"
                                                                                       counter="存在しません。"/>
                                                                    </>
                                                                )
                                                            }
                                                        })()}
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

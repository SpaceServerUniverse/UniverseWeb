import React, { useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";

export default function Home(props: any) {
    return (
        <Authenticated
            auth={props.auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="ホーム" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <h3>{props.user.name}のステータス</h3>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">

                            <p>現在の所持金: {props.user.money.money}</p>
                            <p>現在のレベル: {props.user.player_level.player_level_mode_relation.level}</p>
                            <p>経験値: {props.user.player_level.total_exp}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

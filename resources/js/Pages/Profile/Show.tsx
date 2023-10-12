import Authenticated from "@/Layouts/Authenticated";
import {Head} from "@inertiajs/inertia-react";
import React from "react";

export default function Show(props: any) {
    return (
        <Authenticated
            auth={props.auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200 text-center">
                            <div className="mb-4">
                                <div className="flex justify-center">
                                    <img src={"https://crafatar.com/avatars/" + props.user.uuid} alt="skin head"
                                         style={{width: "100px"}}/>
                                </div>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-3xl">{props.user.name}</h3>
                            </div>
                            <p>現在の所持金:
                                {(() => {
                                        if (props.user.money == null) {
                                            return 0;
                                        }
                                        return props.user.money.money;
                                    }
                                )()}
                            </p>
                            <p>現在のレベル:
                                {(() => {
                                        if (props.user.player_level == null) {
                                            return 1;
                                        }
                                        return props.user.player_level.player_level_mode_relation.level;
                                    }
                                )()}
                            </p>
                            <p>経験値:
                                {(() => {
                                        if (props.user.player_level == null) {
                                            return 0;
                                        }
                                        return props.user.player_level.total_exp;
                                    }
                                )()}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
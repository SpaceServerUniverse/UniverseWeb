import React from "react";
import {Head} from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import RankingPlayerCard from "@/Components/RankingPlayerCard";
import LifeCountRankingPlayerCard from "@/Components/LifeCountRankingPlayerCard";

export default function Show(props: any) {

    let ranking = (<></>);

    if(props.rank_name === "お金") {
        ranking = props.ranking.map((value: any, index: number) => {
            return <RankingPlayerCard key={index} user={value.user} rank={index + 1}
                                      val={value.money + "star"}></RankingPlayerCard>
        });
    }

    if(props.rank_name === "ノーマルレベル") {
        ranking = props.ranking.map((value: any, index: number) => {
            return <RankingPlayerCard key={index}  user={value.user} rank={index + 1}
                                      val={"Lv."+value.level}></RankingPlayerCard>
        });
    }


    if(props.rank_name === "ブロック採掘数") {
        ranking = props.ranking.map((value: any, index: number) => {
            console.log(value);
            return <LifeCountRankingPlayerCard
                key={value.id}
                uuid={value.uuid}
                username={value.name}
                rank={index + 1}
                val={`${value.block_break}回`}
            />
        });
    }

    return (
        <Authenticated
            auth={props.auth}
            flash={props.flash}
        >
            <Head title={"ランキング - " + props.rank_name + " - UniverseWeb"}/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 pb-5">
                    <div className="glass-card overflow-hidden rounded-lg py-5">
                        <h2 className="section-title text-2xl text-center mb-5">{props.rank_name}ランキング</h2>
                        <div className="flex justify-center">
                            <div>
                                {ranking}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";

export default function Index(props: any) {
    return (
        <Authenticated
            auth={props.auth}
            flash={props.flash}
        >
            <Head title="ランキング - UniverseWeb" />

            <div className="py-12">

            </div>
        </Authenticated>
    );
}

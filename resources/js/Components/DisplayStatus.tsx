import React from "react";

interface Props {
    title: any,
    counter: any
}
export default function DisplayStatus({title, counter}: Props) {

    return(
        <div
            className="glass-card overflow-hidden rounded-lg m-3 p-2"
            style={{minWidth: 300, width: "30%"}}
        >
            <p className="text-lg text-center">{title}</p>
            <div className="py-5 text-center text-2xl">
                {counter}
            </div>
        </div>
    );

}

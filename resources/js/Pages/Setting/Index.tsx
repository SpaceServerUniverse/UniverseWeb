import {Head, useForm} from "@inertiajs/inertia-react";
import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import {Button, FormControl, FormHelperText, FormLabel} from "@mui/material";
import Textarea from '@mui/joy/Textarea';

export default function Index(props: any) {
    const {data, setData, patch, processing, errors} = useForm({
        introduction: ""
    })

    function submit(event: any) {
        event.preventDefault();
        patch(route('auth.profile.update')
        )
    }

    const error = Object.values(props.errors).map((value: any, index: any) => function () {
        return (<p key={index}>{value}</p>)
    }())

    return (
        <Authenticated
            auth={props.auth}
            flash={props.flash}
        >
            <Head title="設定 - UniverseWeb"/>

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 pb-5">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg py-5">
                    <h2 className="text-3xl text-center mb-5">設定</h2>
                    <h3 className="text-center mb-3">プロフィール編集</h3>

                    <div className="sm:px-0 lg:px-8 w-full text-center">
                        <form onSubmit={submit}>
                            <div className="text-sm text-red-500">
                                {error}
                            </div>
                            <FormControl sx={{width: "100%"}}>
                                <FormLabel sx={{textAlign: "left"}}>自己紹介</FormLabel>
                                <Textarea placeholder="迷ったら自分の好きなことを伝えてみよう！" minRows={4}
                                          required={true}
                                          slotProps={{textarea: {maxLength: 400}}}
                                          onChange={e => setData('introduction', e.target.value)}
                                          defaultValue={props.profile.introduction}
                                />
                                <FormHelperText sx={{textAlign: "right"}}>400文字以内</FormHelperText>
                            </FormControl>
                            <Button type="submit" variant="contained">保存</Button>
                        </form>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

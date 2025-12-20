import {Head, useForm} from "@inertiajs/inertia-react";
import React, {useState} from "react";
import Authenticated from "@/Layouts/Authenticated";
import {Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Switch} from "@mui/material";
import Textarea from '@mui/joy/Textarea';
import axios from "axios";

export default function Index(props: any) {
    const {data, setData, patch, processing, errors} = useForm({
        introduction: ""
    })

    const [lastLoginOption, setLastLoginOption] = useState(Boolean(props.profile.show_last_login));

    function submit(event: any) {
        event.preventDefault();
        patch(route('auth.profile.update')
        )
    }

    const handleLastLoginOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastLoginOption(event.target.checked);
        axios.post(route("auth.ajax.setting.change-show-last-login"), {
            "show_last_login": event.target.checked
        })
            .then(function (response) {
            })
            .catch(function (error) {
                console.log(error)
            });

    };

    const error = Object.values(props.errors).map((value: any, index: any) => function () {
        return (<p key={index}>{value}</p>)
    }())

    return (
        <Authenticated
            auth={props.auth}
            flash={props.flash}
        >
            <Head title="設定 - UniverseWeb"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 pb-5">
                    <div className="glass-card overflow-hidden rounded-lg py-5 px-6">
                        <h2 className="section-title text-3xl text-center mb-5">設定</h2>
                        <h3 className="text-center mb-3 font-semibold text-gray-700">プロフィール編集</h3>

                        <div className="sm:px-0 lg:px-8 w-full text-center">
                            <form onSubmit={submit}>
                                <div className="text-sm text-red-500 mb-3">
                                    {error}
                                </div>
                                <FormControl sx={{width: "100%"}}>
                                    <FormLabel sx={{textAlign: "left", fontWeight: 600}}>自己紹介</FormLabel>
                                    <Textarea placeholder="迷ったら自分の好きなことを伝えてみよう！" minRows={4}
                                              required={true}
                                              slotProps={{textarea: {maxLength: 100}}}
                                              onChange={e => setData('introduction', e.target.value)}
                                              defaultValue={props.profile.introduction}
                                    />
                                    <FormHelperText sx={{textAlign: "right"}}>400文字以内</FormHelperText>
                                </FormControl>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{
                                        mt: 2,
                                        background: "linear-gradient(135deg, rgba(255, 94, 126, 0.85), rgba(60, 80, 255, 0.75))",
                                        '&:hover': {
                                            background: "linear-gradient(135deg, rgba(255, 94, 126, 1), rgba(60, 80, 255, 0.9))",
                                        }
                                    }}
                                >
                                    保存
                                </Button>
                            </form>
                        </div>

                        <div className="sm:px-0 lg:px-8 w-full mt-8">
                            <p className="text-center mt-10 mb-4 font-semibold text-gray-700">その他設定</p>
                            <FormControlLabel
                                control={<Switch checked={lastLoginOption} onChange={handleLastLoginOptionChange}/>}
                                label="最終ログイン日時表示設定"/>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

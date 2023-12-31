import React, {useEffect} from "react";
import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import {Head, useForm} from "@inertiajs/inertia-react";

interface Props {
    status: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: Props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData(
            event.target.name as "name" | "password" | "remember",
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <Guest>
            <Head title="ログイン - UniverseWeb" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div className="pt-3">
                    <Label forInput="name" value="プレイヤー名(BEの場合は*ユーザー名)" />

                    <Input
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password" value="パスワード" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            value={data.remember}
                            handleChange={onHandleChange}
                        />

                        <span className="ml-2 text-sm text-gray-600">
                            ログイン情報を記憶する
                        </span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Button
                        className="ml-4 bg-gray-900"
                        processing={processing}
                    >
                        ログイン
                    </Button>
                </div>
            </form>
            <div className="mt-5 text-gray-600 text-sm">
                <h3 className="text-lg">※注意</h3>
                <p>Minecraftサーバー内でパスワードを登録してください。</p>
                <p>パスワードは何度でも変更することができます。</p>
                <p>パスワードはハッシュ化され、安全に保存されるので第三者に閲覧されることはありません。</p>
                <p>/password [パスワード]</p>
            </div>
        </Guest>
    );
}

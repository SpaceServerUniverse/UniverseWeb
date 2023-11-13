<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProfileRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array {
        return [
            "introduction" => ["required", "max:400"]
        ];
    }

    public function messages() {
        return [
            "introduction.required" => "自己紹介は必須です。",
            "introduction.max" => "自己紹介は400文字までです。"
        ];
    }
}

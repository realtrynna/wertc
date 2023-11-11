export interface ERROR {
    result: boolean;
    code: number;
    message: string;
}

export interface ALREADY_EXISTS_EMAIL extends ERROR {
    result: false;
    code: 409;
    message: "입력한 이메일은 이미 가입된 이메일 주소입니다.";
}
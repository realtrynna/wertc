export interface ERROR {
    result: boolean;
    code: number;
    message: string;
}

export interface ALREADY_EXISTS_EMAIL extends ERROR {
    result: false;
    code: 409;
    message: "입력한 이메일은 이미 가입된 이메일 주소에요.";
}

export interface NO_EXISTS_EMAIL extends ERROR {
    result: false;
    code: 404;
    message: "입력한 이메일로 가입된 사용자는 존재하지 않아요.";
}

export interface MISMATCH_PASSWORD extends ERROR {
    result: false;
    code: 401;
    message: "입력한 비밀번호가 가입 시 입력한 비밀번호와 일치하지 않아요";
}

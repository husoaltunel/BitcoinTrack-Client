class accessToken {
    token : string;
    expiration : string;
}

export class LoginInfoModel {
    username: string;
    accessToken: accessToken;
    constructor() {
        this.accessToken = new accessToken()
    }
}


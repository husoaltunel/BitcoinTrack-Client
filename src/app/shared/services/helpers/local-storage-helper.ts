import { LoginInfoModel } from "../../models/loginInfo.model";



export function setUserStateToLocalStorage(loginInfo: LoginInfoModel) {
    localStorage.setItem("user", JSON.stringify(loginInfo));
    setLoginStateToLocalStorage(true)
}
export function setLoginStateToLocalStorage(state: boolean) {
    localStorage.setItem("loggedIn", JSON.stringify(state));
}
export function getLoginStateFromLocalStorage(): boolean{
    return JSON.parse(localStorage.getItem("loggedIn") || "false")
}
export function getUserStateFromLocalStorage() : LoginInfoModel {
    return JSON.parse(localStorage.getItem("user") || JSON.stringify(new LoginInfoModel()));
}
export function getCurrentUsernameFromLocalStorage() : string {
   return getUserStateFromLocalStorage().username;
}
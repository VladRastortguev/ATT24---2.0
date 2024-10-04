import $api from "../http/index.ts";
import {AxiosResponse} from 'axios';
import { AuthResponce } from "../models/response/AuthResponse";
// import { itilNewtaskModel } from "../models/itil/itilNewTaskModel";
// import { commentModel } from "../models/itil/itilCommentModel";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponce>> {
        return $api.post<AuthResponce>('/login', {email, password})
    }

    static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponce>> {
        return $api.post<AuthResponce>('/registration', {email, password})
    }

    static async logout(): Promise<void> {
        return $api.post('/logout')
    }   

    static async setNewPassword(email: string, password: string): Promise<void> {
        return $api.post('/resetpassword', {email, password})
    }

    // static async setNewTask(obj: object, email: string): Promise<AxiosResponse<itilNewtaskModel>> {
    //     return $api.post<itilNewtaskModel>(`/settask/${email}`, obj)
    // }

    // static async setNewComment(obj: object, uid: string, tasktype: string): Promise<AxiosResponse<commentModel>> {
    //     return $api.post<commentModel>(`/setcomment/${uid}/${tasktype}`, obj)
    // }
}
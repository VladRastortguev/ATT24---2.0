import $api from "../http/index.ts";
import {AxiosResponse} from 'axios';
import { AuthResponce } from "../models/response/AuthResponse";
import { IUser } from "../models/IUser";
import { ItilUser } from "../models/Itil/ItilUser";
import { ItilCompany } from "../models/Itil/ItilCompany.ts";
import { ItilEmail } from "../models/Itil/ItilEmail.ts";
import { oneItilUser } from "../models/Itil/userModels/oneUserModels.ts";
// import { commentModel } from "../models/itil/itilCommentModel";
// import { OneTaskInterface } from "../models/itil/itilOneTaskInterface";

export default class UserService {
    static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>('/users')
    }

    static async getItilUser(): Promise<AxiosResponse<ItilUser[]>>{
        return $api.get<ItilUser[]>('/itiluser')
    }

    static async getCompanyItil(): Promise<AxiosResponse<ItilCompany[]>>{
        return $api.get<ItilCompany[]>(`/onecompany/${localStorage.getItem('UserUID')}`)
    }

    static async getOneItilUser(email: string): Promise<AxiosResponse<oneItilUser[]>>{
        return $api.get<oneItilUser[]>(`/itiloneuser/${email}`)
    }

    // static async getComment(taskUid:String, taskType:String): Promise<AxiosResponse<commentModel[]>> {
    //     return $api.get<commentModel[]>(`/getcomment/${taskUid}/${taskType}`)
    // }

    // static async getOneTask(taskUid:String, taskType:String): Promise<AxiosResponse<OneTaskInterface[]>> {
    //     return $api.get<OneTaskInterface[]>(`/getonetask/${taskUid}/${taskType}`)
    // }

    // static async getAllTask(email:string): Promise<AxiosResponse<OneTaskInterface[]>> {
    //     return $api.get<OneTaskInterface[]>(`/getalltask/${email}`)
    // }

    static async getAllEmail(email:string): Promise<AxiosResponse<ItilEmail[]>> {
        return $api.get<ItilEmail[]>(`/getallemail/${email}`)
    }

    // static async getAA6Users(email:string): Promise<AxiosResponse<itilEmail[]>> {
    //     return $api.get<itilEmail[]>(`/getaa6/${email}`)
    // }
}
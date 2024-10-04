import {AxiosResponse} from 'axios';
import { lastTask } from '../models/Itil/taskModels/lastTask-model';
import $api from '../http/index.ts';
import { oneComment } from '../Component/DetailsTask/Interface/OneComment-interface.ts';
import { commentModel } from '../models/Itil/taskModels/comment-model.ts';
import { setnewtaskmodel } from '../models/Itil/taskModels/setnewtask-model.ts';


export default class TaskService {
    static async lastTask(): Promise<AxiosResponse<lastTask[]>> {
        return $api.get<lastTask[]>(`/lasttask`)
    }

    static async allTask(): Promise<AxiosResponse<lastTask[]>> {
        return $api.get<lastTask[]>(`/alltasks`)
    }

    static async oneComment(uuid: string): Promise<AxiosResponse<oneComment[]>> {
        return $api.get<oneComment[]>(`/comment/${uuid}`)
    }

    static async setComment(obj: object, uuid: string): Promise<AxiosResponse<commentModel[]>> {
        return $api.post<commentModel[]>(`/setcomment/${uuid}`, obj)
    }

    static async setNewTask(obj: object, taskarrow: string): Promise<AxiosResponse<setnewtaskmodel[]>> {
        return $api.post<setnewtaskmodel[]>(`/tasks/${taskarrow}`, obj)
    }
}
import { lastTask } from "../../../models/Itil/taskModels/lastTask-model"

export interface lastTaskInterface {
    lastTaskInterfaceObj: {
        changeDetailsShow: ((newState: boolean) => void) | null
        changeDetailsObj: ((newState: lastTask) => void) | null
        checkRewiew: boolean
    }
}
import { FunctionInterface } from "../../Interface/FunctionInterface"

export interface taskType {
    taskTypeObj: {
        changeDropTaskType: ((newState: boolean) => void) | null
        changeSelectTaskType: ((newState: string) => void) | null
        dropTaskType: boolean
        selectTaskType: string

        interfaceObj: FunctionInterface | null
    }
}
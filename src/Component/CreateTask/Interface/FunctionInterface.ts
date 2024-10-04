export interface FunctionInterface {
    interfaceObj: {
        changeDropTaskType: ((newState: boolean) => void) | null
        changeDropTask: ((newState: boolean) => void) | null
        changeDropPriorityDescr: ((newState: boolean) => void) | null
        
        changeSelectTaskType: ((newState: string) => void) | null
        changeSelectTask: ((newState: string) => void) | null
        chahgePriorityDescr: ((newState: string) => void) | null

        changeFullPriorityDescr: ((newState: string) => void) | null

        dropTaskType: boolean
        dropTask: boolean
        dropPriorityDescr: boolean

        selectValue: string
        selectTaskType: string
        priorityDescr: string
        priority: string        
    }
}
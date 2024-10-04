export interface taskArrowInterface {
    taskArrowObj: {
        changeDropDown: ((newState: boolean) => void) | null
        changeSelectValue: ((newState: string) => void) | null
        dropDown: boolean
        selectValue: string
    }
}
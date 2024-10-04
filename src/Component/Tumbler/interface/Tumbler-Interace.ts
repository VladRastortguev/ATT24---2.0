export interface tumblerInterface {
    taskViewInterface: {
        changeShowTaskView: ((newState: string) => void) | null
        taskView: string
    }
}
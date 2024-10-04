export interface task1cInterface {
    task1cObj: {
        taskName: string;
        changeTaskName: ((newState: string) => void) | null;

        taskService: string;
        changeTaskService: ((newState: string) => void) | null;        

        baseChange: string;
        changeBaseChange: ((newState: string) => void) | null;

        taskPriority: string;
        changeTaskPriority: ((newState: string) => void) | null;

        priorityDescr: string;
        changePriorityDescr: ((newState: string) => void) | null;

        taskUrgency: string;
        changeTaskUrguncy: ((newState: string) => void) | null;

        urgencyDescr: string;
        changeUrgencyDescr: ((newState: string) => void) | null;

        detailsTask: string;
        changeDetailsTask: ((newState: string) => void) | null;
    }
} 
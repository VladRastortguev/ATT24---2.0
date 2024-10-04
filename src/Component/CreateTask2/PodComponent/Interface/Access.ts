export interface AccessInterface {
    AccessObj: {
        taskName: string;
        changeAccessTaskName: ((newState: string) => void) | null;
        taskService: string;
        changeAccessTaskService: ((newState: string) => void) | null;
        accessUser: string;
        changeAccessUser: ((newState: string) => void) | null;
        subdivisionUser: string;
        changeSubdivisionUser: ((newState: string) => void) | null;
        userEmail: string;
        changeUserEmail: ((newState: string) => void) | null;
        userArrow: string;
        changeUserArrow: ((newState: string) => void) | null;
        userStatus: string;
        changeUserStatus: ((newState: string) => void) | null;
        detailsAscces: string;
        changeDetailsAscces: ((newState: string) => void) | null;
    }
}
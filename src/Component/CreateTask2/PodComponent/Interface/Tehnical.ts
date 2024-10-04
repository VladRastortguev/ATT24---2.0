export interface TehnicalInterface {
    TeinicalObj: {
        taskName: string;
        changeTaskName: ((newState: string) => void) | null;
        
        taskArrow: string;
        changeTaskArrow: ((newState: string) => void) | null;     
        
        taskService: string;
        changeTaskService: ((newState: string) => void) | null;     

        taskLocation: string;
        changeTaskLocation: ((newState: string) => void) | null;

        mailUser: string;
        changeMailUser: ((newState: string) => void) | null;

        userOrganization: string;
        changeUserOrganization: ((newState: string) => void) | null;

        dateError: string;
        changeDateError: ((newState: string) => void) | null;   
        
        errorCause: string;
        changeErrorCause: ((newState: string) => void) | null;   
    
        errorResponsible: string;
        changeErrorResponsible: ((newState: string) => void) | null; 
        
        accountUser: string;
        changeAccountUser: ((newState: string) => void) | null; 

        accountList: string;
        changeAccountList: ((newState: string) => void) | null;

        accountOrganization: string;
        changeAccountOrganization: ((newState: string) => void) | null;

        tehnicalElement: string;
        changeTehnicalElement: ((newState: string) => void) | null;

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
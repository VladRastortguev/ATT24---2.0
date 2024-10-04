import { lastTask } from "../../../models/Itil/taskModels/lastTask-model";

export interface detailsInterface {
    detailsObj: {
        item: lastTask | undefined
        changeDetailsShow: ((newState: boolean) => void) | null
    }
}
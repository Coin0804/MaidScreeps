import { AreaLeaderMaid } from "../maids/leaders/areaLeaders/abstract";

export abstract class Letter<T extends LetterTypes>{
    from:AreaLeaderMaid;
    type:T;
}

export class TaskLetter extends Letter<"task">{
    constructor(work:TASKTYPES,detail:TaskLetterDetails){
        super();
        this.work = work;
        this.detail = detail;
    }
    work:TASKTYPES;
    detail:TaskLetterDetails;
}
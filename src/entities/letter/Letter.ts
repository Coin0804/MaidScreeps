import { AreaLeaderMaid } from "../maids/leaders/areaLeaders/abstract";

export abstract class Letter{
    constructor(type:LetterTypes){
        this.type = type;
    }
    from:AreaLeaderMaid;
    type:LetterTypes;
}

export class TaskLetter extends Letter{
    constructor(work:TASKTYPES,priority:number,detail:TaskLetterDetails){
        super("task");
        this.work = work;
        this.priority = priority;
        this.detail = detail;
    }
    work:TASKTYPES;
    priority:number;
    detail:TaskLetterDetails;
}
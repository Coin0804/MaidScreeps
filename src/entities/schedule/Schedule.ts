import { ERR_INVALID_PROJECT } from "@/constants";

export default class Schedule{
    constructor(time:number,...projects:Project[]){
        this.presentDate = time;
        for(let p of projects){
            this.addToToday(p);
        }
    }

    addToToday(project:Project){
        if(!project) return ERR_INVALID_PROJECT;
        this.projectToday.push({project:project,done:false});
        return OK;
    }

    addToTomorrow(project:Project){
        if(!project) return ERR_INVALID_PROJECT;
        this.projectTomorrow.push({project:project,done:false});
        return OK;
    }

    presentDate:number;
    projectToday:{project:Project,done:boolean}[] = [];
    projectTomorrow:{project:Project,done:boolean}[] = [];
}
export default class Schedule{
    constructor(time:number,...projects:Project[]){
        this.presentDate = time;
        for(let p of projects){
            this.addToToday(p);
        }
    }

    addToToday(project:Project){
        this.projectToday.push({project:project,done:false});
    }

    addToTomorrow(project:Project){
        this.projectTomorrow.push({project:project,done:false});
    }

    presentDate:number;
    projectToday:{project:Project,done:boolean}[];
    projectTomorrow:{project:Project,done:boolean}[];
}
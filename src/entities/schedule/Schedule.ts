export default class Schedule{
    constructor(time:number){
        this.presentDate = time;
    }

    addToToday(project:Project){
        this.projectToday.push({project:project,done:false});
    }

    presentDate:number;
    private projectToday:{project:Project,done:boolean}[];
    private projectTomorrow:{project:Project,done:boolean}[];
}
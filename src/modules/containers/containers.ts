abstract class AbstractObjectList<T> implements ObjectList<T>{
    constructor(all:T[]){
        this.all = all;
    }
    public all:T[];
}


/**
 * 员工列表工具类
 */
export class StaffList extends AbstractObjectList<Staff>{
    constructor(staffs:Staff[]){
        super(staffs);
        this.dic = _.groupBy(staffs,(s) => {return s.type});
    }

    public getStaffByType(type:AllWorkMaid){
        return this.dic[type] || (this.dic[type] = []);
    }

    private dic:{[type in MaidType]?:Staff[]}={};
}


export class TaskList extends AbstractObjectList<Task>{
    constructor(tasks:Task[] = []){
        super(tasks.sort((a,b)=>b.priority-a.priority));
        this.dic = _.groupBy(tasks,(t) => {return t.taskType});
    }

    public getTasksByType(type:TASKTYPES){
        return this.dic[type] || (this.dic[type] = []);
    }

    public add(task: Task) {
        this.insertByPriority(this.all,task);
        this.insertByPriority(this.dic[task.taskType],task);
    }

    private sortByPriority(list:Task[]){
        return list.sort((a,b)=>b.priority-a.priority);
    }

    private sortAll(){
        this.all = this.sortByPriority(this.all);
        for(let i in this.dic){
            this.dic[i] = this.sortByPriority(this.dic[i]);
        }
    }

    private insertByPriority(list:Task[],task:Task){
        for(let i=0;i<list.length;i++){
            if(list[i].priority < task.priority){
                return list.splice(i,0,task);
            }
        }
        return list.push(task);
        // 目的是节约时间，但不知道会不会真的快，要不然就每次都push再sort得了
    }

    private dic:{[type in TASKTYPES]?:Task[]}={};
}
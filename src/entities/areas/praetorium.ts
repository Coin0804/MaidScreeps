/**
 * 对于这个文件中的类及其作用，你可以在该目录下的index.d.ts找到说明
 */

import { Task } from "../task/Task";

/**
 * 别墅类
 */
export class Praetorium{
    constructor(room:Room){
        this.house = new House(room);
        this.yards = [];
        // TODO
    }
    
    public house:House;
    public yards:Yard[];

}

/**
 * 房子类
 */
export class House{
    constructor(room:Room){
        this.room = room;
        this.areas.studyroom = new Studyroom();
        this.areas.warehouse = new Warehouse();
        this.areas.bedroom = new Bedroom();
        this.areas.garage = new Garage();
        this.areas.kitchen = new Kitchen();
        this.areas.balcony = new Balcony();
        // TODO
    }



    public addTask(task:Task){
        if(!this.tasklist){
            this.tasklist = [task];
        }else{
            this.tasklist.push(task);
        }
        return OK;
    }





    public tasklist:Task[];
    public areas:{
        studyroom:Studyroom,
        warehouse:Warehouse,
        bedroom:Bedroom,
        garage:Garage,
        kitchen:Kitchen,
        balcony:Balcony
    }
    public room:Room;
}

/**
 * 院子类
 */
export class Yard{
    constructor(room:Room){
        this.room = room;
        // TODO
    }

    public room:Room;
}

/**
 * 各个区域的抽象父类，
 */
export abstract class Area{
    abstract leader:LeaderMaid;
    abstract staffList:Staff[];
    abstract taskList:Task[];
}

/**
 * 书房类
 */
export class Studyroom extends Area{
    leader: LeaderMaid;
    staffList: Staff[];
    taskList: Task[];
}


/**
 * 仓库类
 */
export class Warehouse extends Area{
    leader: LeaderMaid;
    staffList: Staff[];
    taskList: Task[];
}

/**
 * 卧室类
 */
export class Bedroom extends Area{
    staffList: Staff[];
    leader: LeaderMaid;
    taskList: Task[];
}

/**
 * 车库类
 */
export class Garage extends Area{
    staffList: Staff[];
    leader: LeaderMaid;
    taskList: Task[];
}


/**
 * 厨房类
 */
export class Kitchen extends Area{
    staffList: Staff[];
    leader: LeaderMaid;
    taskList: Task[];
}

/**
 * 阳台类
 */
export class Balcony extends Area{
    staffList: Staff[];
    leader: LeaderMaid;
    taskList: Task[];
}

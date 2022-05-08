/**
 * 对于这个文件中的类及其作用，你可以在该目录下的index.d.ts找到说明
 */

/**
 * 别墅类
 */
export class Praetorium{
    constructor(room:Room){
        this.house = new House(room);
        this.yards = [];
        // TODO
    }
    
    public leaders:LeaderMaid[] = [];
    public house:House;
    public yards:Yard[];
    public plan:Plan;
}

/**
 * 房子类
 */
export class House{
    constructor(room:Room){
        this.room = room.name;
        this.areas = {
            studyroom:new Studyroom(),
            warehouse:new Warehouse(),
            bedroom:new Bedroom(),
            kitchen:new Kitchen(),
            balcony:new Balcony(),
            garage:new Garage()
        }
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

    public getRoom(){
        return Game.rooms[this.room];
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
    public room:string;
}

/**
 * 院子类
 */
export class Yard{
    constructor(room:Room){
        this.room = room.name;
        // TODO
    }
    public getRoom():Room{
        return Game[this.room];
    }

    public room:string;
}



/**
 * 书房类
 */
export class Studyroom implements Area{
    leader:LeaderMaid;
    staffList:Staff[] = [];
    taskList:Task[] = [];
    tools:{
        labs:Tool<STRUCTURE_LAB>[],
        reactantLabs:Tool<STRUCTURE_LAB>[],
        productLabs:Tool<STRUCTURE_LAB>[]
    };
}


/**
 * 仓库类
 */
export class Warehouse implements Area{
    leader: LeaderMaid;
    staffList: Staff[] = [];
    taskList: Task[] = [];
    tools: {
        all:Tool[],
        storage:Tool<STRUCTURE_STORAGE>,
        terminal:Tool<STRUCTURE_TERMINAL>,
        links:Tool<STRUCTURE_LINK>[],
        containers:Tool<STRUCTURE_CONTAINER>[]
    };
}

/**
 * 卧室类
 */
export class Bedroom implements Area{
    staffList: Staff[] = [];
    leader: LeaderMaid;
    taskList: Task[] = [];
    tools: {
        all:Tool[],
        spawns:Tool<STRUCTURE_SPAWN>[],
        powerSpawn:Tool<STRUCTURE_POWER_SPAWN>,
        extensions:Tool<STRUCTURE_EXTENSION>[],
    };
}

/**
 * 车库类
 */
export class Garage implements Area{
    staffList: Staff[] = [];
    leader: LeaderMaid;
    taskList: Task[] = [];
    tools: {
        all:Tool[],
        normalRoads:Tool<STRUCTURE_ROAD>[],
        swampRoads:Tool<STRUCTURE_ROAD>[],
        containers:Tool<STRUCTURE_CONTAINER>[]
    };
    constructionSites:ConstructionSite[];
    powerMaid:PowerCreep;
}


/**
 * 厨房类
 */
export class Kitchen implements Area{
    staffList: Staff[] = [];
    leader: LeaderMaid;
    taskList: Task[] = [];
    tools: {
        all:Tool[],
        links:Tool<STRUCTURE_LINK>[],
        factory:Tool<STRUCTURE_FACTORY>
    };
}

/**
 * 阳台类
 */
export class Balcony implements Area{
    staffList: Staff[] = [];
    leader: LeaderMaid;
    taskList: Task[] = [];
    tools: {
        all:Tool[],
        towers:Tool<STRUCTURE_TOWER>[],
        observer:Tool<STRUCTURE_OBSERVER>,
        nuker:Tool<STRUCTURE_NUKER>,
        wall:Tool<STRUCTURE_WALL>[],
        ramparts:Tool<STRUCTURE_RAMPART>[]
    }
}

/**
 * 员工列表工具类
 */
class StaffList{
    constructor(staffs:Staff[]){
        
    }
    private dic:{[type:string]:Staff[]}={};
}

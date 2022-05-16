import { StaffList, TaskList } from "@/modules/containers/containers";
import { Letter } from "../letter/Letter";
import { AreaLeaderMaid } from "../maids/leaders/areaLeaders/abstract";
import { Task } from "../plan/Task";
import { Tool } from "../tool/Tool";




/**
 * 别墅类
 */
export class Praetorium{
    constructor(room:Room){
        this.house = new House(room);
        this.yards = [];
        this.level = room.controller.level as ControllerLevels;
        // TODO
    }

    public level:ControllerLevels;
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
 * 各个区域的抽象父类
 */
export abstract class AbstractArea{
    constructor(type: AREAS){
        this.type = type;
    }
    type: AREAS;
    leader: AreaLeaderMaid;
    staffList: StaffList;
    taskList: TaskList;
    letterbox: Letter[] = [];
    tools: { [name: string]: Tool<AnyStructure> | Tool<AnyStructure>[]; };
    
}


/**
 * 书房类
 */
export class Studyroom extends AbstractArea{
    constructor(){
        super("studyroom");
    }
    tools:{
        labs:Tool<StructureLab>[],
        reactantLabs:Tool<StructureLab>[],
        productLabs:Tool<StructureLab>[]
    };
}


/**
 * 仓库类
 */
export class Warehouse extends AbstractArea{
    constructor(){
        super("warehouse");
    }
    tools: {
        all:Tool[],
        storage:Tool<StructureStorage>,
        terminal:Tool<StructureTerminal>,
        links:Tool<StructureLink>[],
        containers:Tool<StructureContainer>[]
    };
}

/**
 * 卧室类
 */
export class Bedroom extends AbstractArea{
    constructor(){
        super("bedroom");
    }
    tools: {
        all:Tool[],
        spawns:Tool<StructureSpawn>[],
        powerSpawn:Tool<StructurePowerSpawn>,
        extensions:Tool<StructureExtension>[],
    };
}

/**
 * 车库类
 */
export class Garage extends AbstractArea{
    constructor(){
        super("garage");
    }
    tools: {
        all:Tool[],
        normalRoads:Tool<StructureRoad>[],
        swampRoads:Tool<StructureRoad>[],
        containers:Tool<StructureContainer>[]
    };
    constructionSites:ConstructionSite[];
    powerMaid:PowerCreep;
}


/**
 * 厨房类
 */
export class Kitchen extends AbstractArea{
    constructor(){
        super("kitchen");
    }
    tools: {
        all:Tool[],
        links:Tool<StructureLink>[],
        factory:Tool<StructureFactory>
    };
}

/**
 * 阳台类
 */
export class Balcony extends AbstractArea{
    constructor(){
        super("balcony");
    }
    tools: {
        all:Tool[],
        towers:Tool<StructureTower>[],
        observer:Tool<StructureObserver>,
        nuker:Tool<StructureNuker>,
        wall:Tool<StructureWall>[],
        ramparts:Tool<StructureRampart>[]
    }
}

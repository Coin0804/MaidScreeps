import { Garage, Praetorium} from "@/entities/areas/praetorium";
import { StaffList } from "@/modules/containers/containers";
import { printDebug, printSay } from "@/modules/utils/logtool";
import WorkMaid from "../../staffs/workmaid";
import { AreaLeaderMaid } from "./abstract";

/**
 * 
 * 
 */
export default class ChocolateMaid extends AreaLeaderMaid{
    constructor(praetorium:Praetorium){
        super(praetorium);
        this.name = `ChocolateMaid_${praetorium.house.room}`;
        this.area = praetorium.house.areas.garage;
    }
    
    public doPerpare(): ReturnCode {
        // TODO:本来应该从记忆中就可以恢复，暂时先使用搜索
        this.area.staffList = new StaffList(this.praetorium.house.getRoom()
        .find(FIND_MY_CREEPS,{filter:(c) => {
            let memory = c.memory.team == "workMaid" ? (c.memory as WorkMaidMemory) : undefined;
            return memory?.workRoom == this.praetorium.house.room 
            && memory?.workArea == this.area.type
        }}).map((c) => {return new WorkMaid(c)}));
        printDebug(`${this.name}:${this.area.staffList.getAll().length}`);
        if(this.area.staffList.getStaffByType("balanced").length == 0){
            // let task = this.praetorium.plan.taskpool.normal.birth(BALENCED,this.area.type);?
            // this.sendLetter(this.praetorium.house.areas.bedroom.leader,new TaskLetter(task))
        }
        /**
         * 接下来需要完成必要任务的装填
         */
        



        // this.area.taskList;
        // TODO
        return OK;
    }

    public openHerEyes(): ReturnCode {
        return OK;
    }

    public say(saying: string): void {
        printSay(this.name,saying,"chololate");
    }

    public area: Garage;
}
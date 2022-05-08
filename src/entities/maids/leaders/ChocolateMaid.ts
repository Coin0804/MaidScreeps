import { Garage, Praetorium } from "@/entities/areas/praetorium";
import { printDebug, printSay } from "@/modules/utils/logtool";

/**
 * 
 * 
 */
export default class ChocolateMaid implements AreaLeaderMaid{
    constructor(praetorium:Praetorium){
        this.praetorium = praetorium;
        praetorium.leaders.push(this);
        this.name = `BlueMaid in ${this.praetorium.house.room}`;
        this.area = praetorium.house.areas.garage;
        this.area.leader = this;
    }
    
    public doPerpare(): ReturnCode {
        // TODO:本来应该从记忆中就可以恢复，暂时先使用搜索
        this.area.staffList = this.praetorium.house.getRoom()
        .find(FIND_MY_CREEPS,{filter:(c) => c.name.match(`${this.praetorium.house.room}_warehouse`)});
        printDebug(`${this.name}:${this.area.staffList.length}`);
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
    public name: string;
    private praetorium:Praetorium;
}
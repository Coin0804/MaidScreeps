import { Garage, Praetorium } from "@/entities/areas/praetorium";
import { printSay } from "@/modules/utils/logtool";

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
        this.area.staffList = [];// TODO:初始化暂时先设为空，不检索任何creep
        this.area.taskList = [];
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
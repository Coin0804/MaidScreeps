import { Balcony, Praetorium } from "@/entities/areas/praetorium";
import { printSay } from "@/modules/utils/logtool";

/**
 * 
 * 
 */
export default class RedMaid implements AreaLeaderMaid{
    constructor(praetorium:Praetorium){
        this.praetorium = praetorium;
        praetorium.leaders.push(this);
        this.name = `BlueMaid in ${this.praetorium.house.room}`;
        praetorium.house.areas.balcony.leader = this;
    }

    public doPerpare(): ReturnCode {
        // TODO
        return OK;
    }

    public openHerEyes(): ReturnCode {
        return OK;
    }

    public say(saying: string): void {
        printSay(this.name,saying,"red");
    }

    public area: Balcony;
    public name: string;
    private praetorium:Praetorium;
}
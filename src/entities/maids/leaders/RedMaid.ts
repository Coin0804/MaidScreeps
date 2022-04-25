import { Praetorium } from "@/entities/areas/praetorium";
import { printSay } from "@/modules/utils/logtool";

/**
 * 
 * 
 */
export default class RedMaid implements LeaderMaid{
    constructor(praetorium:Praetorium){
        this.praetorium = praetorium;
        this.name = `BlueMaid in ${this.praetorium.house.room.name}`;
        praetorium.house.areas.balcony.leader = this;
    }

    public openHerEyes(): ReturnCode {
        return OK;
    }

    public say(saying: string): void {
        printSay(this.name,saying,"red");
    }
    public name: string;
    private praetorium:Praetorium;
}
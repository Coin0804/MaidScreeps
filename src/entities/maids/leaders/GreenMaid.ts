import { Praetorium } from "@/entities/areas/praetorium";
import { printSay } from "@/modules/utils/logtool";

/**
 * 
 * 
 */
export default class GreenMaid implements LeaderMaid{
    constructor(praetorium:Praetorium){
        this.praetorium = praetorium;
        this.name = `BlueMaid in ${this.praetorium.house.room.name}`;
        praetorium.house.areas.kitchen.leader = this;
    }

    public openHerEyes(): ReturnCode {
        return OK;
    }

    public say(saying: string): void {
        printSay(this.name,saying,"lightgreen");
    }
    public name: string;
    private praetorium:Praetorium;
}
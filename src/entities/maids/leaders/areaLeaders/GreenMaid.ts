import { Kitchen, Praetorium } from "@/entities/areas/Praetorium";
import { printSay } from "@/modules/utils/logtool";
import { AreaLeaderMaid } from "./abstract";

/**
 * 
 * 
 */
export default class GreenMaid extends AreaLeaderMaid{
    constructor(praetorium:Praetorium){
        super(praetorium);
        this.name = `GreenMaid_${praetorium.house.room}`;
        this.area = praetorium.house.areas.kitchen;
    }


    public doPerpare(): ReturnCode {
        // TODO
        return OK;
    }

    public openHerEyes(): ReturnCode {
        return OK;
    }

    public say(saying: string): void {
        printSay(this.name,saying,"lightgreen");
    }

    public area: Kitchen;
}
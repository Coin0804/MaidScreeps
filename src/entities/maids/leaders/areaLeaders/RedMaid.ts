import { Balcony, Praetorium } from "@/entities/areas/praetorium";
import { printSay } from "@/modules/utils/logtool";
import { AreaLeaderMaid } from "./abstract";

/**
 * 
 * 
 */
export default class RedMaid extends AreaLeaderMaid{
    constructor(praetorium:Praetorium){
        super(praetorium);
        this.name = `RedMaid_${praetorium.house.room}`;
        this.area = praetorium.house.areas.balcony;
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
}
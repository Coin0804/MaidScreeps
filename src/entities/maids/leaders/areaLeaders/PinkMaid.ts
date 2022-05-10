import { Bedroom, Praetorium } from "@/entities/areas/praetorium";
import { printSay } from "@/modules/utils/logtool";
import { AreaLeaderMaid } from "./abstract";

/**
 * 主人这么想要看光光吗？
 * 那，看吧~❤
 */
export default class PinkMaid extends AreaLeaderMaid{
    constructor(praetorium:Praetorium){
        super(praetorium);
        this.name = `PinkMaid_${praetorium.house.room}`;
        this.area = praetorium.house.areas.bedroom;
    }

    public doPerpare(): ReturnCode {
        // TODO
        return OK;
    }

    public openHerEyes(): ReturnCode {
        return OK;
    }

    public say(saying: string): void {
        printSay(this.name,saying,"pink");
    }

    public area: Bedroom;
}
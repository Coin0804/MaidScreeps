import { Bedroom, Praetorium } from "@/entities/areas/praetorium";
import { printSay } from "@/modules/utils/logtool";

/**
 * 主人这么想要看光光吗？
 * 那，看吧~❤
 */
export default class PinkMaid implements AreaLeaderMaid{
    constructor(praetorium:Praetorium){
        this.praetorium = praetorium;
        praetorium.leaders.push(this);
        this.name = `BlueMaid in ${this.praetorium.house.room}`;
        praetorium.house.areas.bedroom.leader = this;
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
    public name: string;
    private praetorium:Praetorium;
}
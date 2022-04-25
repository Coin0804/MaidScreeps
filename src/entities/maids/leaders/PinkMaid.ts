import { Praetorium } from "@/entities/areas/praetorium";
import { printSay } from "@/modules/utils/logtool";

/**
 * 主人这么想要看光光吗？
 * 那，看吧~❤
 */
export default class PinkMaid implements LeaderMaid{
    constructor(praetorium:Praetorium){
        this.praetorium = praetorium;
        this.name = `BlueMaid in ${this.praetorium.house.room.name}`;
        praetorium.house.areas.bedroom.leader = this;
    }

    public openHerEyes(): ReturnCode {
        return OK;
    }

    public say(saying: string): void {
        printSay(this.name,saying,"pink");
    }
    public name: string;
    private praetorium:Praetorium;
}
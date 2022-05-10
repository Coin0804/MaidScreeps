import { Praetorium, Warehouse } from "@/entities/areas/praetorium";
import { printSay } from "@/modules/utils/logtool";
import { AreaLeaderMaid } from "./abstract";

/**
 * 呜啊！
 * 吓我一跳，你在干什么呀
 * 诶！想要了解我的全部……
 * 呜，当然不可以啦！
 * 诶等————
 */
export default class YellowMaid extends AreaLeaderMaid{
    constructor(praetorium:Praetorium){
        super(praetorium);
        this.name = `YellowMaid_${praetorium.house.room}`;
        this.area = praetorium.house.areas.warehouse;
    }

    public doPerpare(): ReturnCode {

        return OK;
    }

    public openHerEyes(): ReturnCode {
        return OK;
    }

    public say(saying: string): void {
        printSay(this.name,saying,"glod");
    }

    public area:Warehouse;
}
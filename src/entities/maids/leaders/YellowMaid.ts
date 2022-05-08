import { Praetorium, Warehouse } from "@/entities/areas/praetorium";
import { printSay } from "@/modules/utils/logtool";

/**
 * 呜啊！
 * 吓我一跳，你在干什么呀
 * 诶！想要了解我的全部……
 * 呜，当然不可以啦！
 * 诶等————
 */
export default class YellowMaid implements AreaLeaderMaid{
    constructor(praetorium:Praetorium){
        this.praetorium = praetorium;
        praetorium.leaders.push(this);
        this.name = `BlueMaid in ${praetorium.house.room}`;
        this.area = praetorium.house.areas.warehouse;
        this.area.leader = this;
        this.hired();
    }

    public doPerpare(): ReturnCode {

        return OK;
    }

    private hired(){
        
    }

    public openHerEyes(): ReturnCode {
        return OK;
    }

    public say(saying: string): void {
        printSay(this.name,saying,"glod");
    }


    public name: string;
    private praetorium:Praetorium;
    public area:Warehouse;
}
import { Praetorium } from "@/entities/areas/praetorium";
import { printSoftSay } from "@/modules/utils/logtool";

/**
 * 谁啊……
 * 唔，让我再睡5分钟……
 * 你想做什么就做什么吧……
 * zzz
 */
export default class BlueMaid implements LeaderMaid{// TODO:负责实验室合成相关事项，目前没有想法，所以应该是没什么事做的
    constructor(praetorium:Praetorium){
        this.praetorium = praetorium;
        this.name = `BlueMaid in ${praetorium.house.room.name}`;
        praetorium.house.areas.studyroom.leader = this;
        this.say("在叫我吗");
    }

    public openHerEyes(): ReturnCode {
        return OK;
    }
    
    public say(saying: string): void {
        printSoftSay(this.name,saying,"lightblue");
    }

    public name:string;
    private praetorium:Praetorium;

}
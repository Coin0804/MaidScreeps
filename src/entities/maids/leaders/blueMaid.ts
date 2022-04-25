import { Praetorium } from "@/entities/areas/praetorium";
import { printSoftSay } from "@/modules/utils/logtool";

/**
 * 谁啊……
 * 唔，让我再睡5分钟……
 * 你想做什么就做什么吧……
 * zzz
 */
export default class BlueMaid implements LeaderMaid{
    constructor(preatorium:Praetorium){
        this.praetorium = preatorium;
        this.name = `BlueMaid in ${this.praetorium.house.room.name}`;
        this.say("在叫我吗");
    }
    
    public say(saying: string): void {
        printSoftSay(this.name,saying,"lightblue");
    }

    public name:string;
    private praetorium:Praetorium;

}
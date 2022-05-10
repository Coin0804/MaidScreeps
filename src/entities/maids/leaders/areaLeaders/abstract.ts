import { AbstractArea, Praetorium } from "@/entities/areas/Praetorium";// 警告：循环引用
/**
 * 抽象的区域领导女仆
 * 部分的方法有重用
 */
export abstract class AreaLeaderMaid implements LeaderMaid{
    constructor(praetorium:Praetorium){
        this.praetorium = praetorium;
        praetorium.leaders.push(this);
        this.area.leader = this;
    }
    // 从接口实现（没实现）的属性和方法
    name: string;
    abstract say(saying: string): void;
    abstract openHerEyes(): ReturnCode;
    abstract doPerpare(): ReturnCode;
    // 自己的属性和方法
    area:AbstractArea;
    praetorium:Praetorium;

    sendLetter(target:AreaLeaderMaid,letter:Letter):ReturnCode{
        target.area.letterbox.push(letter);
        return OK;
    }
}
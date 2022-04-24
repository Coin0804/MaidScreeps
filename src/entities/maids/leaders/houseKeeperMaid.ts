import { Praetorium } from "@/entities/areas/praetorium";
import { printEmphasize, printLine, printSay, printText, printWhisper } from "@/modules/utils/logtool";
import { BlueMaid } from "./blueMaid";
import MaidHead from "./maidHead";


/**
 * 对我感到好奇？
 * 那也是当然的吧~
 * 但是不能就这么轻易的让主人为所欲为呢。
 * 主人得好好补偿我才行。
 * 很简单，去和女仆长约会吧。
 * 开玩笑~
 */
export default class HouseKeeperMaid implements LeaderMaid{

    constructor(){
        printEmphasize("女仆管家，随时待命！");
        printLine()
        this.say("当然~交给我吧。不会辜负我最心爱❤的女仆长的信任的~");
        this.hire();
    }

    /**
     * 
     */
    private hire(){
        // TODO // 不知道做什么好
    }



    /**
     * 接下来要做什么呢？
     * 去看看小蓝有没有偷懒吧。
     * 小黄应该……嗯，没问题
     * 还是先去捏捏小女仆长的脸蛋吧~
     */
    private openHerEyes(){
        if (!Memory.houseKeeperMaidWorkSheet) {
            
        }
    }

    /**
     * “收到。”
     * 她开心的笑着
     * 开始了工作
     */
    public firstTimeWork(praetoriums:Praetorium[]){
        // for (let praetorium of praetoriums) {
        //     praetorium.house.areas = {
        //         studyroom:{
        //             leader:new BlueMaid(praetorium)
        //         },
        //         warehouse:null,
        //         bedroom:null,
        //         kitchen:null,
        //         balcony:null
        //     }
        // }
    }

    public say(saying: string): void {
        printSay(this.name,saying,"purple");
    }

    public whisper(saying:string){
        printWhisper(this.name,saying,"purple");
    }


    private name = "HouseKeeperMaid";
    private maidHead:MaidHead;
}

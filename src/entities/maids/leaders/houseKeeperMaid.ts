import { Praetorium } from "@/entities/areas/Praetorium";
import { printEmphasize, printLine, printSay, printText, printWhisper } from "@u/logtool";
import BlueMaid from "./areaLeaders/BlueMaid";
import ChocolateMaid from "./areaLeaders/ChocolateMaid";
import GreenMaid from "./areaLeaders/GreenMaid";
import MaidHead from "./MaidHead";
import PinkMaid from "./areaLeaders/PinkMaid";
import RedMaid from "./areaLeaders/RedMaid";
import YellowMaid from "./areaLeaders/YellowMaid";


/**
 * 对我感到好奇？
 * 那也是当然的吧~
 * 但是不能就这么轻易的让主人为所欲为呢。
 * 主人得好好补偿我才行。
 * 很简单，去和女仆长约会吧。
 * 开玩笑~
 */
export default class HouseKeeperMaid implements LeaderMaid{

    constructor(maidHead:MaidHead){
        this.maidHead = maidHead;
        printEmphasize("女仆管家，随时待命！");
        printLine();
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
    public openHerEyes(){

        
        return OK;
    }

    /**
     * 
     */
    public firstTimeWork(praetoriums:Praetorium[]){
        printLine();
        printText("每个别墅都要有足够的人手才行");
        this.praetoriums = praetoriums;
        for(let praetorium of praetoriums) {// 初始化每个别墅的领导女仆
            new BlueMaid(praetorium);
            new YellowMaid(praetorium);
            new PinkMaid(praetorium);
            new GreenMaid(praetorium);
            new RedMaid(praetorium);
            new ChocolateMaid(praetorium);
        }
    }

    public doPerpare(){
        this.say("辛苦了~");
        printText("她向女仆长回复到，然后安排起来工作。");
        for(let praetorium of this.praetoriums){
            for(let leader of praetorium.leaders){
                leader.doPerpare();
            }
        }
        return OK;
    }

    public say(saying: string): void {
        printSay(this.name,saying,"purple");
    }

    public whisper(saying:string){
        printWhisper(this.name,saying,"purple");
    }


    public name = "HouseKeeperMaid";
    private maidHead:MaidHead;
    private praetoriums:Praetorium[];
}

import { Praetorium } from "@/entities/areas/praetorium";
import { printEmphasize, printLine, printSay, printText, printWhisper } from "@/modules/utils/logtool";
import BlueMaid from "./BlueMaid";
import ChocolateMaid from "./ChocolateMaid";
import GreenMaid from "./GreenMaid";
import MaidHead from "./MaidHead";
import PinkMaid from "./PinkMaid";
import RedMaid from "./RedMaid";
import YellowMaid from "./YellowMaid";


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
        
    }

    /**
     * 
     */
    public firstTimeWork(praetoriums:Praetorium[]){
        printLine();
        printText("每个别墅都要有足够的人手才行");
        for(let praetorium of praetoriums) {// 初始化每个别墅的领导女仆
            praetorium.house.areas = {
                studyroom:{
                    leader:new BlueMaid(praetorium)
                },
                warehouse:{
                    leader:new YellowMaid(praetorium)
                },
                bedroom:{
                    leader:new PinkMaid(praetorium)
                },
                kitchen:{
                    leader:new GreenMaid(praetorium)
                },
                balcony:{
                    leader:new RedMaid(praetorium)
                },
                garage:{
                    leader:new ChocolateMaid(praetorium)
                }
            }
        }
    }

    public say(saying: string): void {
        printSay(this.name,saying,"purple");
    }

    public whisper(saying:string){
        printWhisper(this.name,saying,"purple");
    }


    public name = "HouseKeeperMaid";
    private maidHead:MaidHead;
}

import { Praetorium, Yard } from "@/entities/areas/praetorium";
import { printEmphasize, printLine, printSay, printText, printWhisper } from "@/modules/utils/logtool";

/**
 * 要，要看吗……
 * 嗯……如果是主人的话
 * 要看也可以……
 * 呜，好害羞！
 */
export default class TraineeMaidHead implements LeaderMaid{
    /**
     * 
     */
    constructor(){
        printEmphasize("耶，人见人爱的小萝莉诞生！");
        printLine();
        this.say("我，我吗？");
        printText("她很惊讶");
        this.say("我……不能的……这么重要的工作，交给我的话……");
        this.say("真的？");
        this.say("大家……谢谢！");
        this.say("嗯，嗯！我会加油的！");
        this.hire();
    }

    /**
     * 
     */
    protected hire(){
        // TODO // 不知道要干嘛
    }

    /**
     * “我知道了……”
     * 她没有意识到自己的手拽着裙摆
     * “嗯！”
     * 抱过了女仆长递过的图纸
     * 走到了门外
     */
    public firstTimeWork(yardRooms:Room[],praetoriums:Praetorium[]){// 划分外矿的位置
        this.praetoriums = praetoriums;// 先保存“别墅”列表
        if (yardRooms.length) {// 如果已经有被预定的房间，会被直接认定成外矿
            for(let room of yardRooms){
                let yard = new Yard(room);// 初始化“院子”
                // 分配这些预定的房间到“别墅”
                this.findBestPraetorium(yard).yards.push(yard);
            }
        }
        return OK;// 不知道哪里会出现不OK的情况。
    }

    /**
     * “这里的话……分给这里吧。”
     * 嘘，她在认真工作呢，先别打扰她吧~
     */
    public findBestPraetorium(yard:Yard){// TODO:写的极其垃圾，都什么玩意儿啊，但是先用着。
        let praetorium:Praetorium;
        let minDistance = Infinity;
        for(let p of this.praetoriums){// 不必检验preatoriums的长度，因为只在hire中调用，此时是确保有长度的
            let distance = Game.map.getRoomLinearDistance(yard.room.name,p.house.room.name);
            if(distance < minDistance){// 优先分配给距离最近的
                praetorium = p;
                minDistance = distance;
            }else if(distance == minDistance){// 一样就看控制器等级
                praetorium = praetorium.house.room.controller.level > p.house.room.controller.level ? praetorium : p;
            }
        }
        return praetorium;
    }
    
    /**
     * 新的一天！
     * 今天，见习女仆长也要加油！
     * 不能辜负大家的期待呀~
     */
    public openHerEyes(){
        
    }

    public say(saying: string): void {
        printWhisper(this.name,saying,"lightcoral");
    }
    // TODO

    public praetoriums:Praetorium[];
    private name = "TraineeMaidHead";
    // TODO
}









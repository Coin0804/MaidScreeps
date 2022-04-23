import { Praetorium, Yard } from "@/entities/areas/praetorium";

/**
 * 要，要看吗……
 * 嗯……如果是主人的话
 * 要看也可以……
 * 呜，好害羞！
 */
export default class TraineeMaidHead implements LeaderMaid{
    /**
     * 耶，人见人爱的小萝莉诞生！
     */
    constructor(){
        this.hire();
    }

    /**
     * “我，我吗？”
     * 她很惊讶
     * “我……不能的……这么重要的工作，交给我的话……”
     * “真的？”
     * “大家……谢谢！”
     * “嗯，嗯！我会加油的！”
     */
    protected hire(){
        // TODO // 不知道要干嘛
    }

















    /**
     * 新的一天！
     * 今天，见习女仆长也要加油！
     * 不能辜负大家的期待呀~
     */
    openHerEyes(){
    
    }
    

    /**
     * “我知道了……”
     * 她没有意识到自己的手拽着裙摆
     * “嗯！”
     * 抱过了女仆长递过的图纸
     * 走到了门外
     */
    public firstTimeWork(yardRooms:Room[],praetoriums:Praetorium[]){// 划分外矿的位置
        if (yardRooms.length) {// 如果已经有被预定的房间，会被直接认定成外矿
            for(let room of yardRooms){
                let yard = new Yard(room);// 初始化“院子”
                // 分配这些预定的房间到“别墅”
                _.sortBy(praetoriums,
                    (p) => Game.map.getRoomLinearDistance(yard.room.name,p.house.room.name),// 优先分配最近的
                    (p:Praetorium) => p.house.room.controller.level
                );
                // TODO:这里的分配其实并不完全合适，临时使用一下
            }

            // TODO

        }else{
            this.praetoriums = praetoriums;
            return OK;
        }
    }


    

    //todo

    public praetoriums:Praetorium[];
    // TODO
}









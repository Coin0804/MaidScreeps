import { Praetorium } from "@/entities/areas/praetorium";
import { getUsername } from "@/modules/utils/utils";
import HouseKeeperMaid from "./houseKeeperMaid";
import TraineeMaidHead from "./traineeMaidHead";





/**
 * 诶呀，要偷窥女孩子的里面吗？
 * 真是色情啊~
 * 真拿你没办法
 * 这次，就特别的原谅你把。
 */
export class MaidHead implements LeaderMaid{
    /**
     * 以前从来没有招募女仆吧
     * 不必担心，这不是一件难事
     * 如果……一切正常……的话
     */
    constructor(){
        this.hired();
        //TODO
    }

    /**
     * 从中间人那里接到了通知
     * 女仆长卓越的才能得到了赏识
     * 于是前来工作了！
     */
    private hired(){
        /**
         * “让我来看看，情况如何……”
         * 她长呼一口气，做好了心里准备
         * 走进了带她前往工作地点的轿车
         * 嗯？什么的心里准备？
         */
        let err:ReturnCode = this.partitionRooms();
        if(err == ERR_NO_ROOM){
            /**
             * 看这房产商的沙盘
             * 气氛有些尴尬。
             * “这样的话根本没法开始工作嘛。”
             * 她叹了口气，面无表情的看着你。
             * “等什么时候你选好了住所，在来找我吧。”
             */
            return err;
        }else{
            /**
             * “这是？”
             * 女仆长看着周围。
             * “真是一栋好别墅啊。”她这么说着，
             * 但不知是否真的这样想。
             * “从今往后我就是你的女仆了，我会将这里打理好的，请主人放心吧。”
             * 说完她举了个躬，开始了她的第一次工作。
             */
            err = this.firstTimeWork();
        }
        // TODO // 唔，还要todo吗？事情没干完吗？
    }

    /**
     * 车辆穿过街道
     * 在约定好的地方停下
     * 她优雅的走下车门
     * 抬起头
     */
    private partitionRooms(){
        this.rooms = _.groupBy(Game.rooms,(room) => {// 现有房间分组
            if(room.controller){// 没有控制器不认为是自己的房间
                if(room.controller.my) return "house";// 控制器是自己的那就是“房子”
                if(room.controller.reservation && room.controller.reservation.username == getUsername()){
                    return "yard";// 被预定的房间就是“院子”
                }
            }
            return "other";// 别的不用管了
        });
        if (!this.rooms.house) return ERR_NO_ROOM;// 没有“房子”，需要找一间
        this.praetoriums = [];// 初始化数组
        for (let house of this.rooms.house) {
            this.praetoriums.push(new Praetorium(house));// 以每个“房子”为中心，创建“别墅”并推入数组。
            /* 应该不会出事吧 */
        }
        return OK;
    }
    
    /**
     * 初次来到新的领地，要做的工作有很多
     * 要从什么开始呢？
     * 对了，从招募新的人手开始吧。
     */
    private firstTimeWork(){
        /**
         * 这个孩子的资质，嗯~
         * 很优秀。
         * 等我退休了，就让她来管理家产吧
         */
        this.traineeMaidHead = new TraineeMaidHead();
        /**
         * 人员管理也不能拉下
         * 女仆管家
         * “交给你可以吗？”
         * “行了别闹了，等我搞清楚了状况，下面的人就交给你来招募了。”
         */
        this.housekeeperMaid = new HouseKeeperMaid();

        // TODO //不知道做什么

        /**
         * “听好了，接下来我要你帮忙确定下来院子的范围。”
         * “因为是刚刚开始，所以粗糙一点也关系的。”
         * “好吗？”
         * “乖孩子。”
         */
        this.traineeMaidHead.firstTimeWork(this.rooms.yard,this.praetoriums);
        /**
         * “女仆管家”
         * 看来不需要多说什么了
         */
        this.housekeeperMaid.firstTimeWork(this.praetoriums);

        /**
         * 这样的话，工作就完成了。
         */
        return OK;
    }









    /**
     * 每天早晨，女仆长都会从梦中醒来。
     * 迎接新的一天，新的工作。
     */
    public openHerEyes(){
        
        if(!Memory.maidHeadWorkSheet){
            
        }
        // TODO
    }

    



    

    


    // /**
    //  * 起个名字吧。
    //  * “以后这里就叫做……”
    //  */
    // this.naming = function(type){
    //     //todo
    // }

    
    //todo




















    
    //todo
    private traineeMaidHead:TraineeMaidHead;
    private housekeeperMaid:HouseKeeperMaid;
    private praetoriums:Praetorium[];
    private rooms:{[key:string]:Room[]};
}

import { ERR_NO_ROOM } from "@/constants";
import { Praetorium } from "@/entities/areas/praetorium";
import Schedule from "@/entities/schedule/Schedule";
import { myorderof } from "@/modules/utils/market";
import { printLine, printSay, printText } from "@u/logtool";
import { getUsername } from "@u/utils";
import HouseKeeperMaid from "./HouseKeeperMaid";
import TraineeMaidHead from "./TraineeMaidHead";





/**
 * 诶呀，要偷窥女孩子的里面吗？
 * 真是色情啊~
 * 真拿你没办法
 * 这次，就特别的原谅你把。
 */
export default class MaidHead implements LeaderMaid{
    
    /**
     * 
     */
    constructor(){
        printLine();
        printText(
            "以前从来没有招募女仆吧",
            "不必担心，这不是一件难事",
            "如果……一切正常……的话"
        );
        printLine();
        printText(
            "从中间人那里接到了通知",
            "女仆长卓越的才能得到了赏识",
            "于是前来工作了！"
        );
        this.hired();
        //TODO
    }

    

    /**
     * 
     */
    private hired(){
        printLine();
        this.say("让我来看看，情况如何……");
        printText(
            "她长呼一口气，做好了心理准备",
            "走进了带她前往工作地点的轿车",
            "嗯？什么的心里准备？"
        );

        /**
         * 
         */
        let err:ReturnCode = this.partitionRooms();
        if(err == ERR_NO_ROOM){
            printLine();
            printText("看这房产商的沙盘","气氛有些尴尬。");
            this.say("这样的话根本没法开始工作嘛。");
            printText("她叹了口气，面无表情的看着你。");
            this.say("等什么时候你选好了住所，在来找我吧。");
            return err;
        }else{
            printLine();
            this.say("这是？");
            printText("女仆长看着周围。");
            this.say("真是一栋好别墅啊。");
            printText("她这么说着，","但不知是否真的这样想。");
            this.say("从今往后我就是你的女仆了，我会将这里打理好的，请主人放心吧。");
            printText("说完她举了个躬，开始了她的第一次工作。");
            err = this.firstTimeWork();
        }
        // TODO // 唔，还要todo吗？事情没干完吗？
    }

    /**
     * 
     */
    private partitionRooms(){
        printText("车辆穿过街道","在约定好的地方停下","她优雅的走下车门","抬起头");
        this.rooms = _.groupBy(Game.rooms,(room) => {// 现有房间分组
            if(room.controller){// 没有控制器不认为是自己的房间
                if(room.controller.my) return "house";// 控制器是自己的那就是“房子”
                if(room.controller.reservation && room.controller.reservation.username == getUsername()){
                    return "yard";// 被预定的房间就是“院子”
                }
            }
            return "other";// 别的不用管了
        });
        if(!this.rooms.house) return ERR_NO_ROOM;// 没有“房子”，需要找一间
        if(!this.rooms.yard) this.rooms.yard = [];// 初始化数组
        this.praetoriums = [];// 初始化数组
        for (let house of this.rooms.house) {
            this.praetoriums.push(new Praetorium(house));// 以每个“房子”为中心，创建“别墅”并推入数组。
            /* 应该不会出事吧 */
        }
        return OK;
    }
    
    /**
     * 
     * 
     * 
     */
    private firstTimeWork(){
        printLine();
        printText(
            "初次来到新的领地，要做的工作有很多",
            "要从什么开始呢？",
            "对了，从招募新的人手开始吧。"
        );
        printLine();
        printText(
            "这个孩子的资质，嗯~",
            "很优秀。",
            "等她成熟了，就让她来管理家产吧"
        );
        this.traineeMaidHead = new TraineeMaidHead();
        printLine();
        printText("人员管理也不能拉下","女仆管家");
        this.say("交给你可以吗？");
        this.housekeeperMaid = new HouseKeeperMaid();
        this.say("行了别闹了，等我搞清楚了状况，下面的人就交给你来招募了。");
        this.housekeeperMaid.say("好，好。那我就静候佳音啦。");
        this.housekeeperMaid.whisper("哼哼，真可爱。")
        /**
         * 
         */
        

        // TODO //不知道做什么

        printLine();
        this.say("听好了，接下来我要你帮忙确定下来院子的范围。");
        this.traineeMaidHead.say("我知道了……");
        printText("她没有意识到自己的手拽着裙摆");
        this.say("因为是刚刚开始，所以粗糙一点也关系的。");
        this.say("好吗？");
        this.traineeMaidHead.say("嗯！");
        this.say("乖孩子。");
        /**
         * 
         */
        let err = this.traineeMaidHead.firstTimeWork(this.rooms.yard,this.praetoriums);
        if(err == OK){// 目前必然是OK的
            this.say("非常好，干的漂亮，第一次的工作完成的很棒");
            printText("女仆长赞赏的摸了摸她的头");
        }
        printLine();
        printText("改进行下一项工作了");
        this.say("女仆管家");
        this.housekeeperMaid.say("收到。");
        printText("她开心的笑着","开始了工作");
        printText("看来不需要多说什么了");
        /**
         * 
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
        
        this.housekeeperMaid.openHerEyes();

        this.createArtwork();
        return OK;
        // TODO
    }

    

    public makeScheduleNextDay(schedule:Schedule):Schedule{
        return schedule;
    }

    

    


    // /**
    //  * 起个名字吧。
    //  * “以后这里就叫做……”
    //  */
    // this.naming = function(type){
    //     //todo
    // }

    
    //todo














    /**
     * 
     */
    private createArtwork(){
        if(Game.cpu.bucket == 10000){
            let err = Game.cpu.generatePixel();
            if(err == OK){
                printText("闲暇时间，女仆们会进行艺术创作，今天，又一个崭新的作品诞生啦。");
            }
            return err;
        }
    }



    public newPraetoriumAt(){
        this.TODO("购置房产");
    }

    public hireCleaner(room:string,birthRoomIndex = 0){
        this.TODO("雇佣钟点工");
    }

    public sellArtwork(price:number,amount:number){
        let artworkOrders = myorderof(PIXEL);
        let artworks:number = Game.resources[PIXEL];
        if(artworks <= artworkOrders.totalamount + amount){
            this.say("现有的艺术品都已经在出售了,耐心一些等以后再考虑这件事吧。");
            return ERR_NOT_ENOUGH_RESOURCES;
        }
        let err = Game.market.createOrder({type:ORDER_SELL,resourceType:PIXEL,price:price,totalAmount:amount});
        if(err == OK){
            this.say(`女仆们创作的${amount}件艺术品已经准备以${price}了。`);
        }
    }

    








    public say(saying:string): void {
        printSay(this.name,saying,"black");
    }

    private TODO(issue:string){
        this.say(`现在还没有做${issue}的空闲。`)
    }
    
    //todo
    private traineeMaidHead:TraineeMaidHead;
    private housekeeperMaid:HouseKeeperMaid;
    private praetoriums:Praetorium[];
    private rooms:{[key:string]:Room[]};
    public name = "MaidHead";
}

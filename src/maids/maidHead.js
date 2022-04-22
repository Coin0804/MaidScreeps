/**
 * Auther作者：coin0804
 * Version版本：0.0.1
 * 
 */

const Praetorium = require('praetorium');
const ERR_NO_ROOM = -1;
/**
 * 诶呀，要偷窥女孩子的里面吗？
 * 真是色情啊~
 * 真拿你没办法
 * 这次，就特别的原谅你把。
 */
function MaidHead(){
    /**
     * 每天早晨，女仆长都会从梦中醒来。
     * 迎接新的一天，新的工作。
     */
    this.openHerEyes = function(){
        if(!Memory.maidHead){
            /**
             * “让我来看看，情况如何……”
             * 她长呼一口气，做好了心里准备
             * 走进了带她前往工作地点的轿车
             * 嗯？什么的心里准备？
             */
            let err = this.partitionRooms();
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
                //todo
            }
        }
        //todo
    }

    /**
     * 初次来到新的领地，要做的工作有很多
     * 要从什么开始呢？
     * 对了，从招募新的人手开始吧。
     */
    this.firstTimeWork = function(){
        /**
         * 这个孩子的资质，嗯~
         * 很优秀。
         * 等我退休了，就让她来管理家产吧
         */
        this.traineeMaidHead = require('traineeMaidHead');
        /**
         * 人员管理也不能拉下
         * 女仆管家
         * “交给你可以吗？”
         * “行了别闹了，等我搞清楚了状况，下面的人就交给你来招募了。”
         */
        this.housekeeperMaid = require('houseKeeperMaid');

        //todo

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



    }

    /**
     * 车辆穿过街道
     * 在约定好的地方停下
     * 她优雅的走下车门
     * 抬起头
     */
    this.partitionRooms = function(){
        this.rooms = _.groupBy(Game.rooms,(r) => {
            if(r.controller.my){
                return "house";
            }else if(r.controller.reservation.username == Game.username){
                return "yard";
            }else{
                return "other";
            }
        });
        if (!this.rooms.house) return ERR_NO_ROOM;
        this.praetoriums =new Array();
        for (let house of rooms.house) {
            this.praetoriums.add(Praetorium.create(house));
        }
        return OK;
    }


    // /**
    //  * 起个名字吧。
    //  * “以后这里就叫做……”
    //  */
    // this.naming = function(type){
    //     //todo
    // }

    
    //todo




















    this.openHerEyes();
    //todo
}






/**
 * 迎接吧！最能“干”的女仆长！
 */
module.exports = new MaidHead();

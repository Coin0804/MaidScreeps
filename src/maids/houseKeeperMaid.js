const BlueMaid = require('blueMaid');


/**
 * 对我感到好奇？
 * 那也是当然的吧~
 * 但是不能就这么轻易的让主人为所欲为呢。
 * 主人得好好补偿我才行。
 * 很简单，去和女仆长约会吧。
 * 开玩笑~
 */
function HouseKeeperMaid() {
    /**
     * 接下来要做什么呢？
     * 去看看小蓝有没有偷懒吧。
     * 小黄应该……嗯，没问题
     * 还是先去捏捏小女仆长的脸蛋吧~
     */
    this.openHerEyes = function(){
        if (!Memory.HouseKeeperMaid) {
            /**
             * “当然~交给我吧。不会辜负我最心爱❤的女仆长的信任的~”
             * “好，好。那我就静候佳音啦。”
             * “哼哼，真可爱。”
             */
        }
    }

    /**
     * “收到。”
     * 她开心的笑着
     * 开始了工作
     */
    this.firstTimeWork = function(praetoriums){
        for (let praetorium of praetoriums) {
            praetorium.house.areas = {
                studyroom:{
                    leader:BlueMaid.hire(praetorium)
                },
                warehouse:null,
                bedroom:null,
                kitchen:null,
                balcony:null
            }
        }
    }

}





module.exports = new HouseKeeperMaid();
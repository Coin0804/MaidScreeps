class Orders{
    constructor(list:Order[]){
        this.list = list;
        this.totalamount = 0;
        this.totalprice = 0;
        for(let order of list){// 在一次遍历中要做的事情很多，所以不适用reduce等方法，提高效率
            this.totalamount += order.remainingAmount;
            this.totalprice += order.remainingAmount*order.price;
            if(!this.minid || order.price < this.minprice){
                this.minprice = order.price;
                this.minid = order.id;
            }
            if(!this.minid || order.price > this.maxprice){
                this.maxprice = order.price;
                this.maxid = order.id;
            }
        }
    }

    list:Order[];
    totalamount:number;
    totalprice:number;
    maxprice:number;
    maxid:string;
    minprice:number;
    minid:string;
}

/**
 * 
 * 获取我的某个种类的订单
 */
export function myorderof(resourceType:MarketResourceConstant){
    let list = _.filter(Game.market.orders,(o) => o.active && o.resourceType == resourceType);
    return new Orders(list);
}
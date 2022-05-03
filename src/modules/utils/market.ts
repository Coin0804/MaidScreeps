export function myorderof(resourceType:MarketResourceConstant){
    let orders = {
        list:[],
        totalamount:0,
        totalprice:0,
        maxprice:0,
        maxid:undefined,
        minprice:0,
        minid:undefined
    };
    for(let id in Game.market.orders){
        let order = Game.market.orders[id];
        if(order.active && order.resourceType == resourceType){
            orders.totalamount += order.remainingAmount;
            orders.totalprice += order.remainingAmount*order.price;
            orders.list.push(order);
            if(!orders.minid || order.price < orders.minprice){
                orders.minprice = order.price;
                orders.minid = order.id;
            }
            if(!orders.minid || order.price > orders.maxprice){
                orders.maxprice = order.price;
                orders.maxid = order.id;
            }
        }
    }
    return orders;
}
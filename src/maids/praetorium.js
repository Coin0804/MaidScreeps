/**
 * 别墅类
 * @param {Room} house 
 */
function Praetorium(house){
    this.name = house.name; 
    this.house =new House(house);

}

function House(house){
    this.name = house.name;
    
}



module.exports = {
    create:function(house){
        return new Praetorium(house)
    }
}
/**
 * 别墅类
 */
export class Praetorium{
    constructor(room:Room){
        this.name = room.name; 
        this.house =new House(room);
    }
    
    public name:string;
    public house:House;

}

export class House{
    constructor(room:Room){
        this.name = room.name;
    }

    public name:string;
    public areas:Areas;
}


export class Area{

}



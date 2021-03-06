import { Balcony, Praetorium } from "@/entities/areas/Praetorium";
import { printSay } from "@/modules/utils/logtool";
import { AreaLeaderMaid } from "./abstract";

/**
 * 
 * 
 */
export default class RedMaid extends AreaLeaderMaid{
    constructor(praetorium:Praetorium){
        super(praetorium);
        this.name = `RedMaid_${praetorium.house.room}`;
        this.area = praetorium.house.areas.balcony;
        this.area.leader = this;
    }

    public doPerpare(): ReturnCode {
        // TODO
        return OK;
    }

    public openHerEyes(): ReturnCode {
        return OK;
    }

    public readLetters(): ReturnCode {
        return OK;
    }
    
    public say(saying: string): void {
        printSay(this.name,saying,"red");
    }

    public area: Balcony;
}
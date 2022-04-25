import { Praetorium } from "@/entities/areas/praetorium";
import { printSay } from "@/modules/utils/logtool";

/**
 * 
 * 
 */
export default class RedMaid implements LeaderMaid{
    constructor(praetorium:Praetorium){
        this.praetorium = praetorium;
    }

    public say(saying: string): void {
        printSay(this.name,saying,"red");
    }
    public name: string;
    private praetorium:Praetorium;
}
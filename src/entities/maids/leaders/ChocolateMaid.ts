import { Praetorium } from "@/entities/areas/praetorium";
import { printSay } from "@/modules/utils/logtool";

/**
 * 
 * 
 */
export default class ChocolateMaid implements LeaderMaid{
    constructor(praetorium:Praetorium){
        this.praetorium = praetorium;
    }

    public say(saying: string): void {
        printSay(this.name,saying,"chololate");
    }
    public name: string;
    private praetorium:Praetorium;
}
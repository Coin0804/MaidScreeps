import { Bedroom, Praetorium } from "@/entities/areas/Praetorium";
import { TaskLetter } from "@/entities/letter/Letter";
import { BirthWorkMaidTask } from "@/entities/plan/Task";
import { printSay } from "@/modules/utils/logtool";
import { AreaLeaderMaid } from "./abstract";

/**
 * 主人这么想要看光光吗？
 * 那，看吧~❤
 */
export default class PinkMaid extends AreaLeaderMaid{
    constructor(praetorium:Praetorium){
        super(praetorium);
        this.name = `PinkMaid_${praetorium.house.room}`;
        this.area = praetorium.house.areas.bedroom;
        this.area.leader = this;
    }

    public doPerpare(): ReturnCode {
        // TODO
        return OK;
    }

    public openHerEyes(): ReturnCode {
        let err = this.readLetters();

        return err;
    }

    public readLetters(): ReturnCode {
        for(let l of this.area.letterbox){
            if(l.type == "task"){
                let letter:TaskLetter = l as TaskLetter;
                if(letter.work == "birth"){
                    let length = this.checkTask(letter.from.area.type,letter.detail.maidType);
                    if(length < letter.detail.number){
                        let task = new BirthWorkMaidTask(letter.from.area.type,letter.detail.maidType);
                        this.area.taskList.push(task);
                    }
                }
            }
        }
        return OK;
    }

    private checkTask(area:AREAS,maidType:MaidType):number{
        return this.area.taskList.filter((t)=>{
            return t.taskType=="birth" 
            && (t as BirthWorkMaidTask).taskArea==area
            && (t as BirthWorkMaidTask).maidType==maidType
        }).length;
    }




    public say(saying: string): void {
        printSay(this.name,saying,"pink");
    }

    public area: Bedroom;
}
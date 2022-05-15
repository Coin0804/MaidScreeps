import { Garage, Praetorium} from "@/entities/areas/Praetorium";
import { TaskLetter } from "@/entities/letter/Letter";
import { printDebug, printSay } from "@/modules/utils/logtool";
import { AreaLeaderMaid } from "./abstract";

/**
 * 
 * 
 */
export default class ChocolateMaid extends AreaLeaderMaid{
    constructor(praetorium:Praetorium){
        super(praetorium);
        this.name = `ChocolateMaid_${praetorium.house.room}`;
        this.area = praetorium.house.areas.garage;
        this.area.leader = this;
    }
    
    public doPerpare(): ReturnCode {
        // 获取员工列表
        // TODO:本来应该从记忆中就可以恢复，暂时先使用搜索
        this.findStaffs();
        const unconditionalStaffs = this.praetorium.plan.staff.garage.unconditional;
        for(let i in unconditionalStaffs){
            const type = i as AllWorkMaid;
            const staffInNeed = unconditionalStaffs[type].number-this.area.staffList.getStaffByType(type).length;
            if(staffInNeed > 0){
                const letter = new TaskLetter("birth",unconditionalStaffs[type].priority,{maidType:"balanced",number:staffInNeed});
                printDebug(`${this.name} send birth letter ${JSON.stringify(letter)}`);
                this.sendLetter(this.praetorium.house.areas.bedroom.leader,letter);
            }
        }
        
        /**
         * 接下来需要完成必要任务的装填
         */
        



        // this.area.taskList;
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
        printSay(this.name,saying,"chololate");
    }

    public area: Garage;
}
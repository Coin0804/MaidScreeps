import { Garage, Praetorium} from "@/entities/areas/Praetorium";
import { TaskLetter } from "@/entities/letter/Letter";
import { printSay } from "@/modules/utils/logtool";
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
        const staffInNeed = unconditionalStaffs.balanced.number - this.area.staffList.getStaffByType("balanced").length;
        if(staffInNeed > 0){
            this.sendLetter(this.praetorium.house.areas.bedroom.leader,new TaskLetter("birth",{maidType:"balanced",number:staffInNeed}));
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
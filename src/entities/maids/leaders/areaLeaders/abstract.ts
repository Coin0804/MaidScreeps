import { AbstractArea, Praetorium } from "@/entities/areas/Praetorium";
import { Letter } from "@/entities/letter/Letter";
import { StaffList } from "@/modules/containers/containers";
import { printDebug } from "@/modules/utils/logtool";
import WorkMaid from "../../staffs/workmaid";
/**
 * 抽象的区域领导女仆
 * 部分的方法有重用
 */
export abstract class AreaLeaderMaid implements LeaderMaid{
    constructor(praetorium:Praetorium){
        this.praetorium = praetorium;
        praetorium.leaders.push(this);
    }
    // 从接口实现（没实现）的属性和方法
    name: string;
    abstract say(saying: string): void;
    abstract openHerEyes(): ReturnCode;
    abstract doPerpare(): ReturnCode;
    // 自己的属性和方法
    area:AbstractArea;
    praetorium:Praetorium;

    findStaffs(){
        this.area.staffList = new StaffList(this.praetorium.house.getRoom()
        .find(FIND_MY_CREEPS,{filter:(c) => {
            let memory = c.memory.team == "workMaid" ? (c.memory as WorkMaidMemory) : undefined;
            return memory?.workRoom == this.praetorium.house.room 
            && memory?.workArea == this.area.type
        }}).map((c) => {return new WorkMaid(c)}));
        printDebug(`${this.name}:${this.area.staffList.all.length} staffs found.`);

    }

    abstract readLetters():ReturnCode;
    sendLetter(target:AreaLeaderMaid,letter:Letter):ReturnCode{
        letter.from = this;
        target.area.letterbox.push(letter);
        return OK;
    }
}
import { Praetorium, Studyroom } from "@/entities/areas/Praetorium";
import { Tool } from "@/entities/tool/Tool";
import { printSoftSay, printText } from "@/modules/utils/logtool";
import { AreaLeaderMaid } from "./abstract";

/**
 * 谁啊……
 * 唔，让我再睡5分钟……
 * 你想做什么就做什么吧……
 * zzz
 */
export default class BlueMaid extends AreaLeaderMaid{// TODO:负责实验室合成相关事项，目前没有想法，所以应该是没什么事做的
    constructor(praetorium:Praetorium){
        super(praetorium);
        this.name = `BlueMaid_${praetorium.house.room}`;
        this.area = praetorium.house.areas.studyroom;
        this.area.leader = this;
        this.say("在叫我吗");
    }

    public doPerpare(): ReturnCode {
        printText("小蓝在摸鱼");
        let labs:StructureLab[] = this.praetorium.house.getRoom()
        .find(FIND_STRUCTURES,{filter:(s) => s.structureType == STRUCTURE_LAB});
        this.area.tools = {
            labs:labs.map((lab) => {return (new Tool(lab))}),
            reactantLabs:[],
            productLabs:[]
        };
        return OK;
    }

    public openHerEyes(): ReturnCode {
        return OK;
    }
    
    public readLetters(): ReturnCode {
        return OK;
    }

    public say(saying: string): void {
        printSoftSay(this.name,saying,"lightblue");
    }

    public area: Studyroom;
}
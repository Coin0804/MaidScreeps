import { printEmphasize } from "@/modules/utils/logtool";
import MaidHead from "../maids/leaders/MaidHead";


export const projects:Project[] = [
    {
        todo:function(){
            printEmphasize('迎接吧！最能“干”的女仆长！');
            global.maidHead = new MaidHead();

            return OK;
        }
    },
];
/**
 * 
 */

import { repeat } from "@/modules/utils/arrayUtils";

/**
 * 输入BodyPart类型的对象，转换成数组，详见
 * @see ./index.d.ts
 */
function bodyPartToArray(part:BodyPart){
    let array:BodyPartConstant[] = [];
        for(let t in part){
            for(let i=0;i < part[t];i++){
                array.push(t as BodyPartConstant);
            }
        }
        return array;
}

const dic = {
    a:ATTACK,
    m:MOVE,
    t:TOUGH,
    h:HEAL,
    r:RANGED_ATTACK,
    c:CARRY,
    w:WORK,
    C:CLAIM
}

function codeToBody(s:string){
    let array:BodyPartConstant[] = [];
    for(let c of s){
        array.push(dic[c]);
    }
    return array;
}

function moduleToBody(module:BodyPartConstant[],time:number){
    return repeat(module,time) as BodyPartConstant[];
}

const basicWork = codeToBody("wcm");

/**
 * 
 */
export const BODYS:BodysConstant = {
    workMaid:{
        level:{
            1:{
                balanced:basicWork,
            },
        },
        universe:{
            propertyPurchasesMaid:bodyPartToArray({move:1,claim:1}),
            longWayPropertyPurchasesMaid:bodyPartToArray({move:1,claim:5}),
            armedPropertyPurchasesMaid:codeToBody("ac"),
        }
    },
    battleMaid:{
        level:{},
        final:{
            superMaid:bodyPartToArray({tough:11,rangedAttack:5,move:10,heal:24})
        }
    }
}
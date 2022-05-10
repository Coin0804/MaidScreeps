// import { getMockCreep } from '@mock/Creep'

import { BODYS } from "@/entities/maids/staffs/bodys/bodys";
import { repeat } from "@/modules/utils/arrayUtils";
import { printLine, printLog } from "@/modules/utils/logtool";
import { expect, it, test } from "vitest";

test('优雅部件',function(){
    let part = BODYS.battleMaid.final["superMaid"];
    expect(part.length).toBe(50)
    part = BODYS.workMaid.universe["armedPropertyPurchasesMaid"];
    expect(part).toEqual([ATTACK,CARRY])
});

it('递归连接重复',function(){
    console.time("d")
    const array = BODYS.battleMaid.final["superMaid"];
    expect(repeat(array,100000).length).toBe(5000000);
    console.timeEnd("d")
});

it('log输出',function(){
    printLine();
    printLog("hello");
});

it('递归链接',function(){
    /*
    Changes include adding `accents` and the `ñ`.
    I also added `min` and `max` as parameters.
    */

    const accents = 'áéíóú',
        chars = 'abcdefghijklmnopqrstuvwxyz',
        a = 'bcdfghijklmnpqrstuvwxyzñ',
        b = 'aeilorsuy',
        c = 'aeioruhtlkkkkkkkkk',
        d = 'aeiourldns',
        e = 'abcdefyrnsltmpxizñ',
        f = 'aeiouylrf',
        g = 'aeiouhrlmns',
        h = 'aeiourlt',
        i = 'encstoadlmvzrgfrtpbkñ',
        j = 'uaoei',
        k = 'eiaolunyhsrw',
        l = 'eiayoug',
        m = 'aeiouypb',
        n = 'aeiouytgdcsn',
        o = 'abcdefnruplsmtzñ',
        p = 'rehaoilhtusp',
        q = 'u',
        r = 'aeioutymscdrnpb',
        s = 'etshaicupomlynk',
        t = 'eiraohuytlar',
        u = 'bcdfghnslrmtiaepzñ',
        v = 'eiaour',
        w = 'aeiouyhrnls',
        x = 'aeiouytcpl',
        y = 'elstacpnm',
        z = 'eaioyuz',
        ñ = 'aeiou';

    function rng (doAccents = true, min = 4, max = 8, length = Math.floor(Math.random() * (max - min + 1)) + min, firstChar = chars[Math.floor(Math.random() * chars.length)]) {
        let out = [];
        
        for (let index = 0; index < length; index++) {
            if (index == 0) {
            out.push(firstChar);
            } else {
            out.push(eval(out[index-1])[Math.floor(Math.random() * eval(out[index-1]).length)]);
            }
        }
        
        if (doAccents) {
            let hasAccent = false;
            out = out.map(char => {
            let newChar;
            if (Math.floor(Math.random() * 10) >= 5) {
                newChar = ñ.includes(char) && !hasAccent ? accents[ñ.indexOf(char)] : char;
                hasAccent = true;
            }
            return newChar || char;
            });
        }
        
        if (out[out.length-1] == "ñ") {
            out.push(ñ[Math.floor(Math.random() * ñ.length)]);
        }
        
        return out.join('');
    }

    for(let i = 0; i < 10; i++) {
        console.log(rng(true, 5, 6));
        console.log("");
        console.log(rng(false, 4, 8));
        console.log("");
    }

    // good names: garnguck, lemock, wemee, yermpoo, jelifyeshi, vazaji, zufazi, dupunt, trythluid

    /* more good names:
    elóra, yáddro, lezíe, janeño, bahúz, gouñuña,
    volgrad, flizz, tunck, vorag, sylem, kitala, vunos, jaith, qumor, henup, ornda, zilep, cantadu, gromu, lodley
    */
});

// it('循环插入重复',function(){
//     console.time("d")
//     const array = BODYS.battleMaid.final["superMaid"];
//     expect(repeatFor(array,100000).length).toBe(5000000);
//     console.timeEnd("d")
// });

// it('扁平化重复',function(){
//     const array = BODYS.battleMaid.final["superMaid"];
//     expect(repeatFill(array,10000).length).toBe(500000);
// });

// it('递归链接',function(){

// });


// it('全局环境测试', () => {
//     // 全局应定义了 Game
//     expect(Game).toBeDefined()
//     // 全局应定义了 lodash
//     expect(_).toBeDefined()
//     // 全局的 Memory 应该定义且包含基础的字段
//     expect(Memory).toMatchObject({ rooms: {}, creeps: {} })
// })



// it('mock Creep 可以正常使用', () => {
//     // 创建一个 creep 并指定其属性
//     const creep = getMockCreep({ name: 'test', ticksToLive: 100 })

//     expect(creep.name).toBe('test')
//     expect(creep.ticksToLive).toBe(100)
// })
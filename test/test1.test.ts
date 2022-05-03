// import { getMockCreep } from '@mock/Creep'

import { BODYS } from "@/entities/maids/staffs/bodys/bodys";
import { repeat } from "@/modules/utils/arrayUtils";
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
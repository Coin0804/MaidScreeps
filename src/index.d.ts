type ERR_NO_ROOM = -1;
type ERR_INVALID_PROJECT = -2;
type ERR_UNKNOW = -100;
type ERR_IN_PRIVATESERVER = -101;



type ReturnCode = ERR_NO_ROOM|CreepActionReturnCode|ERR_UNKNOW|ERR_IN_PRIVATESERVER|ERR_INVALID_PROJECT;

type OptionableStructures = STRUCTURE_LINK
    |STRUCTURE_TERMINAL|STRUCTURE_FACTORY|STRUCTURE_LAB
    |STRUCTURE_SPAWN|STRUCTURE_TOWER|STRUCTURE_NUKER
    |STRUCTURE_OBSERVER|STRUCTURE_POWER_SPAWN




interface Memory{
    /**
     * 存放持久化的信息，这些信息几乎不会被更新
     */
    USERNAME:string;
    /**
     * 持久化保持的对象，希望global重置的时候能通过这个对象恢复女仆们的工作
     * 但是现在不知道具体该包含哪些信息，
     * 所以 // TODO
     */
    maidHeadWorkSheet:any, // TODO
    traineeMaidHeadWorkSheet:any, // TODO
    houseKeeperMaidWorkSheet:any, // TODO


}
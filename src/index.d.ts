type ERR_NO_ROOM = -1



declare const ERR_NO_ROOM:ERR_NO_ROOM;




type ReturnCode = OK|ERR_NO_ROOM;





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
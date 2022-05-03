
declare module NodeJS {
    interface Global {
        maidHead: import("@m/leaders/MaidHead").default
        Game: Game
        Memory: Memory
        _: _.LoDashStatic
        startTick:number
    }
}






        

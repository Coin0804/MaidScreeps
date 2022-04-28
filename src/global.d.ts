
declare module NodeJS {
    interface Global {
        MaidHead: import("@m/leaders/MaidHead").default
        Game: Game
        Memory: Memory
        _: _.LoDashStatic
        startTick:number
    }
}






        

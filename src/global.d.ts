
declare module NodeJS {
    interface Global {
        calender: import("@/modules/utils/time").Calendar
        schedule: import("@/entities/schedule/Schedule").default
        maidHead: import("@m/leaders/MaidHead").default
        Game: Game
        Memory: Memory
        _: _.LoDashStatic
        startTick:number
    }
}






        

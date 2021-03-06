type WORKMAID = "workMaid";
type BATTLEMAID = "battleMaid";
type UNIVERSE = "universe";
type FINAL = "final";

type AllWorkMaid = "balanced";
type AllBattleMaid = "supermaid";
type MaidType = AllBattleMaid|AllWorkMaid;



interface Staff{
    name :string
    id :Id<Creep>
    team :WORKMAID|BATTLEMAID
    group ?:UNIVERSE|FINAL
    level ?:number
    type :string
}

interface CreepMemory{
    team:WORKMAID|BATTLEMAID
}

interface WorkMaidMemory extends CreepMemory{
    workRoom :string
    workArea :AREAS
    group ?:UNIVERSE
    level ?:number
    type :string
}
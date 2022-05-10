import { WORKMAID } from "@/constants";

export default class WorkMaid implements Staff{
    constructor(creep:Creep){
        this.id = creep.id;
        this.name = creep.name;
    }
    name: string;
    id: Id<Creep>;
    team:WORKMAID = WORKMAID;
    group:UNIVERSE;
    level: number;
    type: string;
}
export class Tool<T extends AnyStructure = AnyStructure>{
    constructor(structure:T){
        this.id = structure.id as Id<T>;
    }

    public get(){
        return Game.getObjectById(this.id);
    }
    
    private id:Id<T>;

}


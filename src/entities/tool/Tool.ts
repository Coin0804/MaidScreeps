export class Tool<T extends StructureConstant = StructureConstant>{
    constructor(structure:Structure<T>){
        this.id = structure.id;
    }

    public get(){
        return Game.getObjectById(this.id);
    }
    
    private id:Id<Structure<T>>;

}


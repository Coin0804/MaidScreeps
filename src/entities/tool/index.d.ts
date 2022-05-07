interface Tool<T extends StructureConstant = StructureConstant>{
    get():Structure<T>;
}

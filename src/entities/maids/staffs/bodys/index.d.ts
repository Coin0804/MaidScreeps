type BodyPart = {
    move ?:number
    carry ?:number
    work ?:number
    attack ?:number
    rangedAttack ?:number
    heal ?:number
    claim ?:number
    tough ?:number
};

type BodyPartCode = "a"|"r"|"t"|"m"|"c"|"C"|"w";

type BodysConstant = {
    workMaid:{
        level :{[maidtype:string]:BodyPartConstant[]}[],
        universe :{[maidtype:string]:BodyPartConstant[]}
    }
    battleMaid:{
        level ?:{[maidtype:string]:BodyPartConstant[]}[],
        final :{[maidtype:string]:BodyPartConstant[]}
    }
};
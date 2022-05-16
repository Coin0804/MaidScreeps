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
        level :{[l in ControllerLevels]?:{[maidtype in AllWorkMaid] ?:BodyPartConstant[]}},
        universe :{[maidtype:string]:BodyPartConstant[]}
    }
    battleMaid:{
        level ?:{[l in ControllerLevels]?:{[maidtype in AllBattleMaid] ?:BodyPartConstant[]}},
        final :{[maidtype:string]:BodyPartConstant[]}
    }
};
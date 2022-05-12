type Point = {
    x :number,
    y :number
}

type MapNode = {
    pos:Point,
    H ?:number,
    G ?:number,
    F ?:number,
    parent ?:MapNode,
}
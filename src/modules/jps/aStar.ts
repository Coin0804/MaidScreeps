const HEIGHT = 50
const WIDTH = 50

const  dir =
[   ,
    {x: 0, y:-1},
    {x: 1, y:-1},
    {x: 1, y: 0},
    {x: 1, y: 1},
    {x: 0, y: 1},
    {x:-1, y: 1},
    {x:-1, y: 0},
    {x:-1, y:-1}
]

function inmap(p:Point){
    return p.x >= 0 && p.y >= 0 && p.x < WIDTH && p.y<HEIGHT
}

function getSurrond(node:MapNode):MapNode[]{
    let surrondNodes:MapNode[] = [];
    for(let i=1;i<=8;i++){
        let pos = {x:node.pos.x+dir[i].x, y:node.pos.y+dir[i].y};
        surrondNodes.push({pos:pos});
    }
    return surrondNodes;
}

function inList(point:Point,list:MapNode[]):number{
    return list.findIndex((n) => n.pos.x == point.x && n.pos.y == point.y);
}

export function seatchRoad(startPoint:Point,endPoint:Point,cost:number[][]){
    let openList:MapNode[] = [];
    let closeList:MapNode[] = [];
    let result:Point[] = [];
    let resultIndex:number;

    openList.push({pos:startPoint,G:0});// 出发点

    do{
        let node = openList.pop();
        let surrondNodes = getSurrond(node);
        for(let n of surrondNodes){
            if(n.pos.x == endPoint.x && n.pos.y == endPoint.y){
                console.log("debug");
            }
            if(inmap(n.pos) && cost[n.pos.y][n.pos.x]!=1 && inList(n.pos,closeList)<0){
                let index = inList(n.pos,openList);
                if(index < 0){
                    n.H = Math.max(Math.abs(n.pos.x - endPoint.x),Math.abs(n.pos.y - endPoint.y));
                    n.G = cost[n.pos.y][n.pos.x] + 0.1 + node.G;
                    n.F = n.H + n.G;
                    n.parent = node;
                    openList.push(n);
                }else if(cost[n.pos.y][n.pos.x] < openList[index].G){
                    openList[index].parent = node;
                    openList[index].G = cost[n.pos.y][n.pos.x] + 0.1 + node.G;
                    openList[index].F = openList[index].H + openList[index].G;
                }
            }
        }
        closeList.push(node);
        if(openList.length == 0) break;
        openList.sort((a,b) => b.F - a.F);
    }while((resultIndex = inList(endPoint,openList))<0);

    if(resultIndex < 0){
        result = [];
    }else{
        let node = openList[resultIndex];
        do{
            result.unshift(node.pos);
            node = node.parent;
        }while(node)
    }
    return result;
}
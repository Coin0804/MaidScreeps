export function getTime(original = true){
    let cpu = Game.cpu.getUsed();
    let hours = 6+_.floor(cpu/2);
    let min = _.floor((cpu*30)%60);
    let t = `${hours}:${min<10?'0'+min : min }`;
    if(original) return t+`(${cpu.toFixed(4)})`;
    return t;
}

export class Calendar{
    constructor(){
        this.startDate = Game.time;
    }
    private startDate:number;
    private today:number;

    nextDay(){
        this.today++;
    }
    getToday(){
        return this.today;
    }
    /**
     * TODO: 未来可能会添加不同年份月份和日期，在不同的时期对话可能不同（画饼）
     */
    getDate(original = false){
        return `今天是开展工作的第${this.today}天。`;
    }
}
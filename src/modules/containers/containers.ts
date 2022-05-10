/**
 * 员工列表工具类
 */
export class StaffList implements ObjectList<Staff>{
    constructor(staffs:Staff[]){
        this.all = staffs;
        this.dic = _.groupBy(staffs,(s) => {return s.type});
    }

    getAll(): Staff[] {
        return this.all;
    }

    getStaffByType(type:AllWorkMaid){
        return this.dic[type];
    }

    private all:Staff[];
    private dic:{[type:string]:Staff[]}={};
}

/**
 * 如果你在探索这个项目
 * 那么下面的概念你需要了解
 * 
 * 这个项目将房间的概念拓展并且抽象
 * 最后比拟封装成了“院子”和“房子”
 * “院子”是指外矿以及能够完全掌控的过道 // TODO 对过道的掌控未实现且不属于近期计划
 * “房子”是指有自己的控制器的房间
 * 而一个“房子”可以将影响力辐射到若干的“院子”
 * 这样的“房子”和“院子”的总体被作为一个“别墅”来对待
 * 
 * “房子”又被划分成了若干个区域，包括： // 
 * 书房：负责lab
 * 仓库：负责整个中央管理物流枢纽，最终形成以storage为中心，包括terminal和一至二个link的高效物流系统
 * 卧室：负责所有spawn，powerspawn和extension以及creep与powercreep的孵化
 * 车库：负责road与container的维护，新建筑的建造，resource，tombstone，ruins和敌人建筑中物资的回收，powercreep的工作处理
 * 厨房：负责本“别墅”内source，mineral，deposit，power的采集与运输，以及factory的工作
 * 阳台：负责本“别墅”内的所有军事行动，包括外矿保卫，主动防御的创建与行动以及所有tower，observer，nuker，wall，rampart的工作和维护
 * 值得注意的是，这不是位置上的划分，而是职责上的划分
 * 在位置上是可以交错和重叠的
 * 区域之间的依赖和交流也会非常紧密
 * 尤其是和仓库区域
 */



type Areas = {
    studyroom:any,
    warehouse:any,
    bedroom:any,
    kitchen:any,
    balcony:any,
}







type AREAS = "studyroom"|"warehouse"|"bedroom"|"kitchen"|"balcony";
type TASKTYPES = "building";

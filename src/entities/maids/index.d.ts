/**
 * 如果你在探索这个项目
 * 那么下面的概念你需要了解
 * 
 * 这个项目的主题就是女仆
 * 她们各自有着自己的人设，负责不同的工作，会为枯燥的游戏增色不少
 * 整个项目的架构是这样的
 * 项目的整体由女仆长完全控制，你和游戏内任何对象的交互实际上都必须通过女仆长来进行
 * 女仆长手下有两个主要的帮手，
 * 一个被称为女仆管家，一个是见习女仆长
 * 
 * 从"../areas/index.d.ts"文件中你可以找到区域的说明，对应这些区域都会包括一个领导的颜色女仆： // 
 * 书房：蓝色
 * 仓库：黄色
 * 卧室：粉色
 * 车库：棕色
 * 厨房：绿色
 * 阳台：红色
 * 她们是管理领地的接口
 * @see 
 */

interface LeaderMaid{
    name:string
    say(saying:string):void
    openHerEyes():ReturnCode
    doPerpare():ReturnCode
}

interface AreaLeaderMaid extends LeaderMaid{
    area:Area;
}
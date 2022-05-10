/**
 * 领导女仆的接口
 * 做抽象类使用：
 * 对于几乎所有的领导女仆都需要重写方法
 * 所以没必要单独再加一层进行不必要的定义
 */
interface LeaderMaid{
    name:string
    say(saying:string):void
    openHerEyes():ReturnCode
    doPerpare():ReturnCode
}

export default function(loop:Function){
    return function(){
        try {
            loop();// 执行玩家代码
        }
        catch(e){
            if(e instanceof Error){
                /**
                 * 使用自己的handler
                 * 对某些一次做特殊处理的话能极大的加强代码的健壮度
                 */
                // TODO
                const errorMessage = `<br>${_.escape(e.stack)}`;
                console.log(`<text style="color:#ef9a9a">${errorMessage}</text>`);
            }
            else throw e// 处理不了，直接抛出
        }
    }
}
import clear from 'rollup-plugin-clear'
import screeps from 'rollup-plugin-screeps'
import copy from 'rollup-plugin-copy'
import typescript from 'rollup-plugin-typescript2'


/**
 * 实际上的入口
 * 编译的过程实际上就是运行了这个文件
 * 再从编译的入口开始打包所需的文件
 */

// 根据指定的目标获取对应的配置项
let config = process.env.DEST ? require("./.secret.json")[process.env.DEST] : undefined;
if (process.env.DEST && !config) throw new Error("无效目标，请检查 secret.json 中是否包含对应配置");

// 根据指定的配置决定是上传还是复制到文件夹
const pluginDeploy = config && config.copyPath ?
    // 复制到指定路径
    copy({
        targets: [
            {
                src: 'dist/main.js',
                dest: config.copyPath
            }
        ],
        hook: 'writeBundle',
        verbose: true
    }) :
    screeps({ config, dryRun: !config })//实际上，你输出的所有文件都会被绑定

export default {
    input: 'src/main.ts',//入口
    output: {
        file: 'dist/main.js',//出口
        format: 'cjs',//以commonJS形式编译，因为world用的就是这个
        sourcemap: false//最后决定不使用mapper以减少cpu的开销和保持输出代码的纯净性
    },
    plugins: [
        clear({ targets: ["dist"] }),// 清除上次编译成果
        typescript({ tsconfig: "./tsconfig.json" }),//编译ts
        pluginDeploy// 执行上传或者复制
    ]
};
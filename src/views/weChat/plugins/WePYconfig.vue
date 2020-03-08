<template>
    <div>
        <div>
            <h5 >wepy.config.js配置</h5>
            <pre>
        let prod = process.env.NODE_ENV === 'production';
        module.exports = {
            'target': 'dist',
            'source': 'src',
            'wpyExt': '.wpy',
            'compilers': {
                less: {
                    'compress': true
                },
                /*sass: {
                    'outputStyle': 'compressed'
                },
                postcss: {
                    plugins: [
                        cssnext({
                            browsers:['iOS 9', 'Android 4.4']
                        })
                    ]
                },*/
                babel: {
                    'presets': [
                        'es2015',
                        'stage-1'
                    ],
                    'plugins': [
                        'transform-export-extensions',
                        'syntax-export-extensions',
                        'transform-runtime'
                    ]
                }
            },
            'plugins': {
            }
        };

        if (prod) {
            // 压缩sass
            module.exports.compilers['sass'] = {'outputStyle': 'compressed'};
            // 压缩less
            module.exports.compilers['less'] = {'compress': true};
            // 压缩js
            module.exports.plugins = {
                'uglifyjs': {
                    filter: /\.js$/,
                    config: {
                    }
                },
                'imagemin': {
                    filter: /\.(jpg|png|jpeg)$/,
                    config: {
                        'jpg': {
                            quality: 80
                        },
                        'png': {
                            quality: 80
                        }
                    }
                }
            };
        }        
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name:"WePYconfig",
    data(){
        return{
            list:[
                {name:"npm install wepy-cli -g",explain:"全局安装或更新WePY命令行工具"},
                {name:"wepy init standard myproject",explain:"生成Demo开发项目"},
                {name:"wepy list",explain:"查看项目模板"},
                {name:"npm  install",explain:"安装依赖"},
                {name:"wepy build --watch",explain:"开启实时编译"},
            ]
        }
    }
}
</script>


/**
 * Created by wangning on 2016/3/25.
 */


var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');

//var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

var deps = [
    'react/dist/react.min.js',
    'react-dom/dist/react-dom.min.js'
];

var config = {
    entry: [
        'webpack/hot/dev-server',
        path.resolve(__dirname, 'app/main.js')
    ],
    resolve: {
        alias: {

        }
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
            exclude: /node_modules/,
            loader: 'babel', // 加载模块 "babel" 是 "babel-loader" 的缩写
            query: {
                presets: ['es2015','react']
            }
        }, {
            test: /\.css$/,             //css-loader会遍历 CSS 文件，然后找到 url() 表达式然后处理他们,style-loader 会把原来的 CSS 代码插入页面中的一个 style 标签中
            loader: 'style!css'
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25000'    //url-loader 图片如果不大于 25KB 的话要自动在它从属的 css 文件中转成 BASE64 字符串
        }, {
            test: /\.woff$/,        //选择一种格式,取决与你的项目，你可能可以选择出一种字体格式，如果你不考略 Opera Mini，所有的浏览器都支持 .woff 和 .svg 格式。问题是不同格式下在各种浏览器下字体看起来会有一点点不同。所以测试 .woff 和 .svg，然后找出能够在所有浏览器中看起来最好的那个。
            loader: 'url?limit=100000'
        },{
            test: path.resolve(node_modules, deps[0]),
            loader: "expose?React"
        }],
        noParse: [

        ]
    }
};

//deps.forEach(function (dep) {
//    var depPath = path.resolve(node_modules, dep);
//    config.resolve.alias[dep.split('/')[0]] = depPath;
//    config.module.noParse.push(depPath);
//});
//console.log(config.resolve.alias);
//console.log(config.module.noParse);

module.exports = config;
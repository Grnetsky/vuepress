module.exports =  {
    head: [
        // 添加百度统计
            ["script",
            {},
            'var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?2f39d4ae56c0a205004d3e19e862568d";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm, s);})();']

    ],
    Plugin: [require('jquery')],
    title: "蔡豪的个人博客 | 学习笔记中心",
    description: "第一个vue博客",
    lastUpdated: '最后更新时间',
    themeConfig: {
        lastUpdated: '最后更新时间',
        nav: [
            { text: '主页', link: '/' },
            { text: '踩坑集锦', link: '/errolog/'},
            { text:'蓝桥杯', link: '/blogs/lanqiao/'},
            { text: '笔记',
                items:[
                    // { text:'计算机基础',link:''},
                    { text:"设计模式",link:'/blogs/designmode/designmode'},
                    { text:"数据结构与算法",link:'/blogs/algorithms/'},
                    { text: '前端',
                    items:[
                        { text: 'javascript', link: '/blogs/javascript/' },
                        { text: 'jquery', link: '/blogs/jquery/jQuery从入门到精通笔记'},
                        { text: 'vue', link: '/blogs/vue/vue.md'},
                        {text: 'uniapp',link:'/blogs/uniapp/uniapp学习笔记.md'},
                        {text: '手写js',link:'/blogs/handwrite/'},
                        {text: 'webapi',link:'/blogs/webapi/'}


                    ]},
                    { text: '后端',
                        items:[
                            { text: 'python', link: '/blogs/python/'},
                            { text: 'Django', link: '/blogs/Django/'},
                            { text: 'celery', link: '/blogs/celery/'},
                            { text: 'rabbitmq', link: '/blogs/rabbitmq/'},
                            { text: 'socket.io',link: '/blogs/socket.io/'},
                            { text: 'elasticsearch',link: '/blogs/elasticsearch/Elasticsearch'},
                           ]
                    },
                    { text: '服务器',
                    items: [
                        { text: 'nginx', link: '/blogs/nginx/'},
                        { text: 'linux', link: '/blogs/linux/'},
                        { text: 'docker', link: '/blogs/docker/'},
                        { text: 'http协议',link: '/blogs/http协议/'},
                        { text: 'RPC', link:'/blogs/RPC/'}

                    ]},
                    { text:"数据库",items:[
                            { text:"Mysql",link:"/blogs/数据库/Mysql"},
                            { text: "redis",link: "/blogs/数据库/redis"}
                        ]},
                    { text: '工具',
                        items: [
                            { text: 'markdown', link: '/blogs/markdown/'}
                        ]
                    },
                    // {
                    //     text: "蓝桥杯",
                    //     items:[
                    //         { text: '蓝桥杯', link: '/blogs/lanqiao/' }
                    //     ]
                    // }
                ]
            },
            // { text: '个人实战网站', link: 'http://www.xroot.top' },
            { text: '面试题', link: '/interview/'},
            { text: '脚本', link: '/tools/'},
            { text: '资源', link: '/resource/'},
            { text: '教程', link: '/course/'},
            { text: '游戏', link: '/games/'},
            { text: 'GitHub', link: 'https://github.com/Grnetsky'},
            { text: 'gitee', link: 'https://gitee.com/CaihaoX'},
        ],
        sidebar:
            {
                '/blogs/javascript/': ['','JavaScript核心语法','javascript权威指南','js 函数中的call() apply() bind()方法','js数据流','js类型转换','代理反射API','跨域问题'],
                '/tools/':['','超星搜题脚本','cxtool_exam'],
                '/blogs/vue/':[''],
                '/errolog/': ['','axios跨域请求解决办法','关于django','理解 JavaScript 的 async await','浏览器控制台原理以及返回undefined的理解','深入浅出iframe'],
                '/blogs/markdown/':[''],
                '/games/':['','tablegame',],
                '/blogs/Django/':['','django rest framework','django-channels','django用户模块'],
                '/blogs/jquery/':['jQuery从入门到精通笔记'],
                '/blogs/python/':['','python进阶','django模型操作','drf 嵌套序列化','魔法方法.md','APScheduler','drf关联字段','python 多任务 协程','权限万能模板'],
                '/blogs/lanqiao/': ['','html+css','jquery','bootstrap','vue','elementUI','Echarts','LESS','Node','webpack'],
                '/blogs/rpc/':[''],
                '/blogs/algorithms/':['','稀疏数组','链表','队列'],
                '/blogs/handwrite/':['','promise'],
                '/blogs/webapi/':['','broadcastchannel'],
                '/interview/':['','front']
            },
        logo: '/image/home.jpeg'
    }
}

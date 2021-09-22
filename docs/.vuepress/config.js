module.exports =  {
    Plugin: [require('jquery')],
    title: "蔡豪的个人博客 | 资源站",
    description: "第一个vue博客",
    lastUpdated: '最后更新时间',
    themeConfig: {
        lastUpdated: '最后更新时间',
        nav: [
            { text: '主页', link: '/' },
            { text: '踩坑集锦', link: '/errolog/'},
            { text: '笔记',
                items:[
                    { text: '前端',
                    items:[
                        { text: 'html', link: '/blogs/html/'},
                        { text: 'css', link: '/blogs/css/'},
                        { text: 'javascript', link: '/blogs/javascript/JavaScript核心语法' },
                        { text: 'jquery', link: '/blogs/jquery/'},
                        { text: 'vue', link: '/blogs/vue/vue.md'},
                    ]},
                    { text: '后端',
                        items:[
                            { text: 'python', link: '/blogs/python/'},
                            { text: 'Django', link: '/blogs/Django/'},]
                    },
                    { text: '服务器',
                    items: [
                        { text: 'nginx', link: '/blogs/nginx/'},
                        { text: 'linux', link: '/blogs/linux/'}
                    ]},
                    { text: '工具',
                        items: [
                            { text: 'markdown', link: '/blogs/markdown/'}
                        ]
                    }
                ]
            },
            { text: '个人实战网站', link: 'http://www.xroot.top' },
            { text: '脚本', link: '/tools/'},
            { text: '资源', link: '/resource/'},
            { text: '游戏', link: '/games/'},
            { text: 'GitHub', link: 'https://github.com/Grnetsky'},
            { text: 'gitee', link: 'https://gitee.com/CaihaoX'},
        ],
        sidebar:
            {
                '/blogs/javascript/': ['JavaScript核心语法',],
                '/tools/':['','超星搜题脚本'],
                '/blogs/vue/':[''],
                '/errolog/': ['','关于django'],
                '/blogs/markdown/':[''],
                '/games/':['','tablegame']
            },
        logo: '/image/home.png'
    }
}

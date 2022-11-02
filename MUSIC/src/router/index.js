// 引入VueRouter插件库
import VueRouter from 'vue-router'

// 引入需要使用路由跳转的组件页面
import Main from '../views/main'

import Recommend from "../views/recommend"

import Singer from "../views/singer"
import SingerObtain from "../components/main/singer/singerobtain"
import SingerPlaypage from "../components/main/singer/singerplaypage"
import SingerPlaypageLyric from '../components/main/singer/Singerplaypage/singlyric'

import Rank from "../views/rank"
import RankEnroll from "../components/main/rank/rankenroll"

import Search from "../views/search"


// 创建并暴露配置
export default new VueRouter({
    // 路由的配置项
    routes:[
        {
            path:"/main",
            component:Main,
            children:[
                {
                    path:"/recommend",
                    component:Recommend
                },
                {
                    path:"/singer",
                    component:Singer,
                    children:[
                        {
                            name:"Obtain",
                            path:"singerobtain",
                            component:SingerObtain,     
                        },
                        {
                            name:"Playpage",
                            path:"singerplaypage",
                            component:SingerPlaypage,
                            children:[
                                {
                                    name:'Lyric',
                                    path:'lyric',
                                    component:SingerPlaypageLyric
                                }
                            ]
                        }
                    ]
                },
                {
                    path:"/rank",
                    component:Rank,
                    children:[
                        {
                            path:"Rankenroll",
                            component:RankEnroll,
                            meta:{
                                uid:''
                            }
                        },
                    ]
                },

            ]
        },
    ]
})
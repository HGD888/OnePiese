<template>
    <div>
        <MySwiper 
            :Arrimg="arrimg"
         />
         <SongHeetList
            :Arrall="arrall"
         />
         <Health
            :Album="album"
            @newHealth="newhealth"
         />
    </div>
</template>

<script>
    import axios from 'axios'

    import MySwiper from '../components/main/recommend/myswiper.vue'
    import SongHeetList from '../components/main/recommend/songsheetlist.vue'
    import Health from '../components/main/recommend/health.vue'

    export default {
        name:"recommend",
        data() {
            return {
                H:10,

                one:"/banner",
                two:"/homepage/dragon/ball",
                three:"/personalized",

                arrimg:{},
                arrall:[],
                album:[]
            }
        },
        components:{
            MySwiper,
            SongHeetList,
            Health
        },
        methods: {
            newhealth(s){
                this.H+=1
               if(this.H<=100){
                    axios.get(`http://localhost:3000${this.three}?limit=${this.H}`).then(
                    ok=>{
                        // 这个是遍历接口中所用照片，然后返回一个新的数组（牛逼）
                        // this.Arrperson=ok.data.result.songs.map(item=>(
                        //     {img:item.album.artist.img1v1Url})
                        // )
                        // this.arrall=ok.data      /playlist/highquality/tags
                        this.album=ok.data.result
                        },
                        err=>{
                            console.log(err,"hello")
                        }
                    )
               }
            }
        },
        watch:{
            
        },
        mounted() {
            axios.get(`http://localhost:3000${this.one}?offset=0&limit=30&year=2019&month=6`).then(
                    ok=>{
                        this.arrimg=ok.data.banners
                    },
                    err=>{
                        console.log(err,"hello")
                    }
                )
            axios.get(`http://localhost:3000${this.two}?limit=30`).then(
                    ok=>{
                        // 这个是遍历接口中所用照片，然后返回一个新的数组（牛逼）
                        // this.Arrperson=ok.data.result.songs.map(item=>(
                        //     {img:item.album.artist.img1v1Url})
                        // )
                        this.arrall=ok.data.data
                    },
                    err=>{
                        console.log(err,"hello")
                    }
                )
            axios.get(`http://localhost:3000${this.three}?limit=${this.H}`).then(
                    ok=>{
                        // 这个是遍历接口中所用照片，然后返回一个新的数组（牛逼）
                        // this.Arrperson=ok.data.result.songs.map(item=>(
                        //     {img:item.album.artist.img1v1Url})
                        // )
                        // this.arrall=ok.data      /playlist/highquality/tags
                        this.album=ok.data.result
                    },
                    err=>{
                        console.log(err,"hello")
                    }
                )
        }
    }
</script>

<style scoped>

</style>
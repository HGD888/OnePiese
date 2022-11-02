<template>
    <div>
        <keep-alive :include="['SingerHeader','SingerHealth']">
                <div v-if="this.$store.state.singerswitch">
                <SingerHeader 
                @All="ALL"
                />
                <SingerHealth 
                    :PushHealth="pushhealth"
                    @All="ALL"
                />
            </div>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>

    import axios from 'axios'
    import SingerHeader from '../components/main/singer/singerhearder.vue'
    import SingerHealth from '../components/main/singer/singerhealth.vue'
    export default {
        name:"singer",
        components:{
            SingerHeader,
            SingerHealth
        },
        data() {
            return {
                pushhealth:[],
            }
        },
        methods: {
           ALL(alls){
               axios.get(`http://localhost:3000/artist/list?type=${alls.one}&area=${alls.two}&initial=${alls.three}&limit=${alls.four}`).then(
                    ok=>{ 
                        this.pushhealth=ok.data.artists
                    },
                    err=>{
                        console.err(err.data)
                    }
               )
           }
        },
        mounted() {
            axios.get('http://localhost:3000/artist/list?type=-1&area=-1&limit=10').then(
                ok=>{
                    this.pushhealth=ok.data.artists
                },
                err=>{
                    console.err(err.data)
                }
            )
        },
    }
</script>

<style>

</style>
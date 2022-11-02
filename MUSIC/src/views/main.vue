<template>
    <div>
        <mainheader 
        headername="OonPiece"
        @topath="frompath"
        ></mainheader>

        <router-view></router-view>
    </div>
</template>

<script scoped>
    import mainheader from '../components/main/mainheader.vue'

    export default {
        name:"mian",
        components:{
            mainheader
        },
        methods: {
            frompath(path){
                console.log(path)
                this.$router.push(path)
            }
        }
    }
</script>

<style>

</style>
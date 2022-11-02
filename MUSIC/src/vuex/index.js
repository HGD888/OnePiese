import Vue from "vue"

import Vuex from "vuex"

Vue.use(Vuex)

var state={
    ALL:{
        one:0,
        two:-1,
        three:"A",
        four:10
    },
        one:0,
        two:0,
        three:0,
    D:true,
    singerswitch:true,
    singerall:{
        id:5781,
        name:"薛之谦"
    },

    // tail
    tailgqid:0,
    tailgqimg:"",
    tailgqname:"",
    tailgsname:"",
    tailgqUrl:"",
    imgrotate:false,
    XZrotate:false,
    XZsuspend:true,

    // rank
    rank:{
        data:'',
        name:'',
        uid:''
    },
    record:{
        back:true
    },

    //singer
    singer:[],

    //audio
    crrentTime:0,
    duration:0,
    crrent:null,
    crrenT:null
}

var mutations={
    // mian
    PINK(item,value){
        item.pink=value
    },
    ONE(item,i){
        item.one=i
    },
    TWO(item,i){
        item.two=i
    },
    THREE(item,i){
        item.three=i
    },

    // tail
    tailgqId(item,value){
        item.tailgqid=value
    },
    tailgqIMG(item,value){
        item.tailgqimg=value
    },
    tailgqNAME(item,value){
        item.tailgqname=value
    },
    tailgsNAME(item,value){
        item.tailgsname=value
    },
    tailgqURL(item,value){
        item.tailgqUrl=value
    },
    
    IMGrotate(item,or){
        item.imgrotate=or
    },
    XZRotate(item,or){
        item.XZrotate=or
    },
    XZSuspend(item,or){
        item.XZsuspend=or
    },
    

    one(item,i){
        item.ALL.one=i
    },
    two(item,i){
        item.ALL.two=i
    },
    three(item,i){
        item.ALL.three=i
    },
    four(item,i){
        item.ALL.four+=i
    },
    five(item,i){
        item.ALL.four=i
    },

    contrast(item){
        item.D=item.D
    },

    control(item){
        item.singerswitch=!item.singerswitch
    },

    ChangeID(item,value){
        item.singerall.id=value.id
        item.singerall.name=value.name
    },

    //rank
    datas(vontnext,value){
        vontnext.rank.data=value
    },
    names(vontnext,value){
        vontnext.rank.name=value
    },
    uids(vontnext,value){
        vontnext.rank.uid=value
    },
    records(vontnext,value){
        vontnext.record.back=value
    },

    // singer
    singers(vontnext,value){
        vontnext.singer=value
    },

    //audio
    crrentTimes(vontnext,value){
        vontnext.crrentTime=value
    },
    durations(vontnext,value){
        vontnext.duration=value
    },
    crrents(vontnext,value){
        vontnext.crrent=value
    },
    crrenTs(vontnext,value){
        vontnext.crrenT=value
    }
}

export default new Vuex.Store({
    state,
    mutations
})
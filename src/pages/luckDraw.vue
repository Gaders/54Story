<template>
    <div class="prize">
        <div class="prizegogal"  v-if="gogal">
            <div class="content">
                <prizelevel :level="prizelevel"></prizelevel>
            </div>
        </div>
        <div class="prizemiss" v-else>
            <div class="content">
                <prizelevel :level="prizelevel"></prizelevel>
            </div>
        </div>
    </div>
</template>
<script>
import prizelevel from "../components/prize/level"
import Axios from 'axios'
export default {
    name:'prize',
    data(){
        return{
            gogal:false,
            prizelevel:0
        }
    },
    components:{
        prizelevel
    },
    methods:{
        getprize(){
             const token = 'eyJjbGFzcyI6IjAyMTExODA0IiwiY29sbGVnZSI6IuWFieeUteW3peeoi+WtpumZoi/ph43luoblm73pmYXljYrlr7zkvZPlrabpmaIgIiwiZXhwIjoiMTAyMzA0MTcxODUiLCJoZWFkSW1nVXJsIjoiaHR0cDovL3RoaXJkd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyL0FuVU00VW1nRWJ1cnVCVXhxMW5ObVdDbUw2a0FNUFJkbEZYYWNsV2xNS3NPeHQzdzc1c0pOQWJRR2ZlaDRNMWdoWTdiZDl4aWI3bnQ1SHZpYXFSVU1PaHcvMTMyIiwiaWF0IjoiMTU3NTcwMDMwNSIsIm1ham9yIjoiIiwibmlja25hbWUiOiLlpKnkurrkuqbkuZ3oobAiLCJyZWFsTmFtZSI6IumZiOWFiOWLpCAgICAgICAgICIsInJlZElkIjoiZjVjNDA3YTA3YTJmMGE4NzJiZWIzNDkzMWY2MzRjY2Q0NGRlYmU0NCIsInN0dU51bSI6IjIwMTgyMTA2NTMiLCJzdWIiOiJ4YnMifQ==.xQLRI2J/HqLuAb0yQ+5KsuU2yG0tjz3/4zentmXjLCdTtjcTuPFAk0f7JUcpWXUg94WKlOgs0OouIkZFviLIpf/o6cJlszAT8btXZhmjXh4LR7pSf27DJxv5XblObA8p1bdVFYp/EmBKKnphPAAvcEVU1Pr8IFZ8kTZvEKSXp1a4IKJR4HxQGeDIryms2ydGM2CqTDR4LluXD/0H8y2O0G+GcQaexwzczZbGB1sjeYR0DN2tbp3KQT8Qxb516otWgeIg5IWOxRVD9HKJtdIVrxR1OORKus0wEjx2D/Dl0IEqsiHW1rDfQS8r4q2s3/vaIs9QObs3iKYU+IDMmwu7Sg=='
             const url = `http://i9ph3k.natappfree.cc/prize?token=${token}`
             const that = this
             Axios.post(url).then(res=>{
                 const prize = res.data.level
                 if(prize === 0){
                     that.gogal = false
                 }else{
                     that.gogal = true
                 }
                 that.prizelevel = prize
                 console.log(res)
             })            
        }
    },
    mounted(){
        this.getprize()
    }
}
</script>
<style lang="scss" scoped>
.prize{
    width: 750px;
    height: 100vh;
    background-size: 100% 100%;
    background-position: center 0;
    background-repeat:  no-repeat;    
    .prizegogal , .prizemiss{
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
        background-position: center 0;
        background-repeat:  no-repeat;    
        .content{
            position: absolute;
            width: 450px;
            height: 53vh;
            margin-left: 140px;
            margin-top: 24vh; 
        }         
    }
    .prizegogal{
        background-image: url(../assets/imgs/prize/prizegogal.png);
    }
    .prizemiss{
        background-image: url(../assets/imgs/prize/prizemiss.png);
    }
}
</style>
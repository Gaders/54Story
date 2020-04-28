<template>
    <div class="card">
        <div class="content">
            <div class="num">
                <span>{{numofprize}}</span>
            </div>
            <div class="card_show">
                <div v-for="(item , index) in backgroudlist" :key="item" :class="item">
                    <span>{{cardlist[index]}}</span>
                </div>
            </div>
            <div class="button_no"  v-if="numofprize == 0">
            </div>
            <div class="button_yes" @click="toPrize" v-else >
                <p>({{numofprize}})</p>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name:'card',
    data(){
        return{
            backgroudlist:[
                "aiguo",
                "jinbu",
                "mingzu",
                "kexue"
            ],
            cardlist:[],
            numofprize:1,
        }
    },
    mounted(){
        this.getcardnum()
    },
    methods:{
        toPrize(){
            this.$router.push({path: '/luckDraw'})
        },
        getcardnum(){
             const token = 'eyJjbGFzcyI6IjAyMTExODA0IiwiY29sbGVnZSI6IuWFieeUteW3peeoi+WtpumZoi/ph43luoblm73pmYXljYrlr7zkvZPlrabpmaIgIiwiZXhwIjoiMTAyMzA0MTcxODUiLCJoZWFkSW1nVXJsIjoiaHR0cDovL3RoaXJkd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyL0FuVU00VW1nRWJ1cnVCVXhxMW5ObVdDbUw2a0FNUFJkbEZYYWNsV2xNS3NPeHQzdzc1c0pOQWJRR2ZlaDRNMWdoWTdiZDl4aWI3bnQ1SHZpYXFSVU1PaHcvMTMyIiwiaWF0IjoiMTU3NTcwMDMwNSIsIm1ham9yIjoiIiwibmlja25hbWUiOiLlpKnkurrkuqbkuZ3oobAiLCJyZWFsTmFtZSI6IumZiOWFiOWLpCAgICAgICAgICIsInJlZElkIjoiZjVjNDA3YTA3YTJmMGE4NzJiZWIzNDkzMWY2MzRjY2Q0NGRlYmU0NCIsInN0dU51bSI6IjIwMTgyMTA2NTMiLCJzdWIiOiJ4YnMifQ==.xQLRI2J/HqLuAb0yQ+5KsuU2yG0tjz3/4zentmXjLCdTtjcTuPFAk0f7JUcpWXUg94WKlOgs0OouIkZFviLIpf/o6cJlszAT8btXZhmjXh4LR7pSf27DJxv5XblObA8p1bdVFYp/EmBKKnphPAAvcEVU1Pr8IFZ8kTZvEKSXp1a4IKJR4HxQGeDIryms2ydGM2CqTDR4LluXD/0H8y2O0G+GcQaexwzczZbGB1sjeYR0DN2tbp3KQT8Qxb516otWgeIg5IWOxRVD9HKJtdIVrxR1OORKus0wEjx2D/Dl0IEqsiHW1rDfQS8r4q2s3/vaIs9QObs3iKYU+IDMmwu7Sg=='
             const url = `http://i9ph3k.natappfree.cc/card?token=${token}`
             const that = this
             axios.post(url).then(res=>{
                 const {card} = res.data
                 that.cardlist[0] = card.county
                 that.cardlist[1] = card.process
                 that.cardlist[2] = card.democracy
                 that.cardlist[3] = card.science 
                 that.numofprize =  Math.min.apply(null, that.cardlist)
                 console.log(that.cardlist)
                 console.log(res)
             })          
        }

    }
}
</script>
<style lang="scss" scoped>
.card{
    width: 750px;
    height: 100vh;
    background-size: 100% 100%;
    background-position: center 0;
    background-repeat:  no-repeat;    
    background-image: url(../assets/imgs/card/newback.png);
    .content{
        position: absolute;
        width: 520px;
        height: 72vh;
        margin-top: 15vh;
        margin-left: 105px;
        .num{
            width: 100%;
            height: 3vh;
            span{
                display: block;
                width: 36px;
                font-size: 3vh;
                line-height: 3.5vh;
                margin-left: 465px;
                text-align: center;
                color:#70895a;
            }
        }
        .card_show{
            width: 100%;
            height: 54vh;
            margin-top: 4vh;
            display: flex;
            justify-content:space-between;
            flex-wrap:wrap;
            div{
                width: 220px;
                height: 24vh;
                background-position: center 0;
                background-repeat: no-repeat;
                background-size: cover;
                -webkit-background-size: 100% 100%;
                span{
                    display: block;
                    width: 80px;
                    height: 4vh;
                    position: relative;
                    text-align: center;
                    line-height: 4vh;
                    top: 18.8vh;
                    left: 125px;
                    color: #ffffff;
                }                  
            }
        }
        .button_yes , .button_no{
            width: 360px;
            height: 8vh;
            margin-top:2vh;
            margin-left: 90px;
            line-height: 7vh;
            background-position: center 0;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            -webkit-background-size: 100% 100%;              
            p{
                width: 100px;
                height: 100%;
                margin-left: 240px;
                color: #ffffff;
            }
        }
        .button_yes{
            background-image: url(../assets/imgs/card/buttonactive.png);
        }
        .button_no{
            background-image: url(../assets/imgs/card/buttonnoactive.png);
        }
    }  
}

.aiguo{
    background-image: url(../assets/imgs/card/aiguo.png);
}
.jinbu{
    background-image: url(../assets/imgs/card/jinbu.png);
}
.mingzu{
    background-image: url(../assets/imgs/card/mingzu.png);
}
.kexue{
    background-image: url(../assets/imgs/card/kexue.png);
}
</style>
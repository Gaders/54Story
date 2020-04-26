<template>
    <div class="card">
        <div class="content">
            <div class="num">
                <span>5</span>
            </div>
            <div class="card_show">
                <div v-for="item in backgroudlist" :key="item" :class="item">
                    <span>1</span>
                </div>
            </div>
            <div class="button_no"  v-if="numofprize === 0">
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
        const url = ""
        axios.post(url).then(res=>{
            console.log(res)
        })
    },
    methods:{
        toPrize(){
            this.$router.push({path: '/luckDraw'})
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
                line-height: 3vh;
                margin-left: 460px;
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
                width: 210px;
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
                    top: 18.6vh;
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
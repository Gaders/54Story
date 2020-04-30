<template>
    <div class="card">
        <div class="content">
            <div class="num">
                <span>{{numofprize}}</span>
            </div>
            <div :class="isIphone ? ['card_show' ,'ipone5'] :  ['card_show','iponex']">
                <div v-for="(item) in backgroudlist" :key="item" :class="item">
                    <span>{{cardlist[item]}}</span>
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
import {isIphoneX}  from "../api/test"
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
            cardlist:{
                "aiguo":0,
                "jinbu":0,
                "mingzu":0,
                "kexue":0
            },
            numofprize:0,
            isIphone:false,
            url:'http://127.0.0.1:8001'
        }
    },
    mounted(){
        this.getcardnum()
        this.isIphone = !isIphoneX()
    },
    methods:{
        toPrize(){
             const token = localStorage.getItem('token')
             const url = `${this.url}/prize?token=${token}`
             const that = this
             axios.post(url).then(res=>{
             const prize = res.data.level
             that.$router.push({path: `/luckDraw?level=${prize}`})
             })        
        },
        getcardnum(){
             const token = localStorage.getItem('token')
             const url = `${this.url}/card?token=${token}`
             const that = this
             axios.post(url).then(res=>{
                 const {card} = res.data
                 that.cardlist[that.backgroudlist[0]] = card.county
                 that.cardlist[that.backgroudlist[1]] = card.process
                 that.cardlist[that.backgroudlist[2]] = card.democracy
                 that.cardlist[that.backgroudlist[3]] = card.science 
                 const cardnum = [card.county , card.process ,card.democracy , card.science]
                 that.numofprize =  Math.min.apply(null,cardnum)
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
    font-family: 'STHupo';
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
                line-height: 4vh;
                margin-left: 465px;
                text-align: center;
                color:#70895a;
            }
        }
        .ipone5{
            div{
                 width: 210px;
                height: 24vh;  
                span{
                    top:18.8vh;
                    left: 120px;                
                    }             
            }
        }
        .iponex{
            div{
                width: 225px;
                height: 23vh;
                span{
                    top: 18vh;
                    left: 130px;                
                }             
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
                background-position: center 0;
                background-repeat: no-repeat;
                background-size: cover;
                -webkit-background-size:100% 100%;
                span{
                    font-size: 2.5vh;
                    display: block;
                    width: 80px;
                    height: 4vh;
                    position: relative;
                    text-align: center;
                    line-height: 4vh;
                    color: #efe6e0;
                }                  
            }
        }
        .button_yes , .button_no{
            width: 360px;
            height: 8vh;
            margin-top:2vh;
            margin-left: 90px;
            line-height: 8vh;
            background-position: center 0;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            -webkit-background-size: 100% 100%;              
            p{
                width: 100px;
                height: 100%;
                margin-left: 252px;
                color: #efe6e0;
                
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
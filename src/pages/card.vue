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
            <div class="button">
                <p>(5)</p>
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
            cardlist:[]
        }
    },
    mounted(){
        const url = ""
        axios.post(url).then(res=>{
            console.log(res)
        })
    }
}
</script>
<style lang="scss" scoped>
.card{
    width: 750px;
    height: 1334px;
    background-image: url(../assets/imgs/card/back.png);
    background-position: center 0;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;  
    .content{
        position: absolute;
        width: 580px;
        height: 960px;
        margin-top: 190px;
        margin-left: 75px;
        .num{
            width: 100%;
            height: 42px;
            span{
                display: block;
                width: 36px;
                height: 100%;
                line-height: 60px;
                margin-left: 520px;
                text-align: center;
                color:#70895a;
            }
        }
        .card_show{
            width: 100%;
            height: 705px;
            margin-top: 60px;
            display: flex;
            justify-content:space-between;
            flex-wrap:wrap;
            div{
                width: 220px;
                height: 300px;
                margin-top: 20px;
                background-position: center 0;
                background-repeat: no-repeat;
                background-size: cover;
                -webkit-background-size: cover;
                span{
                    display: block;
                    width: 80px;
                    height: 40px;
                    position: relative;
                    text-align: center;
                    line-height: 40px;
                    top: 238px;
                    left: 125px;
                    color: #ffffff;
                }                  
            }
        }
        .button{
            width: 430px;
            height: 100px;
            margin-top:40px;
            margin-left: 90px;
            line-height: 115px;
            p{
                width: 100px;
                height: 100%;
                margin-left: 280px;
                color: #ffffff;
            }
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
<template>
    <div class="background">
        <storyInfo v-on="{changePage:changePage, getCurrentPage:getCurrentPage}"></storyInfo>
        <!--  判断如果该故事已经被探索则显示已探索按钮 -->
        <div class="button" v-if="StoryNum[currentPage] == 1">
            已探索
        </div>
        <div class="button" @click="toGetCard()" v-if="StoryNum[currentPage] == 0">
            <div class="mun" v-bind:style="{backgroundImage: backgroundTime[time + 1]}">
            </div>
        </div>
        <getCard v-if="getCardWindow" v-on:shadowClose="shadowClose" :cardId="cardId"></getCard>
        <div class="afterGetCard" v-if="afterGetCard">
            你获得了{{card[cardId]}}卡片
        </div>
    </div>
</template>

<script>
import {updataCard,  getStoryNum, storyNum1 } from '../api/test'
import getCard from '../components/story/getCard'
import storyInfo from '../components/story/storyInfo'

export default {
    name: 'story',
    data() {    
        return {
            getCardWindow : false,
            StoryNum:[0,0,0,0],
            currentPage: 0,
            time: 4,
            cardId: 0,
            afterGetCard: false,
            card: ['爱国', '进步', '科学', '民主'],
            backgroundTime: ['url('+require('../assets/imgs/story/0.png'),'url('+require('../assets/imgs/story/1.png'), 'url('+require('../assets/imgs/story/2.png'), 'url('+require('../assets/imgs/story/3.png'), 'url('+require('../assets/imgs/story/4.png'), 'url('+require('../assets/imgs/story/5.png')],
        }
    }, 
    methods: {
        toGetCard() {
            if(this.time == -1) {
                this.getCardWindow = true
                this.cardId = Math.floor(Math.random()*4) + 1
                updataCard(1, this.currentPage + 1, this.cardId) 
            }  
        },
        timing() {
            this.timer = setInterval (() => {
                if(this.time > -1)
                    this.time -= 1
            }, 1000)
        },
        changePage(data) {
            this.time = data
        },
        getCurrentPage(data) {
            this.currentPage = data
        },
        shadowClose(data) {
            this.getCardWindow = data
            this.afterGetCard = true
            setTimeout(() => {
                this.afterGetCard = false
            })
        }
    },
    created() {
        this.timing()
        //获取哪些故事已经被探索过
        this.StoryNum = getStoryNum().then(()=> {
            this.StoryNum = storyNum1[0]
        })
    },
    components: {
        getCard,
        storyInfo,
    }   
}
</script>

<style lang="scss" scoped>
.background {
    width: 100vw;
    height: 100vh;
    background-size: 100% 100%;
    background-image: url(../assets/imgs/story/storyBg1.png);
}
.yellow {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-size: 100% 100%;
    background-image: url(../assets/yellow.png);
    opacity: 0.5;
}

.button {
    position: absolute;
    bottom: 179px;
    right: 192px;
    width: 378px;
    height: 106px;
    background-size: 100% 100%;
    background-image: url(../assets/imgs/story/buttonBefore.png);
    .mun {
        position: relative;
        top: 32px;
        left: 247px;;
        width: 59px;
        height: 34px;
        background-size: 100% 100%;
    }
}
.afterGetCard {
    font-family: 'huakang';
    color: rgb(211, 138, 138);
    font-size: 36px;
    margin: 0 auto;
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 25vh;
}
</style>
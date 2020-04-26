<template>
    <div class="background">
        <storyInfo v-on="{changePage:changePage, getCurrentPage:getCurrentPage}"></storyInfo>
        <div class="button" @click="toGetCard()">
            <div class="mun" v-bind:style="{backgroundImage: backgroundTime[time]}">
            </div>
        </div>
        <getCard v-if="getCardWindow" v-on:shadowClose="shadowClose" :cardId="cardId"></getCard>
    </div>
</template>

<script>
import {updataCard} from '../api/test'
import getCard from '../components/story/getCard'
import storyInfo from '../components/story/storyInfo'

export default {
    name: 'story',
    data() {    
        return {
            getCardWindow : false,
            currentPage: 0,
            time: 4,
            cardId: 0,
            backgroundTime: ['url('+require('../assets/imgs/story/1.png'), 'url('+require('../assets/imgs/story/2.png'), 'url('+require('../assets/imgs/story/3.png'), 'url('+require('../assets/imgs/story/4.png'), 'url('+require('../assets/imgs/story/5.png')],
        }
    }, 
    methods: {
        toGetCard() {
            if(!this.time == 0) {
                return
            }
            this.getCardWindow = true
            this.cardId = Math.floor(Math.random()*4) + 1
            updataCard(1, this.currentPage, this.cardId) 
        },
        timing() {
            this.timer = setInterval (() => {
                if(this.time > 0)
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
        }
    },
    created() {
        this.timing()
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
    background-image: url(../assets/imgs/story/story1.png);
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
     /* .five {
            background-image: url(../assets/imgs/story/5.png);
        }
        .four {
            background-image: url(../assets/imgs/story/4.png);
        }
        .three {
            background-image: url(../assets/imgs/story/3.png);
        }
        .two {
            background-image: url(../assets/imgs/story/2.png);
        }
        .one {
            background-image: url(../assets/imgs/story/1.png);
        } */
}
</style>
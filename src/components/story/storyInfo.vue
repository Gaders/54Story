<template>
<!-- 制作一个框架包裹slider -->
<div class="storyInfoAll" >
    <div class="arrowL" @click="left"></div>
    <div class="arrowR" @click="right"></div>
    <div class="storyInfo">
        <Swiper :autoPlay='false' :showIndicator='false' ref="swiper" @transtionend="getNum">
            <Slide class="img">
            </Slide>
            <Slide>
                2
            </Slide>
            <Slide>
                3
            </Slide>
        </Swiper>
    </div>
    <div class="info">
        <p>
            不到25岁的他们，将青春撒于狼牙山，献于祖国。的的他们视死如归，在最后时刻任然坚守，用石块还击，他们宁死不屈，毁掉枪支，义无反顾，纵身跳下数十丈深的悬崖25岁的他们，将青春撒于狼牙山，献于祖国。们视死如归，在最后时刻任然坚守，用石块还击，他们宁死不屈，毁掉枪支不到25岁的他们，将青春撒于狼牙山，献于祖国。的的他们视死如归，在最后时刻任然坚守，用石块还击，他们宁死不屈，毁掉枪支，义无反顾，纵身跳下数十丈深的悬崖25岁的他们，将青春撒于狼牙山，献于祖国。们视死如归，在最后时刻任然坚守，用石块还击，他们宁死不屈，毁掉枪支
        </p>
    </div>
</div>
</template>
<script>
import { Swiper, Slide } from 'vue-swiper-component';

export default {
    name: 'getCard',
    components: {
    Swiper,
    Slide
    },
    data() {
        return {
            currentPage: 0
        }
    },   
    methods: {
        left() {
            console.log(1)
            this.$refs.swiper.prevSlide();
        },
        right() {
            this.$refs.swiper.nextSlide();
        },
        getNum(data) {
           this.currentPage = data
           this.$emit('changePage', 4)
           this.$emit('getCurrentPage', data)
        }
    } 
}
</script>
<style lang="scss" scoped>

.storyInfoAll {
    width: 750px;
    height: 500px;
    position: absolute;
    z-index: 1;
}
.storyInfo {
    width: 554px;
    height: 438px;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
    top: 6.05vh;
}
.img {
    width: 554px;
    height: 438px;
    background-size: 100% 100%;
    background-image: url(../../assets/imgs/story/story1-1.png);
}
.arrowL {
    position: absolute;
    left: 40px;
    top: 22.861vh;
    background-size: 100% 100%;
    width: 49px;
    height: 64px;
    background-image: url(../../assets/imgs/story/arrowL.png);
}
.arrowR {
    position: absolute;
    right: 40px;
    top: 23.26vh;
    background-size: 100% 100%;
    width: 49px;
    height: 64px;
    background-image: url(../../assets/imgs/story/arrowR.png);
}
.info {
    position: absolute;
    top: 45vh;
    width: 750px;
    font-size: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        display: block;
        margin: 0 auto;
        width: 554px;
        line-height: 30px;
        font-family: 'huakang';
        color: #862526;
    }
}
</style>
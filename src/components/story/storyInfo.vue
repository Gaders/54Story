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
    width: 500px;
    height: 500px;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
    top: 200px;
}
.img {
    width: 500px;
    height: 500px;
    background-size: 100% 100%;
    background-image: url(../../assets/imgs/story/aiguo.png);
}
.arrowL {
    position: absolute;
    left: 50px;
    top: 362px;
    background-size: 100% 100%;
    width: 49px;
    height: 64px;
    background-image: url(../../assets/imgs/story/arrowL.png);
}
.arrowR {
    position: absolute;
    right: 50px;
    top: 362px;
    background-size: 100% 100%;
    width: 49px;
    height: 64px;
    background-image: url(../../assets/imgs/story/arrowR.png);
}
</style>
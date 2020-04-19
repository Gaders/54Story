<template>
    <div class="tw">
        <div class="first"></div>
        <div class="second"></div>
        <div class="third"></div>
        <div class="button"></div>
    </div>
</template>

<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.tw {
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-image: url(../assets/imgs/home/homeBg.png);
}
.first {
    width: 36vw;
    height: 37.16vh;
    background-size: cover;
    background-image: url(../assets/imgs/home/1.png);
}
.second {
    width: 49.07vw;
    height: 37.31vh;
    background-size: cover;
    background-image: url(../assets/imgs/home/2.png);
    transform: rotate(-0.5deg);
}

.third {
    width: 85.3vw;
    height: 17.38vh;
    background-size: cover;
    background-image: url(../assets/imgs/home/3.png);
}
.button {
    width: 28vw;
    height: 19.7vh;
    background-size: cover;
    background-image: url(../assets/imgs/home/button.png);
}
</style>
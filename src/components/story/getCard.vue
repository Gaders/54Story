<template>
    <div class="getCard">
        <div class="shadow"></div>
        <div class="card">{{cardId}}</div>
        
        <div class="buttonAfter" @click="shadowClose"></div>
    </div>
</template>

<script>
export default {
    name: 'getCard',
    props: {
        cardId: Number
    },
    data() {
        return {

        }
    },    
    methods: {
        shadowClose() {
            alert("你获得了" + this.cardId + "卡片")
            this.$emit('shadowClose', false)
        }
    }
}
</script>

<style lang="scss" scoped>
.getCard {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    .shadow {
        position: absolute;
        z-index: 1;
        width: 100vw;
        height: 100vh;
        background-color: black;
        opacity: 0.5;
    }
    .card {
        position: relative;
        z-index: 2;
        top: 230px;
        width:308px;
        height: 410px;
        background-size: 100% 100%;
        background-image: url(../../assets/imgs/story/aiguo.png);
    };
    .buttonAfter {
        position: relative;
        z-index: 2;
        top: 433px;
        width: 413px;
        height: 98px;
        background-size: 100% 100%;
        background-image: url(../../assets/imgs/story/buttonAfter.png);
    }
}
</style>
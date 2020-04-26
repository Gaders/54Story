<template>
    <div class="button" @click="toCard">
        <p><slot></slot></p>
    </div>
</template>

<script>
export default {
    name: 'buttonToCard',
    data() {
        return {
        }
    },
    methods: {
        toCard() {
            this.$router.push({path: 'card'})
        }
    }
}
</script>

<style lang="scss" scoped>
.button {
    width: 210px;
    height: 238px;
    background-size: 100% 100%;
    background-image: url(../../assets/imgs/home/button.png);
    p {
        color: white;
        position: absolute;
        right: 60px;
        top: 0.9vh;
        font-size: 32px;
    }
}
</style>
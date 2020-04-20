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
    position: absolute;
    top: 77vh;
    left: 69vw;
    width: 28vw;
    height: 19.7vh;
    background-size: cover;
    background-image: url(../../assets/imgs/home/button.png);
    p {
        color: white;
        font-size: 18px;
        margin-top: 0.5vh;
        margin-left: 16.8vw;
    }
}
</style>
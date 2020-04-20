<template>
    <div class="tw">
        <div class="first">
            <p>0/4</p>
        </div>
        <div class="second">
            <p>0/4</p>
        </div>
        <div class="third">
            <p>0/4</p>
        </div>
        <buttonToCard>4</buttonToCard>
    </div>
</template>

<script>
import {isIphoneX} from '../api/test'
import buttonToCard from '../components/home/buttonToCard'

export default {
    name: 'home',
    data() {
        return {
            iphoneX: false
        }
    },
    methods: {
        thisIsIphoneX () {
            this.iphoneX = isIphoneX()
        },
    },
    mounted() {
        this.thisIsIphoneX()
    },
    components: {
        buttonToCard,
    },

}
</script>
<style lang="scss" scoped>
.tw {
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-image: url(../assets/imgs/home/noneBg.png);
}
.first {
    margin-top: 30vh;
    float: left;
    width: 43vw;
    height: 40vh;
    outline: red;
    p {
        color: white;
        font-size: 18px;
        margin-left: 30vw;
        margin-top: 1.5vh;
    }
}
.second {
    margin-top: 30vh;
    float: left;
    width: 57vw;
    height: 40vh;
    outline: red;
    p {
        color: white;
        font-size: 18px;
        margin-left: 37vw;
        margin-top: 1vh;
    }
}
.third {
    float: left;
    width: 100vw;
    height: 17vh;
    outline: red;
    p {
        color: white;
        font-size: 18px;
        margin-left: 80vw;
        
    }
}

</style>
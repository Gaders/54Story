<template>
    <div class="tw">
        <div class="title"></div>
        <div class="special"></div>
        <div class="first">
            <p>{{storyNum[0]}}/4</p>
        </div>
        <div class="second">
            <p>{{storyNum[1]}}/4</p>
        </div>
        <div class="third">
            <p>{{storyNum[2]}}/4</p>
        </div>
        <buttonToCard class="btn">{{cardNum}}</buttonToCard>
    </div>
</template>

<script>
import {/* getCard, getStory, */ isIphoneX} from '../api/test'
import buttonToCard from '../components/home/buttonToCard'

export default {
    name: 'home',
    data() {
        return {
            iphoneX: false,
            cardNum: 0,
            storyNum: ['']
        }
    },
    methods: {
        thisIsIphoneX () {
            this.iphoneX = isIphoneX()
        },
        
    },
    mounted() {
        this.thisIsIphoneX()
        /* this.cardNum = getCard()
        this.storyNum = getStory() */
    },
    components: {
        buttonToCard,
    },

}
</script>
<style lang="scss" scoped>
.tw {
    width: 750px;
    height: 100vh;
    background-size: 100% 100%;
    background-position: center 0;
    background-repeat:  no-repeat;
    background-image: url(../assets/imgs/home/thirdBg.png);
}
.title {
    width: 750px;
    height: 32vh;
}

.special {
    float: left;
    position: relative;
    left: 20px;
    width: 375px;
    height: 28.2vh;
}
.first {
    float: left;
    position: relative;
    left: 50px;
    width: 271px;
    height: 28.2vh;
    outline: red;
    p {
        color: white;
        font-size: 32px;
        text-align: right;
    }
}
.second {
    float: left;
    position: relative;
    top: 2vh;
    left: 40px;
    width: 251px;
    height: 25vh;
    outline: red;
    p {
        color: white;
        font-size: 32px;
        text-align: right;
        line-height: 45px;
       
    }
}
.third {
    float: left;
    position: relative;
    top: 2vh;
    left: 50px;
    width: 406px;
    height: 25vh;
    outline: red;
    p {
        color: white;
        font-size: 32px;
        text-align: right;
    }
}
.btn {
    position: absolute;
    top: 77.5vh;
    left: 520px;
}

</style>
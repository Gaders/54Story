<template>
    <div class="tw">
        <div class="title"></div>
        <div class="special"></div>
        <div class="first" @click="toStory('Frist')">
            <p>{{storyNum1[0]}}/4</p>
        </div>
        <div class="second">
            <p>{{storyNum1[1]}}/4</p>
        </div>
        <div class="third">
            <p>{{storyNum1[2]}}/4</p>
        </div>
        <buttonToCard class="btn">{{cardNum}}</buttonToCard>
    </div>
</template>

<script>
import  {getStory,getCard, isIphoneX, cardNum1, storyNum1} from '../api/test'
import buttonToCard from '../components/home/buttonToCard'

export default {
    name: 'home',
    data() {
        return {
            iphoneX: false,
            cardNum: 0,
            storyNum1: [0,0,0]
        }
    },
    methods: {
        thisIsIphoneX () {
            this.iphoneX = isIphoneX()
        },
        toStory(data) {
            this.$router.push({path: 'story' + data})
        }
    },
    /* beforeCreate() {
        var token = document.location.href.split('/?token=')[1];
        if (token && token.length) {
            token = token.split('#/')[0];
            document.location.hash = '#/';
            token = token.replace(/%2F/g, '/');
            token = token.replace(/%3D/g, '=');
            token = token.replace(/%20/g, '+');

            localStorage.setItem('token', token);
        }
        if (!localStorage.getItem('token') && !token) {
            window.location.href =
            'https://wx.redrock.team/magicloop/rushb?b=' + encodeURI('http://i9ph3k.natappfree.cc')+ '&scope=student';
            
        }
    }, */
    mounted() {
        this.thisIsIphoneX()
        this.cardNum = getCard().then(()=> {
            this.cardNum = cardNum1
        }) 
        
        this.storyNum = getStory().then(()=> {
            this.storyNum1 = storyNum1
        }) 
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
    background-image: url(../assets/imgs/home/third.png);
    font-family: 'STHupo';
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
        font-size: 26px;
        text-align: right;
        position: relative;
        left: -12px;
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
        font-size: 26px;
        text-align: right;
        line-height: 45px;
        position: relative;
        left: -12px;
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
        font-size: 26px;
        text-align: right;
        position: relative;
        left: -130px;
        top: 5px;
    }
}
.btn {
    position: absolute;
    top: 77.5vh;
    left: 520px;
}

</style>
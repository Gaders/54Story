<template>
<!-- 制作一个框架包裹slider -->
<div class="storyInfoAll" :class="{storyInfoAllX: iphoneX}">
    <div class="arrowL" @click="left" :class="{arrowLX: iphoneX}"></div>
    <div class="arrowR" @click="right" :class="{arrowRX: iphoneX}"></div>
    <div class="storyInfo">
        <Swiper :autoPlay='false' :showIndicator='false' ref="swiper" @transtionend="getNum">
            <Slide class="img1">
            </Slide>
            <Slide class="img2">
            </Slide>
            <Slide class="img3">
            </Slide>
            <Slide class="img4">
            </Slide>
            <Slide class="img5">
            </Slide>
        </Swiper>
    </div>
    <div class="info" :class="{infoX: iphoneX}">
        <p v-if="currentPage == 0">
            17岁，邓稼先在西南联大极端艰苦的办学条件下，以优异成绩圆满毕业；24岁，为学习更先进知识报效祖国，他只身赴美求学；26岁，他仅用不到两年时间便读满学分并通过博士学位答辩，人称“娃娃博士”，并于当年毅然放弃美国优厚的待遇和科研条件，归国投入中国近代物理研究所建设；34岁，他服从组织决定，前往大漠戈壁，隐姓埋名投身原子弹设计研究，从此将毕生心血融入共和国核军工事业，被誉为“两弹元勋”。
        </p>
        <p v-if="currentPage == 1">
            21岁，黄旭华以专业成绩第一名考取国立交通大学，毕业后先后在上海军管会船舶建造处、上海招商局工作。33岁，他跟随苏联专家学习潜艇设计制造技术，并于次年参与并领导中国核潜艇的研究设计，是首批入选也是唯一坚持到最后的研究员。在隐姓埋名、驻守荒岛的30多年里，他带领团队用创新思维解决关键问题，用算盘、尺子计算复杂数据，用异于常人的坚守，于1970成功研制中国第一艘攻击型核潜艇“长征一号”，被誉为“中国核潜艇之父”。
        </p>
        <p v-if="currentPage == 2">
            1959年，19岁的雷锋以《我决心应召》为题在《矿报》发表文章，决心入伍，次年他参加中国人民解放军，并于当年加入中国共产党。1962年，雷锋在执行工作任务时，意外被车轮打滑碰倒的电线杆砸中，经抢救无效身亡。雷锋同志的一生短暂却绽放着青春的光芒，他治沩、学农、服务工矿、投身军营，身体力行的全心全意为人民服务，以甘当“螺丝钉”的精神，干一行，爱一行，在平凡的岗位上作出了不平凡的事迹，习总书记赞誉其为“民族的脊梁”。
        </p>
        <p v-if="currentPage == 3">
            1956年，年仅23岁的陈景润发表《塔內问题》，改进了华罗庚先生《堆垒素数论》的结果。1973年，他发表了著名论文《大偶数表为一个素数及一个不超过二个素数的乘积之和》（即“1+2”），在国际数学界引起巨大轰动，被公认为是对哥德巴赫猜想研究的重大贡献。纵览一生，他以超人的勤奋和顽强的毅力，将青春热血倾注在数学研究上，每天工作12个小时以上，在遭受疾病折磨时，也从未停止过自己的追求，成为激励一代又一代青年勇攀科学高峰的典范。
        </p>
        <p v-if="currentPage == 4">
            宁可少活二十年，拼命也要拿下大油田”的呐喊，是王进喜顽强意志和冲天干劲的真实写照。1950年，他通过考试成为新中国第一代钻井工人，并在艰苦的钻井生产实践中成长为一名共产党员。1960年，37岁的他率领1205钻井队加入东北松辽石油大会战，在交通不便、吃住都愁的艰苦条件下，用人拉肩扛、盆端桶提的方法打出了大庆第一口油井，创造了年进尺10万米的世界钻井纪录，成为中国工业战线一面火红的旗帜，他个人也被誉为“铁人”。
        </p>
    </div>
</div>
</template>
<script>
import { Swiper, Slide } from 'vue-swiper-component';
import  {isIphoneX} from '../../api/test'
export default {
    name: 'getCard',
    components: {
    Swiper,
    Slide
    },
    data() {
        return {
            currentPage: 0,
            iphoneX: false
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
        },
        thisIsIphoneX () {
            this.iphoneX = isIphoneX()
        },
    },
    mounted() {
        this.thisIsIphoneX()
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
.storyInfoAllX {
    width: 750px;
    height: 500px;
    position: absolute;
    z-index: 1;
    top: 2vh;
    
}
.storyInfo {
    width: 553px;
    height: 438px;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
    top: 6.05vh;
}
.img1 {
    width: 553px;
    height: 438px;
    background-size: 100% 100%;
    background-image: url(../../assets/imgs/story/story1-1.png);
}
.img2 {
    width: 553px;
    height: 438px;
    background-size: 100% 100%;
    background-image: url(../../assets/imgs/story/story1-2.png);
}
.img3 {
    width: 553px;
    height: 438px;
    background-size: 100% 100%;
    background-image: url(../../assets/imgs/story/story1-3.png);
}
.img4 {
    width: 553px;
    height: 438px;
    background-size: 100% 100%;
    background-image: url(../../assets/imgs/story/story1-4.png);
}
.img5 {
    width: 553px;
    height: 438px;
    background-size: 100% 100%;
    background-image: url(../../assets/imgs/story/story1-5.png);
}
.arrowL {
    position: absolute;
    left: 40px;
    top: 25.69vh;
    background-size: 100% 100%;
    width: 49px;
    height: 64px;
    background-image: url(../../assets/imgs/story/arrowL.png);
}
.arrowLX {
    position: absolute;
    left: 40px;
    top: 21.69vh;
    background-size: 100% 100%;
    width: 49px;
    height: 64px;
    background-image: url(../../assets/imgs/story/arrowL.png);
}
.arrowR {
    position: absolute;
    right: 40px;
    top: 26.69vh;
    background-size: 100% 100%;
    width: 49px;
    height: 64px;
    background-image: url(../../assets/imgs/story/arrowR.png);
}
.arrowRX {
    position: absolute;
    right: 40px;
    top: 22.69vh;
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
        width: 553px;
        line-height: 40px;
        font-family: 'huakang';
        color: #862526;
    }
}
.infoX {
    position: absolute;
    top: 40vh;
    width: 750px;
    font-size: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        display: block;
        margin: 0 auto;
        width: 553px;
        line-height: 50px;
        font-family: 'huakang';
        color: #862526;
        position: relative;
        bottom: 1.5vh;
    }
}
</style>
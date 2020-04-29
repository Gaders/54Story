<template>
    <div class="prize">
        <div class="prizegogal">
            <div class="content">
                <prizelevel :level="prizelevel"></prizelevel>
            </div>
        </div>
    </div>
</template>
<script>
import prizelevel from "../components/prize/level"
export default {
    name:'prize',
    data(){
        return{
            prizelevel:0
        }
    },
    components:{
        prizelevel
    },
    methods:{
        getprize(){
            const {level} = this.$route.query
            this.prizelevel = level  
        }
    },
    mounted(){
        this.getprize()
    }
}
</script>
<style lang="scss" scoped>
.prize{
    width: 750px;
    height: 100vh;
    background-size: 100% 100%;
    background-position: center 0;
    background-repeat:  no-repeat;    
    font-family: "huakang";
    .prizegogal{
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
        background-position: center 0;
        background-repeat:  no-repeat;    
        .content{
            position: absolute;
            width: 450px;
            height: 53vh;
            margin-left: 140px;
            margin-top: 30vh; 
        }         
    }
    .prizegogal{
        background-image: url(../assets/imgs/prize/prizemiss.png);
    }
}
</style>
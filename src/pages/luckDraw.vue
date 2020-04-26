<template>
    <div class="prize">
        <div class="prizegogal"  v-if="gogal">
            <div class="content">
                <prizelevel :level="3"></prizelevel>
            </div>
        </div>
        <div class="prizemiss" v-else>

        </div>
    </div>
</template>
<script>
import prizelevel from "../components/prize/level"
export default {
    name:'prize',
    data(){
        return{
            gogal:true
        }
    },
    components:{
        prizelevel
    }
}
</script>
<style lang="scss" scoped>
.prize{
    width: 750px;
    height: 1334px;
    background-position: center 0;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;  
    .prizegogal , .prizemiss{
        width: 100%;
        height: 100%;
        background-position: center 0;
        background-repeat: no-repeat;
        background-size: cover;
        -webkit-background-size: cover; 
        .content{
            position: absolute;
            width: 450px;
            height: 710px;
            margin-left: 140px;
            margin-top: 310px; 
        }         
    }
    .prizegogal{
        background-image: url(../assets/imgs/prize/prizegogal.png);
    }
    .prizemiss{
        background-image: url(../assets/imgs/prize/prizemiss.png);
    }
}
</style>
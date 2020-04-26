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
    height: 100vh;
    background-size: 100% 100%;
    background-position: center 0;
    background-repeat:  no-repeat;    
    .prizegogal , .prizemiss{
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
            margin-top: 24vh; 
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
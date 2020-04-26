<template>
    <div class="level">
        <div class="level_0" v-if="level === 0">
            <p>太可惜了</p>
            <div class="show_level"></div>
        </div>
        <div class="level_1" v-else-if="level === 1">
            <p>恭喜你！获得</p>
            <div class="show_level"></div>
        </div>
        <div class="level_2" v-else-if="level === 2">
            <p>恭喜你！获得</p>
            <div class="show_level"></div>
        </div>
        <div class="level_3" v-else-if="level === 3">
            <p>恭喜你！获得</p>
            <div class="show_level"></div>
        </div>
        <div class="level_4" v-else-if="level === 4">
            <p>恭喜你！获得</p>
            <div class="show_level"></div>
        </div>                    
        <div class="buttons">
            <div class="goon"></div>
            <div class="read" @click="toHome"></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
        }
    },
    props:{
        level:{
            type:Number,
            default:0
        }
    },
    methods:{
        toHome(){
            this.$router.push({path: '/'})
        }
    }
}
</script>
<style lang="scss" scoped>
.level{
    width: 100%;
    height: 100%;
    .level_0 , .level_1, .level_2 , .level_3 , .level_4{
        width: 100%;
        height: 31vh;
        p{
            font-size: 45px;
            text-align: center;
            line-height: 1.5em;
            color: #933424;
        }
        .show_level{
            width: 100%;
            height: 21vh;
            margin-top: 50px;
            background-position: center 0;
            background-repeat: no-repeat;
            background-size: cover;
            -webkit-background-size: cover;    
        }
    }
    .level_0{
        .show_level{
            background-image: url(../../assets/imgs/prize/level_0.png);
        } 
    }   
    .level_1{
        .show_level{
            background-image: url(../../assets/imgs/prize/level_1.png);
        }

    }
     .level_2{
        .show_level{
            background-image: url(../../assets/imgs/prize/level_2.png);
        }

    }
    .level_3{
        .show_level{
            background-image: url(../../assets/imgs/prize/level_3.png);
        }
    }  
    .level_4{
        .show_level{
            background-image: url(../../assets/imgs/prize/lukcy.png);
        }
    }       
    .buttons{
        width: 100%;
        height: 21vh;
        .goon , .read{
            width: 360px;
            height:9vh;
            background-position: center 0;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            -webkit-background-size: 100% 100%;  
            margin: auto auto;           
        }
        .goon{
            background-image: url(../../assets/imgs/prize/goon.png);
        }
        .read{
            margin-top: 2vh;
            background-image: url(../../assets/imgs/prize/red.png);
        }
    }
}
</style>
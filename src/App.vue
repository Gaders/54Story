<template>
  <div id="app" >
    <wx v-if="isWx"></wx>
    <div v-if="!isWx">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {isWx} from './wx.js' 
import wx from './components/wx.vue'
export default {
    name: "app",
    data(){
        return {
            isWx
        }
    },
    components: {
        wx
    }
};
</script>

<style>
* {
    margin: 0;
}
@font-face {
  font-family: "huakang";
  src: url("./assets/font/华康简综艺.eot");
  src: url("./assets/font/华康简综艺.eot?#iefix") format("embedded-opentype"),
    url("./assets/font/华康简综艺.woff") format("woff"),
    url("./assets/font/华康简综艺.ttf") format("truetype"),
    url("./assets/font/华康简综艺.svg#svgFontName") format("svg");
}
html{
    height: 100%;
    width: 100%;
}
body{
    height: 100%;
    width: 100%;    
}
#app{
    height: 100%;
    width: 100%;    
}

</style>


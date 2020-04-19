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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

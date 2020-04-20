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
</style>

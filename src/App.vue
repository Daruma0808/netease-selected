<template>
    <div id="app">
        <router-view class="views"></router-view>
        <FootBar></FootBar>
    </div>
</template>

<script>
import FootBar from './components/footBar/footBar';
export default {
    name: "App",
    components: {FootBar},
    mounted(){
        console.log(this.$router);
    },
    data() {
        return {
            active:'firstView'
        };
    }
};
</script>


<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #eee;
    color: #2c3e50;
}
.views{
  padding-bottom: 103px;
}

img{
    display:block;
    width: 100%
}
</style>

<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'app',
        components: {
            HelloWorld
        },
        mounted: function () {
            let vm = this;
            // Listen LocalStorage:Token
            window.addEventListener('storage', function (e) {
                if (e.key === 'token') {
                    let token = e.newValue;
                    vm.$socket.disconnect();
                    vm.$getSocket(token);
                }
            });
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

<template>
    <a-layout id="layout" class="layout">
        <a-layout-header>
            <div class="logo">KUNTAN</div>
            <Auth/>
        </a-layout-header>
        <a-layout-content style="padding: 20px 50px">
            <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
                <router-view></router-view>
            </div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
            Kuntan ©2018 Created by Fukun.Tech
        </a-layout-footer>
    </a-layout>
</template>

<script>
    import Auth from './components/Auth.vue';

    export default {
        name: 'app',
        components: {
            Auth
        },
        beforeMount: function () {
            // before auth.component created sync auth data
            // auth.component can render the right with updated auth data
            let vm = this;
            console.log('beforeMount');
            vm.$store.dispatch('auth/syncAuth');
            // listen the change of token
            window.addEventListener('storage', function (e) {
                if (e.key === 'token') {
                    vm.$store.dispatch('auth/syncAuth');
                }
            });
        }
    }
</script>

<style>
    #layout {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }

    #layout .logo {
        width: 120px;
        height: 31px;
        background: rgba(255, 255, 255, 0.4);
        margin: 16px 24px 16px 0;
        float: left;
        font-size: 28px;
        line-height: 33px;
    }
</style>

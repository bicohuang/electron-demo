<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
    name: 'electron-demo',
    methods: {
        ...mapMutations({
            init: 'Common/init',
            loginit: 'Logger/init',
            addLog: 'Logger/addLog'
        })
    },
    created() {
        //this.init()
        this.loginit({appAccount: 'admini', appPath: './src'})
        this.addLog({level: 'info', info: '初始化'})
        console.log('consoleLog')
        console.warn('sss')
    }
}
</script>

<style>
/* CSS */
</style>

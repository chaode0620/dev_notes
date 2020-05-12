<template>
    <div class="layout">
        <layout-header/>
        <layout-nav/>
        <App/>
        <layout-footer/>
    </div>
</template>

<script>
import App from '../App'
import layoutHeader from './components/header'
import layoutFooter from './components/footer'
export default {
    name: 'layout',
    components: { App, layoutHeader, layoutFooter }
}
</script>

<style scoped>

</style>

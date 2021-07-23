<template>
    <div id="app">
        <!-- <SignPage></SignPage> -->
        <SongSheet></SongSheet>
    </div>
</template>
<script>
// import SignPage from './components/SignPage'
import SongSheet from './components/SongSheet'
export default {
    components: {
        // SignPage,
        SongSheet
    }
}
</script>
<style lang="less" scoped>
#app{
    width: 100%;
    height: 100%;
}
</style>
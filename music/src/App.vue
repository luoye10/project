<template>
    <div id="app">
        <SignPage></SignPage>
    </div>
</template>
<script>
import SignPage from './components/SignPage'
export default {
    components: {
        SignPage
    }
}
</script>
<style lang="less" scoped>
    #app{
        width: 100%;
        height: 100%;
        background: url('https://img-qn-1.51miz.com/Element/00/74/16/72/1f2a329b_E741672_bdb7bba2.jpg!/quality/90/unsharp/true/compress/true/format/jpg/fh/260');
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
    }
</style>
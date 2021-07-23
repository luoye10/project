<template>
    <div class="icons">
        <i class="el-icon-caret-left left" @click="prev"></i>
        <div @click="button" class="btn">
            <i class="el-icon-video-pause " v-show="isPlay"></i>
            <i class="el-icon-video-play " v-show="!isPlay"></i>
        </div>
        <i class="el-icon-caret-right right" @click="next"></i>
        <div class="nowTime"></div>
        <div class="progress">
            <div class="now"></div>
        </div>
        <div class="end">{{this.allTime}}</div>
        <audio src=""></audio>
    </div>
</template>
<script>
export default {
    props: [
        'id',
        'time'
    ],
    data(){
        return {
            isPlay: false,
            audio: null,
            allTime: ''
        }
    },
    mounted(){
        this.request()
        this.audio = document.getElementsByTagName('audio')[0]
        this.allTime = this.format(this.time)
    },
    methods: {
        button(){
            this.isPlay = !this.isPlay
            if(this.isPlay){
                this.audio.play()
            }else{
                this.audio.pause()
            }
        },
        prev(){

        },
        next(){

        },
        request(){
            var xhr = new XMLHttpRequest()
            var url = 'https://btea.site/music/song/url?id=' + this.id
            xhr.open('get',url)
            xhr.onreadystatechange = () => {
                if(xhr.readyState === 4){
                    var obj = JSON.parse(xhr.response)
                    console.log(obj)
                    this.audio.src = obj.data[0].url
                }
            }
            xhr.send(null)
        },
        format(t){
            console.log(t)
            var m = Math.floor(t / 60000),
            s = String(t % 60000).slice(0,2)
            t = '0' + m + ':' + s 
            return t
        }
        
    }
}
</script>
<style lang="less" scoped>
    .icons{
        width: 100%;
        height: 80px;
        position: fixed;
        bottom: 0;
        left: 0;
        border-top: 1px solid aqua;
        vertical-align: middle;
        text-align: center;
        line-height: 80px;
        background: rgba(199, 188, 188, 0.87);
        .left,.btn,.right{
            display: inline-block;
            font-size: 30px;
            color: aqua;
            cursor: pointer;
            margin: 0 10px;
            vertical-align: middle;
        }
        .nowTime{
            display: inline-block;
            width: 50px;
            height: 20px;
            margin: 0 10px;
            color: aqua;
            vertical-align: middle;
        }
        .progress{
            display: inline-block;
            width: 400px;
            height: 20px;
            border: 1px solid aqua;
            border-radius: 20px;
            vertical-align: middle;
            .now{
                width: 0;
                height: 20px;
                cursor: pointer;
                border-radius: 20px;
            }
        }
        .end{
            display: inline-block;
            width: 80px;
            height: 20px;
            margin: 0 10px;
            color: aqua;
        }
    }
</style>
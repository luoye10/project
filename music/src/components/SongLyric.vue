<template>
    <div class="box">
        <div class="lyrics">
            <ul class="lyric-list">
                <li class="lyric" v-for="lyric in lyrics" :key="lyric.message">{{lyric}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: [
        'id'
    ],
    data(){
        return {
            lyrics: []
        }
    },
    mounted(){
        console.log(this.id)
        this.request()
    },
    methods: {
        request(){
            var xhr = new XMLHttpRequest();
            var url = 'https://btea.site/music/lyric?id=' + this.id
            xhr.open('get',url)
            xhr.onreadystatechange = () => {
                if(xhr.readyState === 4){
                    var obj = JSON.parse(xhr.response)
                    console.log(obj)
                    this.lyrics = obj.lrc.lyric.split(/\[\d{2}:\d{2}.\d{2,}\]/g)
                    this.lyricTime = obj.lrc.lyric.match(/\d{2}:\d{2}/g)
                }
            }
            xhr.send(null)
        }
    }
}
</script>
<style lang="less" scoped>
    ul,li{
        margin: 0;
        height: 0;
        list-style: none;
    }
    .lyrics{
        width: 500px;
        height: 400px;
        overflow-y: auto;
        margin: -20px auto;
        .lyric{
            margin-bottom: 5px;
            height: 20px;
            text-align: center;
            color: rgba(192, 168, 30, 0.747)
        }
    }
    .lyrics::-webkit-scrollbar{
        width: 10px;
    }
    .lyrics::-webkit-scrollbar-track{
        width: 10px;
        border-radius: 5px;
        background: #adf;
    }
    .lyrics::-webkit-scrollbar-thumb{
        height: 10px;
        border-radius: 5px;
        background: aqua;
    }
    
</style>
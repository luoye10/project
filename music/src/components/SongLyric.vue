<template>
    <div class="lyrics">
        <ul class="lyric-list">
            <li class="lyric" v-for="lyric in lyrics" :key="lyric.message">{{lyric}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    props: [
        'id'
    ],
    data(){
        return {
            lyrics: [],
            lyricTime: [],
            lyric: ''
        }
    },
    mounted(){
        this.request()
        this.lyric = document.getElementsByClassName('lyric')
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
        },
        highlight(playTime){
            for(var i = 0 ; i < this.lyricTime.length; i++){
                if(playTime >= this.lyricTime[i] && playTime < this.lyricTime[i + 1]){
                    this.lyric[i].style.color = ''
                    this.lyric[i + 1].style.color = 'red'
                    this.lyric[i + 1].parentNode.scrollTop = (i + 1) * 20
                    break
                }
            }
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
        
        .lyric-list{
            width: 600px;
            height: 400px;
            overflow-y: auto;
            margin: 20px auto;
            text-align: center;
            .lyric{
                margin: 10px auto;
                height: 20px;
                text-align: center;
                color: rgba(192, 168, 30, 0.747)
            }
        }
        .lyric-list::-webkit-scrollbar{
            width: 10px;
        }
        .lyric-list::-webkit-scrollbar-track{
            width: 10px;
            border-radius: 10px;
            background: #adf;
        }
        .lyric-list::-webkit-scrollbar-thumb{
            border-radius: 10px;
            background: aqua;
        }   
    }
    
</style>
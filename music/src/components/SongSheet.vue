<template>
    <div class="page">
        <div class="page-box">
            <div class="head">
                <div class="logo">
                    <img src="https://s1.music.126.net/style/favicon.ico?v20180823" class="mark">
                    <span class="text">网易云音乐</span>
                </div>
                <div class="search">
                    <input type="text" class="words" v-model="word">
                    <div class="btn" @click="query" >查询</div>
                </div>
            </div>  
            <div class="inner">
                <ul class="song-list" v-if="!isShow">
                    <li class="song" v-for="item in items" :key="item.message" @click="button(item)">
                        <img :src="item.album.artist.img1v1Url" class="img">
                        <div class="content">
                            <span class="name">{{item.name}}</span>
                            <span class="singer">{{item.artists[0].name}}</span>
                            <span class="album">{{item.album.name}}</span>
                        </div>
                    </li>
                </ul>
                <SongLyric v-if="isShow" :id="songId"></SongLyric>
                <SongComment v-if="isShow" :id="songId"></SongComment>
            </div>
        </div>
        <Player v-if="isShow" :id="songId" :time="songTime"></Player>
    </div>
</template>
<script>
import Player from './Player.vue';
import SongLyric from './SongLyric'
import SongComment from './SongComment'
export default {
    components: { 
        Player,
        SongLyric,
        SongComment 
    },
    data(){
        return {
            word: '',
            items: [],
            isShow: false,
            songId: null,
            songTime: ''
        }
    },
    methods: {
        query(){
            var xhr = new XMLHttpRequest();
            var url = 'https://btea.site/music/search?keywords=' + this.word;
            xhr.open('get',url);
            xhr.onreadystatechange = () => {
                if(xhr.readyState === 4){
                    var obj = JSON.parse(xhr.response);
                    console.log(obj)
                    this.items = obj.result.songs
                }
            }
            xhr.send(null);
            this.isPlay = !this.isPlay
        },
        button(item){
            this.isShow = !this.isShow
            this.songId = item.id
            this.songTime = item.duration
            document.body.style.background = 'url(https://img-qn-4.51miz.com/Element/00/74/33/90/99a03248_E743390_890f79b1.jpg!/quality/90/unsharp/true/compress/true/format/jpg/fh/260)'
            document.body.style.backgroundSize = 'cover'
            document.body.style.backgroundPosition = 'center center'
            document.body.style.backgroundRepeat = 'no-repeat'
            document.body.style.backgroundAttachment = 'fixed'
        }
    }
}
</script>
<style lang="less">
body,div,ul,li{
    margin: 0;
    padding: 0;
    list-style: none;
}
body{
    width: 100%;
    height: 100%;
    background: url(https://img-qn-2.51miz.com/Element/00/73/41/22/3d6d6458_E734122_dcb07fcd.jpg!/quality/90/unsharp/true/compress/true/format/jpg/fh/260);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    .page{
        .page-box{
            .head{
                height: 100px;
                background: #1aa6d188;
                vertical-align: middle;
                .logo{
                    display: inline-block;
                    vertical-align: middle;
                    .mark{
                        width: 40px;
                        height: 40px;
                        margin: 30px;
                        vertical-align: middle;
                    }
                    .text{
                        display: inline-block;
                        height: 30px;
                        font-size: 20px;
                        color: aqua;
                        letter-spacing: .2em;
                        vertical-align: middle;
                    }
                }
                .search{
                position: absolute;
                left: 40%;
                top: 35px;
                vertical-align: middle;
                    .words{
                        display: inline-block;
                        width: 200px;
                        height: 30px;
                        border: 1px solid aqua;
                        border-radius: 3px;
                        outline: none;
                        color: rgb(206, 27, 206);
                        background: pink;
                        vertical-align: middle;
                    }
                    .btn{
                        display: inline-block;
                        width: 100px;
                        height: 30px;
                        border: 1px solid aqua;
                        border-radius: 3px;
                        margin-left: 10px;
                        text-align: center;
                        line-height: 30px;
                        letter-spacing: 1em;
                        padding-left: 12px;
                        color: rgba(212, 0, 255);
                        cursor: pointer;
                        vertical-align: middle;
                    }
                }
            }
            .inner{
                margin: 0 auto;
                .song{
                    list-style: none;
                    height: 100px;
                    border: 1px solid aqua;
                    border-radius: 3px;
                    margin: 20px;
                    background: rgba(177, 164, 164, 0.788);
                    cursor: pointer;
                    vertical-align: middle;
                    line-height: 100px;
                    .img{
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        vertical-align: middle;
                        line-height: 100px;
                        margin: 0 20px;
                    }
                    .content{
                        margin: 0 10px;
                        display: inline-block;
                        vertical-align: middle;
                        line-height: 100px;
                        opacity: .5;
                        span{
                            display: inline-block;
                        }
                        .name{
                            width: 400px;
                            height: 30px;
                            color: aqua;
                            margin: 0 20px;
                        }
                        .singer{
                            width: 200px;
                            height: 30px;
                            margin: 0 50px;
                            color: rgb(224, 67, 40);
                        }
                        .album{
                            width: 400px;
                            height: 30px;
                            margin: 0 20px;
                            color: rgb(187, 52, 221);
                        }
                    }
                }
            }
        }
    }
}

    
</style>
<template>
    <div class="container">
        <ul class="comment-list">
            <li class="comment" v-for="comment in comments" :key="comment.message">
                <div class="left">
                    <img :src="comment.user.avatarUrl" class="img">
                </div>
                <div class="right">
                    <div class="text">
                        <span class="name">{{comment.user.nickname + ' : '}}</span>
                        <span class="content">{{comment.content}}</span>
                        <div class="time">{{comment.time}}</div>
                    </div>
                </div>
            </li>
        </ul>
        <ul class="page-list">
            <li class="page" v-for="item in pages" :key="item.message" @click="button(item)">{{item}}</li>
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
            comments: [],
            limit: 20,
            time: '',
            total: null,
            pages: [],
            page: 1,
            offset: (this.page - 1) * this.limit
        }
    },
    mounted(){
        this.request()
    },
    methods: {
        request(){
            var xhr = new XMLHttpRequest();
            var url = 'https://btea.site/music/comment/music?id=' + this.id + '&' + this.limit + '&' + this.offset
            xhr.open('get',url)
            xhr.onreadystatechange = () => {
                if(xhr.readyState === 4){
                    var obj = JSON.parse(xhr.response)
                    console.log(obj)
                    this.comments = obj.comments
                    this.total = obj.total
                    this.comments.forEach(item => {
                        item.time = this.formatTime(item.time,'yyyy-MM-dd hh:mm:ss') 
                    })
                    if(this.page === 1){
                        this.pager(this.total,this.limit)
                    }
                }
            }
            xhr.send(null)
        },
        formatTime(paramTime,format){
            let time = new Date(paramTime)
            let y = time.getFullYear(),
            M = time.getMonth() + 1,
            d = time.getDate(),
            h = time.getHours(),
            m = time.getMinutes(),
            s = time.getSeconds();
            let list = {
                'y+': y,
                'M+': ('0' + M).slice(-2),
                'd+': ('0' + d).slice(-2),
                'h+': ('0' + h).slice(-2),
                'm+': ('0' + m).slice(-2),
                's+': ('0' + s).slice(-2)
            }
            Object.keys(list).forEach(key => {
                format = format.replace(new RegExp(key),list[key])
            })
            return format
        },
        pager(num,size){
            this.page = Math.ceil(num / size)
            if(this.page <= this.limit / 2){
                var i = 0
                this.pages.push(i + 1)
                i++
            }else{
                this.pages.push(1,2,3,4,5,6,7,8,'...',this.page)
            }
        },
        button(item){
            this.page == item
            
        }
    }
}
</script>
<style lang="less" scoped>
    ul,li,img,div{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .container{
        margin: 30px auto;
        .comment-list{
            .comment{
                height: 100px;
                border: 1px solid aqua;
                border-radius: 3px;
                margin: 20px;
                background: rgba(177, 164, 164, 0.788);
                cursor: pointer;
                position: relative;
                .left{
                    display: inline-block;
                    width: 100px;
                    vertical-align: middle;
                    .img{
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        margin: 20px;
                    }
                }
                .right{
                    position: absolute;
                    left: 100px;
                    top: 20px;
                    .text{
                        .name{
                            color: rgba(153, 29, 190, 0.788);
                            margin-right: 5px;
                        }
                        .content{
                            color: rgba(16, 28, 190, 0.788);
                        }
                    }
                    .time{
                        color: rgba(233, 21, 169, 0.856);
                    }
                }
            }
        }
        .page-list{
            text-align: center;
            .page{
                display: inline-block;
                width: 50px;
                height: 50px;
                border: 1px solid aqua;
                border-radius: 5px;
                line-height: 50px;
                text-align: center;
                margin: 10px;
                margin-bottom: 100px;
                cursor: pointer;
            }
            .active{
                background: rgba(23, 161, 216, 0.87);
                color: rgba(255, 255, 255, 0.904);
            }
        }
    }
</style>
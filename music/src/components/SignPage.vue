<template>
    <div class="background">
        <div class="box" v-show="true">
            <div class="text">用户登录</div>
            <div class="name">
                <i class="el-icon-user icon"></i>
                <input type="text" placeholder="账号" v-model="name">
            </div>
            <div class="password">
                <i class="el-icon-goods icon"></i>
                <input type="password" placeholder="密码" v-model="password">
            </div>
            <el-button class="sign" @click="login">登录</el-button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name: '15994266464',
            password: 'zyh1992',
        }
    },
    methods: {
        login(){
            var xhr = new XMLHttpRequest();
            var url = 'https://btea.site/music/login/cellphone?phone=' + this.name + '&password=' + this.password;
            xhr.open('get',url);
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4){
                    var obj = JSON.parse(xhr.response)
                    console.log(obj);
                }
            }
            xhr.send(null);
        }
    }
}
</script>
<style lang="less" scoped>
.background{
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
    .box{
        width: 500px;
        height: 500px;
        border: 1px solid aqua;
        border-radius: 5px;
        margin: 100px auto;
        background: rgba(27, 167, 177, 0.589);
        .text{
            height: 150px;
            text-align: center;
            line-height: 150px;
            font-size: 26px;
            letter-spacing: .5em;
            color: pink;
        }
        .name,.password{  
            position: relative;
            .icon{
                font-size: 20px;
                position: absolute;
                left: 55px;
                top: 35px;
                color: aqua;
            }  
            input{
                width: 80%;
                height: 50px;
                background: rgba(192, 227, 255, 0.521);
                padding-left: 30px;
                color: white;
                font-size: 16px;
                border-radius: 2px;
                border: 1px solid rgba(192, 227, 255, 0.521);
                box-sizing: border-box;
                margin: 20px 50px;
                outline: none;
            }   
            input::-webkit-input-placeholder{
                color: pink;
            }  
        }
        .sign{
            width: 200px;
            height: 50px;
            border: 1px solid #adf;
            border-radius: 3px;
            color: pink;
            font-size: 22px;
            letter-spacing: 1em;
            margin: 40px auto;
            cursor: pointer;
            display: block;
            padding-left: 30px;
            background: rgba(27, 167, 177, 0.589);
        }
    }
}
    
</style>
<template>
    <div class="box">
        <div class="text">用户登录</div>
        <div class="name">
            <input type="text" placeholder="账号">
        </div>
        <div class="password">
            <input type="password" placeholder="密码">
        </div>
        <div class="sign">登录</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name: '',
            password: ''
        }
    }
}
</script>
<style lang="less" scoped>
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
            }     
        }
        .sign{
            width: 200px;
            height: 50px;
            border: 1px solid #adf;
            border-radius: 3px;
            color: aqua;
            font-size: 22px;
            letter-spacing: .5em;
            text-align: center;
            line-height: 52px;
            margin: 40px auto;
            cursor: pointer;
        }
    }
</style>
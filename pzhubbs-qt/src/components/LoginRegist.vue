<template>
	<div>
        <el-dialog
            :title="dtitle"
            :visible.sync="openstatus"
            width="25%">
            <el-form :model="form" ref="form" >
                <el-form-item label="">
                    <el-input placeholder="请输入用户名：" v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-input placeholder="请输入密码：" v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item v-if="dtitle ==='注册'" label="">
                    <el-input placeholder="请确认密码：" v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" :style="{width:'100%'}" >{{dtitle}}</el-button>
                </el-form-item>
                <el-form-item label="">
                     <el-button v-if="dtitle ==='登录'" :style="{width:'100%'}" >注册新账号</el-button>
                    <el-button v-else type="text" :style="{width:'100%'}" >已有账号登录</el-button>
                </el-form-item>
            </el-form>
            
        </el-dialog>
        
    </div>
</template>
<script>
export default {
    props:{
        isvisible:{
            type:Boolean
        },
        title:{
            type:String
        }
    },
    data(){
        return{
            openstatus:this.isvisible,
            dtitle:this.title,
            form:{
                username:'',
                password:'',
                querypassword:''
            }
        }
    },
    methods:{

    },
    watch:{
        isvisible(val){
            this.openstatus = val;
        },
        title(val){
            this.dtitle = val;
        },
        openstatus(val){
            this.$emit('transferGetStatus',this.openstatus,this.dtitle)
        }
        
    }
};
</script>
<style lang="scss" scoped>
</style>

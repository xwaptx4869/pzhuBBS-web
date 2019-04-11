<template>
<div class="navbar">
    <div class="navbar-content">
    <router-link to="/" class="tohome" >
    <img src="../assets/logo.png"  alt="">
    <h4>Pzhu技术交流社区</h4>
    </router-link>
    <div class="searchbox">
          <el-input v-model="searchValue" suffix-icon="el-icon-search" placeholder="搜索想看的文章"></el-input>
    </div>
    <div class="rightbox">
         <span v-if="!isLogin"  >
                登录
            </span>
            <span v-if="isLogin" class="nav-right-action">
                <svg-icon icon-class="bell" />
            </span>
            <el-dropdown v-if="isLogin" trigger="click" @command="handleCommand">
                <span class="el-dropdown-link nav-right-action">
                    <svg-icon icon-class="people" />
                    <span>{{ user.name }}</span>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="/account/subjectInfo">主体信息</el-dropdown-item>
                    <el-dropdown-item command="/account/bank">银行账户</el-dropdown-item>
                    <el-dropdown-item command="/account/sp">渠道管理</el-dropdown-item>
                    <el-dropdown-item command="/account/team">团队管理</el-dropdown-item>
                    <el-dropdown-item command="/account/personal">个人信息</el-dropdown-item>
                    <el-dropdown-item divided command="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
    </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            searchValue:'',
            isLogin:true,
            user:{
                name:'xuwei'
            }
        }
    },
    created(){
        
    },
    methods:{
      handleCommand(command) {
            switch (command) {
                case 'logout':
                    this.logout();
                    break;
                default:
                    this.$router.push({path: command});
                    break;
            }
        },
        // 前端登出
        logout() {
            this.$store.dispatch('Logout').then(() => {
                location.reload(); // In order to re-instantiate the vue-router object to avoid bugs
            });
        }
    }
    
}
</script>

<style lang="scss" scoped>
  .navbar{
      width: 100%;
      min-width: 1170px;
      height: 50px;
      background: #fff;
      position: relative;
      box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    .navbar-content{
      position: absolute;
      left: 50%;
      line-height: 50px;
      transform: translateX(-50%);
      width: 1170px;
      .tohome{
          float: left;
          h4{
              color:rgb(92, 225, 230);
              display: inline-block;
          }
          img{
              padding-right: 10px;
              vertical-align: -40%;
              width: 50px;
              height: 50px;
          }
      }
      .searchbox{
          margin-left: 100px;
          display: inline-block;
      }
      .rightbox{
          float: right;
      }
    }
  }
</style>

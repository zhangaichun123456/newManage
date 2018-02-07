<template>
	<div class="layout">
        <el-container>
          <el-aside width="220px">
            <el-menu
              :default-active="activename"
              class="el-menu-vertical-demo"
              @select="select_name"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <router-link to='/home/homeindex'>
                <el-menu-item index="1">
                  <i class="el-icon-menu"></i>
                  <span slot="title">首页</span>
                </el-menu-item>
              </router-link>
              <router-link to='/home/usermana'>
                  <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">用户管理</span>
                  </el-menu-item>
               </router-link>
              <router-link to='/home/applimana'>
                <el-menu-item index="3">
                  <i class="el-icon-setting"></i>
                  <span slot="title">应用管理</span>
                </el-menu-item>
              </router-link>
              <router-link to='/home/unitsetting'>
                <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title">单位设置</span>
                </el-menu-item>
              </router-link>
            </el-menu>
          </el-aside>
          <router-view>
            <el-container> 
            </el-container>
          </router-view>
        </el-container>
    </div>
</template>

<script>

    import qs from 'qs';
    import { mapGetters,mapMutations } from 'vuex'
    import store from 'store'

	export default {
          data (){
          	return {
          		isCollapsed: false,
          	}
          },
          mounted:function(){
            console.log(this.activename)
          },
          computed: {
	       	...mapGetters([
	   		    'activename'
	   		  ]),
	        },
          methods:{
          	...mapMutations([
          		'RECORD_ACTIVENAME'
          		]),
          	//保存当前选中导航
          	select_name (index){
          		this.RECORD_ACTIVENAME(index);
          		store.set('activename',index);
          	}
          }
	}
</script>

<style scoped lang="scss">
.layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height:100%;
    }
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-container,.el-menu{
    height:100%;
  }
  .el-menu{
    text-align:left;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>

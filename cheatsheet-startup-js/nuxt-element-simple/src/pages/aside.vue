<template>
  <el-container class="container">
    <el-header class="top-header">
      <el-row>
        <el-col class="menu-area" :xl="24" :sm="24" :md="24" :lg="24">
          <a href="/">{{ title }}</a>
          <el-menu
            mode="horizontal"
            :default-active="menuActiveIndex"
            :background-color="menuBackgroundColor"
            :text-color="menuTextColor"
            :active-text-color="menuActiveColor"
            :router="true"
            @select="handleSelect"
          >
            <el-menu-item index="home" route="{name: 'index-index'}">
              首页
            </el-menu-item>
            <el-submenu index="dashboard" class="el-submenu_wrapper">
              <template slot="title">
                我的工作台
              </template>
              <el-menu-item index="2-1">
                选项1
              </el-menu-item>
              <el-menu-item index="2-2">
                选项2
              </el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">
                  选项4
                </template>
                <el-menu-item index="2-4-1">
                  选项1
                </el-menu-item>
                <el-menu-item index="2-4-2">
                  选项2
                </el-menu-item>
                <el-menu-item index="2-4-3">
                  选项3
                </el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="notification">
              消息中心
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-header>
    <!--      主体部分-->
    <el-container class="center-container">
      <el-aside width="220px" class="center-aside">
        <el-menu
          mode="vertical"
          :collapse="false"
          :router="true"
          :default-active="sideMenuActiveIndex"
          @select="handleSelect"
        >
          <el-menu-item index="home" route="{name: 'index-index'}">
            <i class="el-icon-s-home" />
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="operation">
            <template slot="title">
              <i class="el-icon-location" />
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">
                分组一
              </template>
              <el-menu-item index="1-1">
                选项1
              </el-menu-item>
              <el-menu-item index="1-2">
                选项2
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">
                选项3
              </el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">
                选项4
              </template>
              <el-menu-item index="1-4-1">
                选项1
              </el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="center-main">
        <nuxt-child />
      </el-main>
    </el-container>
    <el-footer class="bottom-footer">
      Copyright  © <a target="_blank" href="https://baidu.com">Element UI</a>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      title: '管理系统',
      menuActiveIndex: 'home',
      // 白色主题
      // menuBackgroundColor: '#fff',
      // menuTextColor: '#4d4f52',
      // menuActiveColor: '#0084ff',
      // 蓝色主题
      menuBackgroundColor: '#0366d6',
      menuTextColor: '#fff',
      menuActiveColor: '#fff',
      sideMenuActiveIndex: 'home'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      this.menuActiveIndex = key
    }
  }
}
</script>

<style>
  :root {
    --menu-background-color: #0366d6;
    --menu-text-color: #fff;
  }
</style>
<style lang="scss" scoped>
  .container {
    height: 100vh;
  }
  .top-header {
    font-weight: 500;
    // 设置位置
    position: sticky;
    top: 0;
    padding: 0 200px;
    z-index: 2;
    // 设置底纹
    background-color: var(--menu-background-color);
    border-bottom: 0;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
    transform: translateZ(0);
    .menu-area {
      display: flex;
      align-items: center;
      justify-content: space-between;
      a {
        padding: 0;
        margin: 0;
        color: var(--menu-text-color);
        text-decoration: none;
        outline: none;
        font-size: 1.25rem;
        line-height: inherit;
        white-space: nowrap;
      }
      .el-submenu_wrapper {
        /deep/ .el-submenu__icon-arrow {
          color: #fff;
        }
      }
    }
  }

  .center-container {
    background: #f8f8f8;
    .center-aside {
      padding: 2rem 1rem;
      border-radius: 25%;
    }
    .center-main {
      width: 80%;
    }
  }

  .bottom-footer {
    position: sticky;
    padding: 24px 50px;
    font-size: 12px;
    color: #999;
    text-align: center;
    flex: 0 0 auto;
    /* background: #f0f2f5; */
    a {
      text-decoration: none;
      margin-right: 40px;
      &:hover{
        /*background-color: #409EFF;*/
        color:#409EFF;
      }
    }
  }
</style>

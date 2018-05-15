<template>
  <div class="index">
        <!-- {{$store.state.account_store.account_username}}
        <button @click='click1'>click</button> -->  
        <div class="movie_slider">
          <el-carousel height="150px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="movie_banner">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">电影</el-menu-item>
            <el-menu-item index="2">韩剧</el-menu-item>
            <el-menu-item index="3">美剧</el-menu-item>
            <el-menu-item index="4">国产剧</el-menu-item>
            <el-menu-item index="5">综艺</el-menu-item>
            <el-menu-item index="6">西部世界</el-menu-item>
            <el-menu-item index="7" disabled>待添加</el-menu-item>
          </el-menu>
          <movieMenu/>
        </div>
  </div>

</template>

<script>

import movieMenu from './Movie_menu'
export default {
  components:{
    movieMenu,
  },
  data() {
      return {
        activeIndex: '1',
        img_lists:[]
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>

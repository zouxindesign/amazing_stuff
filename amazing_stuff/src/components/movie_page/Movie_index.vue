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
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1" @click="tab_change(child1)">电影</el-menu-item>
            <el-menu-item index="2" @click="tab_change(child2)">韩剧</el-menu-item>
            <el-menu-item index="3" @click="tab_change(child3)">美剧</el-menu-item>
            <el-menu-item index="4" @click="tab_change(child4)">国产剧</el-menu-item>
            <el-menu-item index="5" @click="tab_change(child5)">综艺</el-menu-item>
          </el-menu>
          <div :is="currentView"></div>
        </div>
  </div>

</template>

<script>

import child1 from './Movie_menu'
import child2 from './Movie_menu'
import child3 from './Movie_menu'
import child4 from './Movie_menu'
import child5 from './Movie_menu'
export default {
  components:{
    child1,
    child2,
    child3,
    child4,
    child5,
  },
  data() {
      return {
        child1: 'child1',
        child2: 'child2',
        child3: 'child3',
        child4: 'child4',
        child5: 'child5',
        currentView:'child1',
        activeIndex: '1',
        img_lists:[]
      };
    },
    methods: {
      tab_change(tab_item){
        this.currentView = tab_item;
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

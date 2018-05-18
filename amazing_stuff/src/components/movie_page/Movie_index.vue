<template>
  <div class="index">
        <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="i in movie_menu_img.data" >
                  <img :src="i.img_url" :alt="i.id" width="100%">
              </div>
            </div>
            <div class="swiper-scrollbar"></div>
          </div>
        
        <div class="movie_banner">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1" @click="tab_change(child1)" class="tab_font">电影</el-menu-item>
            <el-menu-item index="2" @click="tab_change(child2)" class="tab_font">韩剧</el-menu-item>
            <el-menu-item index="3" @click="tab_change(child3)" class="tab_font">美剧</el-menu-item>
            <el-menu-item index="4" @click="tab_change(child4)" class="tab_font">国产剧</el-menu-item>
            <el-menu-item index="5" @click="tab_change(child5)" class="tab_font">综艺</el-menu-item>
          </el-menu>
          <div :is="currentView"></div>
        </div>

  </div>

</template>

<script>
import {mapState} from 'vuex'
import Swiper from 'swiper';
import child1 from './Movie_menu'
import child2 from './Movie_menu'
import child3 from './Movie_menu'
import child4 from './Movie_menu'
import child5 from './Movie_menu'
import searchhead from '../header/header'
export default {
  components:{
    child1,
    child2,
    child3,
    child4,
    child5,
    searchhead,
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
    computed:{
      ...mapState({
        movie_menu_img: state => state.movie_store.movie_menu_img
      })
    },
    created(){
      this.$store.dispatch('load_movie_menu_img')
    },
    mounted(){
      setTimeout(()=>{
        new Swiper ('.swiper-container', {
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        scrollbar: {
        el: '.swiper-scrollbar',
        },
      })
      },100)
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
  .swiper-container{
    width: 100%;
    height: 240px;
  }
  .swiper-slide{
    width: 100%;
    height: 240px;
  }
  .swiper-slide img{
    display: inline;
  }
  .tab_font{
    font-size: 18px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 16px;
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
  .movie_banner ul{
    box-shadow: 4px 4px 8px 0px #c0c4cc;
    margin-bottom: 16px;
  }
</style>

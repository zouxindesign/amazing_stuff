<template>
  <div class="index">
        <searchhead />
        <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="i in movie_menu_img.data" >
                  <img :src="i.img_url" :alt="i.id" width="100%">
              </div>
            </div>
            <div class="swiper-scrollbar"></div>
        </div>


        <div class="movie_menu_icons">
          <div  @click="tab_change(child1)">
            <i class="iconfont icon-dianying"></i>
            <span class="icon_title">电影</span>
          </div>
          <div  @click="tab_change(child2)">
            <i class="iconfont icon-dianshiju"></i>
            <span>电视剧</span>
          </div>
          <div @click="tab_change(child3)">
            <i class="iconfont icon-zongyi"></i>
            <span>综艺</span>
          </div>
          <div @click="go_crack_vip()">
            <i class="el-icon-star-off"></i>
            <span>VIP</span>
          </div>
        </div> 
        <div :is="currentView"></div>
  </div>

</template>

<script>
import {mapState} from 'vuex'
import Swiper from 'swiper';
import child1 from '../movie_page/Movie_menu'
import child2 from '../movie_page/Tv_menu.vue'
import child3 from '../movie_page/Show_menu.vue'
import searchhead from '../header/header'
// import isshaked from '../../assets/js/isShake.js'
export default {
  components:{
    child1,
    child2,
    child3,
    searchhead,
  },
  data() {
      return {
        child1: 'child1',
        child2: 'child2',
        child3: 'child3',
        currentView:'child1',
        img_lists:[]
      };
    },
    computed:{
      ...mapState({
        movie_menu_img: state => state.movie_store.movie_menu_img
      })
    },
    created(){
      // var isisshaked = isshaked.isshaked;
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
        // console.log(tab_item)
        this.currentView = tab_item;
      },
      go_crack_vip(){
        this.$router.push('/crack_vip')
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .movie_menu_icons{
    display: flex;
    justify-content:space-around;
    margin: 0 8% 0 8%;
    height: 100px;
    line-height: 100px;
    border: 1px solid #f9f9f9;
    border-radius: 8px;
    box-shadow: 10px 10px 25px #d3d3d3;
  }
  .swiper-container{
    width: 100%;
    height: 320px;
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
  }
  .iconfont{
    color: #314369;
    font-size: 50px;
  }
  .el-icon-star-off{
    font-size: 50px;
    line-height: 100px;
    color: #475669;
  }
</style>

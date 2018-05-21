<template>
  <div>
    <!-- 卡片 start-->
    <div class=title_tag1 >最新电影</div>
    <div v-for="item in movie_menu_img.data">
      <div class="movie_card_menu">

        <div class="menu_card_img">
          <img :src="item.img_url" />
        </div>

        <div class="menu_card_content">
          <div class="menu_card_title">评分：</div>
          <div class="menu_card_score">评分：
            <span>9.0</span>&emsp;日期：
            <span>2019-09-11</span>
          </div>
          <div class="menu_card_commet">《匿名者》剧情简介：故事将聚焦欧文饰演的侦探生活在没有隐私，满是匿名举报者的世界。那里的一切公开透明，任何行为都在政府窥探、监管之下。然而，当侦探发现塞弗里德饰演的年轻女子，在警察的监管下隐于无形后。侦探真正开始思考，政府的行径是否才真的是在犯罪。</div>
        </div>

      </div>
    </div>
    <!-- end -->
    
  </div>
</template>

  
  <script>
  
  import {mapState} from 'vuex'
  export default {
    data() {
        return {
        };
      },
    computed:{
      ...mapState({
        movie_menu_img: state => state.movie_store.movie_menu_img
      })
    },
    mounted(){
      this.$store.dispatch('load_movie_menu_img')
    },
    methods:{
      go_this(){
        const currentImgId = event.currentTarget.alt;
        this.$router.push({path:'/Movie_play', name: 'Movie_play',query:{playId:currentImgId}})
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .movie_card_menu{
      margin: 15px;
      border: 1px solid #f9f9f9;
      border-radius: 8px;
      box-shadow: 10px 10px 25px #d3d3d3;
    }
    .title_tag1{
      color: #29395D;
      font-size: 32px;
      text-align: left;
      margin: 15px;
    }
    .menu_card_img img{
      width: 240px;
      height: 180px;
    }
    .menu_card_img{
      float: left;
    }
    .menu_card_title{
      font-size: 30px;
    }
    .menu_card_score{
      font-size: 12px;
    }
    .menu_card_content{
      color: #29395D;
      text-align: left;
      margin: 5px 5px 5px 260px ;
      height: 180px;
    }
    .menu_card_commet{
      font-size: 12px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
  </style>
  
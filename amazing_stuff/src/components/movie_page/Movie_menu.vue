<template>
    <div class="movie_menu">
          <div class=title_tag1>最新电影</div>
          <el-row :gutter="10" >
              <el-col :span="24" v-for="i in movie_menu_img.data">
                <div class="item_card">
                  <img :src="i.img_url" :alt="i.id" @click="go_this($event)"   >
                  <div class="conten_intro">
                  <div><span class="conten_intro_1">wield啊飒飒</span></div>
                  <div>评分：<span class="conten_intro_1">9.0</span></div>
                  <div>简介：<span class="conten_intro_1">《匿名者》剧情简介：故事将聚焦欧文饰演的侦探生活在没有隐私，满是匿名举报者的世界。那里的一切公开透明，任何行为都在政府窥探、监管之下。然而，当侦探发现塞弗里德饰演的年轻女子，在警察的监管下隐于无形后。侦探真正开始思考，政府的行径是否才真的是在犯罪。</span></div></div>
                  
                </div>
              </el-col>
          </el-row> 
          <!-- <div>最新电影</div> -->
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
    .movie_menu{
      padding-top: 16px;
      overflow: hidden;
      padding: 16px;

      font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif !important;
    }
    .el-col {
      border-radius: 4px;
    }
    .item_card img {
      border-radius: 8px;
      width:160px;
      height: 120px;
      float: left;
    }
    .item_card{
      border-radius: 8px;
      display: inline-block;
      /* box-shadow: 4px 4px 8px 0px #c0c4cc; */
      margin-bottom: 16px;
    }
    .title_tag1{
      text-align: left;
      color: #29395E;
      font-weight: bold;
      height: 50px;
      line-height: 50px;
    }
    .conten_intro{
      text-align: left;
      margin-left: 16px;
      width: 70%;
      float: left;
    }
    .conten_intro_1{
            width:10em;/*保证文字不会被半汉字截断,显示10个文字*/  
 
    }
  </style>
  
<template>
    <div class="movie_menu">
        
          <el-row :gutter="10" >
              <el-col :span="6" v-for="i in movie_menu_img.data">
                <div class="item_card">
                  <img :src="i.img_url" :alt="i.id" @click="go_this($event)" width="100%" height="100%">
                </div>
              </el-col>
          </el-row> 
        </el-card>
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
    }
    .el-col {
      border-radius: 4px;
    }
    .item_card img {
      border-radius: 8px;
    }
    .item_card{
      border-radius: 8px;
      box-shadow: 4px 4px 8px 0px #c0c4cc;
      margin-bottom: 16px;
    }
  </style>
  